import React, { InputHTMLAttributes } from "react";
import styles from '@src/styles/Input.Component.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?:string;
}

export function Input({ label, ...rest }:InputProps) {
    return (
        <div className={styles.wrapperInput}>
            <label htmlFor="">{label}</label>
            <input {...rest} className={styles.elementInput} data-testid="input-id"/>
        </div>
    )
}