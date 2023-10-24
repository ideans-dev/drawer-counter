"use client"
import React from "react";
import styles from './row.module.css';

interface IProps {
  denomination: number,
  dispatchFn: any,
}

export default function Row( props: IProps ) {

  const [ amount, setAmount ] = React.useState();
  const [ total, setTotal ] = React.useState( 0 );

  const handleChange = ( { target: { value } }: any ) => {
    setAmount( value );
    let newTotal = props.denomination * Number( value );
    setTotal( newTotal );
  }

  React.useEffect( () => {
    props.dispatchFn( { type: `update ${ props.denomination }s`, payload: total } )
  }, [ total ] )


  return (
    <div className={ styles.row }>
      <span className={ styles.denomination }>
        { props.denomination }'s
      </span>
      <span className={ styles.input }>
        <input type="number" onChange={ handleChange } value={ amount } />
      </span>
      <span className={ styles.total }>
        ${ total }
      </span>
    </div>
  )
}