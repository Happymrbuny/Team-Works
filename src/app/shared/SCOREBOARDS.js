import DartsImg from '../assets/img/darts.jpg';
import UNOImg from '../assets/img/uno.jpg';
import CardsImg from '../assets/img/cards.jpg';

export const SCOREBOARDS = [
    {
        id: 0,
        name: 'Darts',
        path: '/Darts',
        title: 'Throw some darts!',
        image: DartsImg,
        description:
            'Keep score in Cricket, Double-in Doube-out, and more!'
    },
    {
        id: 1,
        name: 'UNO',
        path: '/UNO',
        title: 'Keep score for UNO.',
        image: UNOImg,
        description:
            'Set the target score and keep your own score as low as possible until one of your opponents goes over the limit!'
    },
    {
        id: 2,
        name: 'Cards',
        path: '/Cards',
        title: 'Keep score for various card games.',
        image: CardsImg,
        description:
            'Hearts, Spades and more!'
    }
];
