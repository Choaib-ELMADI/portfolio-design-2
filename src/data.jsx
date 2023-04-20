import { AiFillInstagram, AiFillFacebook, AiFillGithub } from 'react-icons/ai';
import images from './constants/images';



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

export const pictures = [
    {
        className: 'image-a',
        key: 'electronics-aa',
        alt: 'electronics',
        src: images.electro1,
    },
    {
        className: 'image-b',
        key: 'electronics-bb',
        alt: 'electronics',
        src: images.electro2,
    },
    {
        className: 'image-c',
        key: 'electronics-cc',
        alt: 'electronics',
        src: images.electro3,
    },

    {
        className: 'image-1',
        key: 'coding-a',
        alt: 'coding',
        src: images.code3,
    },
    {
        className: 'image-2',
        key: 'coding-b',
        alt: 'coding',
        src: images.code2,
    },
    {
        className: 'image-3',
        key: 'coding-c',
        alt: 'coding',
        src: images.code1,
    },

    {
        className: 'image-A',
        key: '3d-modeling-a',
        alt: '3d-modeling',
        src: images.model1,
    },
    {
        className: 'image-D',
        key: '3d-modeling-d',
        alt: '3d-modeling',
        src: images.model4,
    },
    {
        className: 'image-C',
        key: '3d-modeling-c',
        alt: '3d-modeling',
        src: images.model3,
    },
];