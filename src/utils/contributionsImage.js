import beleaguered from '../assets/png/beleaguered.png'
import mahjong from '../assets/png/mahjong.png'
import saitorun from '../assets/png/saitorun.png'

export const contributionsImage = (c) => {
    const cID = c.toLowerCase();
    switch (cID) {
        case 'beleaguered':
            return beleaguered;
        case 'mahjong':
            return mahjong;
        case 'saitorun':
            return saitorun;
        default:
            break;
    }
}
