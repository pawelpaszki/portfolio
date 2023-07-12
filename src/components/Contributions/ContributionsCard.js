import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Contributions.css'

import { contributionsImage } from '../../utils/contributionsImage'

function ContributionsCard({id, name, description, image, href}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        contributionsCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();


    return (
        <Fade bottom>
            <a key={id} className={`contributions-card ${classes.contributionsCard}`}
              href={href} target="_blank" rel="noreferrer">
                <div className="cont-img">
                    <img src={contributionsImage(image)} alt={image} />
                </div>
                <div className="contributions-details">
                    <h4 style={{color: theme.tertiary}}>{name}</h4>
                    <h5 style={{color: theme.tertiary80, fontSize: "0.9rem"}}>{description}</h5>
                </div>
            </a>
        </Fade>   
    )
}

export default ContributionsCard
