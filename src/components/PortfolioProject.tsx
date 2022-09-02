import { Timestamp } from 'firebase/firestore'
import { FC } from 'react'
import Tag from './Tag'

type Props = {
    title: string | null,
    description: string | null,
    tags?: Array<string> | null,
    created: Timestamp | null
}

const PortfolioProject : FC<Props> = ({ title, description, tags, created }) => (
    <div className='portfolio__project'>
        <h3 className={`portfolio__project__title` + ( title ? '' : ' portfolio__project__title--skeleton')}>
            {title}
        </h3>
        <p className={`portfolio__project__description` + ( description ? '' : ' portfolio__project__description--skeleton')}>
            {description}
        </p>
        <p>
            {tags?.map(
                (r, i) => (
                    <Tag key={i} name={r} small={true}/>
                )
            )}
        </p>
        <span className={`portfolio__project__created`  + ( created ? '' : ' portfolio__project__created--skeleton')}>
            { created ? `Pridané: ${created.toDate().toLocaleDateString()}` : ''}
        </span>
    </div>
)

export default PortfolioProject