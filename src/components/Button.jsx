import React from 'react';
import styles from '../style/button.module.css';

export const Button = ({link, text}) => {
    return(
        <a className={styles.button} href={link} target="_blank" rel="noreferrer">{text}</a>
    )
}