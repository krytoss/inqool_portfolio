import { FC } from 'react'
import { SocialIcon } from 'react-social-icons';

import '../scss/footer.scss'
import Button from './Button'

type Props = {
    setOpenModal: (open: boolean) => void
}

const Footer : FC<Props> = ({ setOpenModal }) => {

    return (
        <footer className='main__footer'>
            <Button className='button--link mb-10' onClick={() => setOpenModal(true)}>+ Pridať projekt</Button>
            <br />
            <SocialIcon url='https://www.facebook.com/ludopcsanyi/' className='mr-10' />
            <SocialIcon url='https://twitter.com/ludokopcsanyi' className='mr-10' />
            <SocialIcon url='https://discordapp.com/users/krytos#0135' />
        </footer>
    )

}

export default Footer