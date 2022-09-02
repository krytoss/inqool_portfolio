import { onSnapshot } from 'firebase/firestore'
import { FC, useState, useEffect, useRef, useCallback } from 'react'
import { Project, projectsCollection } from '../utils/firebase'
import { query, where, orderBy } from 'firebase/firestore'

import PortfolioProject from './PortfolioProject'
import PortfolioArrow from './PortfolioArrow'

import '../scss/portfolio.scss'
import Tag from './Tag'

const Portfolio : FC = () => {
	const [projects, setProjects] = useState<Project[]>([
        {title: null, description: null, created: null},
        {title: null, description: null, created: null},
        {title: null, description: null, created: null},
        {title: null, description: null, created: null}
    ]);
    const [ tags, setTags ] = useState<Array<string>>([]);
    const [ selectedTags, setSelectedTags ] = useState<Array<string>>([]);
    const [ project, setProject ] = useState<number>(0)
    const [ isScrolledLeft, setIsScrolledLeft ] = useState<boolean>(true)
    const [ isScrolledRight, setIsScrolledRight ] = useState<boolean>(false)
    const [ isScrolling, setIsScrolling ] = useState<boolean>(false)
    const [ xDown, setXDown ] = useState<number | null>(null)
    const [ yDown, setYDown ] = useState<number | null>(null)

    const outsideRef = useRef<HTMLDivElement>(null)
    const insideRef = useRef<HTMLDivElement>(null)

    const checkScroll = useCallback(() => {
        if (outsideRef.current !== null && insideRef.current !== null) {
            setIsScrolledRight(insideRef.current?.scrollLeft + outsideRef.current?.offsetWidth >= insideRef.current?.scrollWidth - 20)
            setIsScrolledLeft(insideRef.current?.scrollLeft <= 20)
            const el = document.getElementsByClassName('portfolio__project')[0]
            const width = el ? el.clientWidth + 42 : 0
            const scrollLeft = project * width
            if (isScrolledRight || insideRef.current?.scrollLeft === scrollLeft) {
                setIsScrolling(false)
                insideRef.current?.scrollTo({ left: scrollLeft })
            }
            //setIsScrolling(!isScrolledRight && insideRef.current?.scrollLeft !== scrollLeft)
        }
    }, [ isScrolledRight, project, projects ])
        // eslint dáva warning že projects netreba, ale je to tu naschvál -
        // keď sa zmenší počet projektov tak, že zmiznu šípky a potom sa zväčší, tak šípka nepribudne, preto to tu je :)

    const scroll = useCallback(() => {
        const el = document.getElementsByClassName('portfolio__project')[0]
        if (insideRef.current && el) {
            const width = el ? el.clientWidth + 42 : 0
            const scrollLeft = project * width
            insideRef.current?.scrollTo({ left: scrollLeft, behavior: 'smooth' })
            if (scrollLeft === insideRef.current?.scrollLeft) {
                setIsScrolling(false)
                insideRef.current?.scrollTo({ left: scrollLeft })
            }
        }
    }, [ project ])

    const setPreviousProject = useCallback(() => {
        if (project > 0 && !isScrolling) {
            setProject( project - 1)
            setIsScrolling(true)
        }
    }, [ project, isScrolling ])

    const setNextProject = useCallback(() => {
        if (project < projects.length - 1 && !isScrolledRight && !isScrolling) {
            setIsScrolling(true)
            setProject(project + 1)
        }
    }, [ project, isScrolledRight, isScrolling, projects ])

    const handleTouchStart = useCallback((evt: globalThis.TouchEvent) => {
        const firstTouch = evt.touches[0];      
        if (firstTouch) {
            setXDown(firstTouch.clientX)
            setYDown(firstTouch.clientY)
        }
    }, [])

    const handleTouchEnd = useCallback((evt: globalThis.TouchEvent) => {

        if ( ! xDown || ! yDown || !evt.changedTouches[0] ) {
            return
        }
        var xUp = evt.changedTouches[0].clientX
        var yUp = evt.changedTouches[0].clientY

        var xDiff = xDown - xUp
        var yDiff = yDown - yUp

        if (Math.abs(xDiff) > 20) {
            if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
                if ( xDiff > 0 ) {
                    setNextProject()
                } else {
                    setPreviousProject()
                }
            }
        }

        /* reset values */
        setXDown(null)
        setYDown(null)

    }, [ xDown, yDown, setNextProject, setPreviousProject ])

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') {
            setNextProject()
        } else if (e.key === 'ArrowLeft') {
            setPreviousProject()
        }
    }, [ setNextProject, setPreviousProject ])

    const switchTag = useCallback((tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(
                selectedTags.filter(
                    (tag_) => tag_ !== tag
                )
            )
        } else {
            setSelectedTags(selectedTags.concat([tag]))
        }
    }, [ selectedTags ])

	useEffect(() => {
        const unsubscribe = onSnapshot(
            selectedTags.length > 0 ?
                query(projectsCollection, where('tags', 'array-contains-any', selectedTags), orderBy('created', 'desc')) :
                query(projectsCollection, orderBy('created', 'desc')),
            snapshot => {
                setProjects(snapshot.docs.map(doc => doc.data()))
                let _tags = tags
                snapshot.docs.forEach(project => {
                    project.data().tags?.forEach(tag => !_tags.includes(tag) && _tags.push(tag))
                })
                setTags(_tags)
            }
        )
        return () => {
            unsubscribe()
        }
	}, [ selectedTags, tags ])

    useEffect(() => {

        window.addEventListener('resize', checkScroll)
        window.addEventListener('resize', scroll)
        document.addEventListener('touchstart', handleTouchStart)
        document.addEventListener('touchend', handleTouchEnd)
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('resize', checkScroll)
            window.removeEventListener('resize', scroll)
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('touchstart', handleTouchStart)
            document.removeEventListener('touchend', handleTouchEnd)
        }

    }, [ handleKeyDown, handleTouchStart, handleTouchEnd, checkScroll, scroll ])

    useEffect(() => {
        scroll()
        checkScroll()
    }, [ project, scroll, checkScroll ])

    //useEffect(() => {
    //    checkScroll()
    //}, [ projects, checkScroll ])

    return (
        <section id='portfolio' ref={outsideRef}>
            <h2 className='section__title'>My portfolio</h2>
            <div className='portfolio__tags'>
                <div className="container text-center">
                    {tags && tags.map((r, i) => (
                        <Tag key={i}
                            name={r}
                            active={selectedTags.includes(r)}
                            onClick={() => switchTag(r)}/>
                    ))}
                </div>
            </div>
            { !isScrolledLeft ? 
                <PortfolioArrow
                    className='portfolio__arrow--left'
                    onClick={setPreviousProject}
                >
                    &lt;
                </PortfolioArrow>
                : ''
            }
            <div className='portfolio__projects' ref={insideRef} onScroll={checkScroll}>
                <div className="portfolio__projects__wrapper">
                    {projects.map((r, i) => (
                        <PortfolioProject key={i} {...r}/>
                    ))}
                </div>
            </div>
            { !isScrolledRight ? 
                <PortfolioArrow
                    className='portfolio__arrow--right'
                    onClick={setNextProject}
                >
                    &gt;
                </PortfolioArrow>
                : ''
            }
        </section>
    )
}

export default Portfolio