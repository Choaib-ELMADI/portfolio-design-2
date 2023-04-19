import { AiFillInstagram, AiFillFacebook, AiFillGithub } from 'react-icons/ai';

export const listItems = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'work',
        title: 'Work',
    },
    {
        id: 'pricing',
        title: 'Pricing',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

export const socials = [
    {
        title: 'instagram',
        link: 'https://instagram.com/choaib_elmadi/',
        icon: <AiFillInstagram size={ 30 } />,
    },
    {
        title: 'facebook',
        link: 'https://www.facebook.com/choaib.elmadi.94/',
        icon: <AiFillFacebook size={ 30 } />,
    },
    {
        title: 'github',
        link: 'https://github.com/Choaib-ELMADI/',
        icon: <AiFillGithub size={ 30 } />,
    },
];