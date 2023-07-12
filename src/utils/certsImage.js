import java from '../assets/png/java.png'
import istqb from '../assets/png/istqb.png'

export const certsImage = (cert) => {
    const certID = cert.toLowerCase();
    switch (certID) {
        case 'java':
            return java;
        case 'istqb':
            return istqb;
        default:
            break;
    }
}
