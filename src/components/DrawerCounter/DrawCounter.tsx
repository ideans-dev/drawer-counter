"use client";
import React from 'react';
import styles from './DrawerCounter.module.css';
import CashCounter from './CashCounter/CashCounter';
import ExpectedBalances from './ExpectedBalances/ExpectedBalances'
import Breakdown from './Breakdown/Breakdown';


export default function DrawerCounter() {

  const [ total, setTotal ] = React.useState( 0 );
  const [ drawer1Expected, setDrawer1Expected ] = React.useState();
  const [ drawer2Expected, setDrawer2Expected ] = React.useState();
  const [ totalExpected, setTotalExpected ] = React.useState( 0 );

  React.useEffect( () => {

    let newTotalExpected = Number( drawer1Expected )
      + Number( drawer2Expected );

    if ( !isNaN( newTotalExpected ) ) {
      setTotalExpected( newTotalExpected )
    }
  }, [ total ] )

  const handleChangeExpected = ( { target: { value } }: any ) => {
    setTotalExpected( value );
  }


  return (
    <div className={ styles.container }>
      <div className={ styles.cashcounterArea }>
        <CashCounter setTotal={ setTotal } total={ total } />
      </div>

      <div className={ styles.drawersArea }>
        <ExpectedBalances  totalExpected={totalExpected} setTotalExpected={setTotalExpected} />
      </div>

      {/* <div className={ styles.breakdownArea }>
        <Breakdown/>
      </div> */}

    </div>
  )
}
