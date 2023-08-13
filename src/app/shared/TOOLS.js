import TeamImg from '../assets/img/teams.jpg';
import CoinTossImg from '../assets/img/cointoss.jpg';
import BracketImg from '../assets/img/tournament.jpg';

export const TOOLS = [
    {
        id: 0,
        name: 'Team Generator',
        title: 'Build your teams!',
        image: TeamImg,
        description:
            'Enter a list of names, and how many teams you want. The generator will randomly distribute the names into evenly sized teams.'
    },
    {
        id: 1,
        name: 'Bracket Generator',
        title: 'Set up the match!',
        image: BracketImg,
        description:
            'Enter a list of names and select the trounament format. The generator will randomize the starting positions for all participants.'
    },
    {
        id: 2,
        name: 'Coin Toss',
        title: 'Flip a coin!',
        image: CoinTossImg,
        description:
            'Flip a coin and call it in the air to determine who goes first.'
    }
];
