"use client";
import React from 'react';
import styles from './DrawerCounter.module.css';
import CashCounter from './CashCounter/CashCounter';
import ExpectedBalances from './ExpectedBalances/ExpectedBalances'
import Breakdown from './Breakdown/Breakdown';


export default function DrawerCounter() {

  const [ total, setTotal ] = React.useState( 0 );
  // const [ drawer1Expected, setDrawer1Expected ] = React.useState();
  // const [ drawer2Expected, setDrawer2Expected ] = React.useState();
  const [ totalExpected, setTotalExpected ] = React.useState( "" );
  const [ printMode, setPrintMode ] = React.useState(true);

  // React.useEffect( () => {

  //   let newTotalExpected = Number( drawer1Expected )
  //     + Number( drawer2Expected );

  //   if ( !isNaN( newTotalExpected ) ) {
  //     setTotalExpected( newTotalExpected )
  //   }
  // }, [ total ] )

  const handleChangeExpected = ( { target: { value } }: any ) => {
    setTotalExpected( value );
  }

  const handlePrintModeButton = () => {
    setPrintMode(!printMode);
  }

  return (
    <div className={ styles.container }>
      <div className={ styles.cashcounterArea }>
        <CashCounter setTotal={ setTotal } total={ total } />
      <ExpectedBalances total={total} totalExpected={totalExpected} setTotalExpected={setTotalExpected} />
      </div>

    { !printMode && 
     ( <div className={ styles.drawersArea }>
      </div>)
}

      {/* <div className={ styles.breakdownArea }> */}
        {/* <Breakdown/> */}
        {/* <button onClick={() => handlePrintModeButton() }>Print Mode</button> */}
      {/* </div> */}

    </div>
  )
}
