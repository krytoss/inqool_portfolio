import { FC } from 'react'

import Tabs from './Tabs'

import '../scss/skills.scss'

const Skills : FC = () => (
    <section id='skills'>
        <h2 className='section__title'>My skills</h2>
        <Tabs />
    </section>
)

export default Skills