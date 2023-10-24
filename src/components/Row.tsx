"use client"
import React from "react";
import styles from './row.module.css';

interface IProps {
    denomination: number,
    giveTotal?: any,
}

export default function Row(props: IProps) {

    const [amount, setAmount] = React.useState("0");
    const [total, setTotal] = React.useState(0);

    const handleChange = ({target: {value}}: any) => {
        setAmount(value);
        let newTotal = props.denomination * Number(value);
        setTotal(newTotal);
    }


    return (
        <div className={styles.row}>
            <span className={styles.denomination}>
                {props.denomination}'s
            </span>
            {/* TODO: add regex to restrict to numbers only */}
            <span className={styles.input}>
                <input onChange={handleChange} />
            </span>
            <span className={styles.total}>
                ${ total }
            </span>
        </div>
    )
}