import React from 'react';
import styles from '@src/styles/Button.Component.module.css';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    title?:string,
}

export function Button ({ title, ...rest }:ButtonProps) {
    return (
        <button {...rest} className={styles.elementButton}>
            <span>{title}</span>
        </button>
    )
}