"use client";
import React from 'react';
import styles from './DrawerCounter.module.css';
import Row from '@/components/DenominationRow/Row';

type IState = {
  "1": number,
  "5": number,
  "10": number,
  "20": number,
  "50": number,
  "100": number,
}


const INITIAL_STATE: IState = {
  "1": 0,
  "5": 0,
  "10": 0,
  "20": 0,
  "50": 0,
  "100": 0,
}

function reducer(state: IState, action: any): IState {
  switch (action.type) {
    case 'update 1s': {
      const newState: IState = { ...state, "1": action.payload };
      return newState;
    }
    case 'update 5s': {
      const newState: IState = { ...state, "5": action.payload };
      return newState;
    }
    case 'update 10s': {
      const newState: IState = { ...state, "10": action.payload };
      return newState;
    }
    case 'update 20s': {
      const newState: IState = { ...state, "20": action.payload };
      return newState;
    }
    case 'update 50s': {
      const newState: IState = { ...state, "50": action.payload };
      return newState;
    }
    case 'update 100s': {
      const newState: IState = { ...state, "100": action.payload };
      return newState;
    }

    default: {
      return state;
    }
  }
}

function calculateTotal(denominationValues: number[]): number {
  return denominationValues.reduce((total, currentValue) => {
    total += currentValue;
    return total;
  }, 0)
}

export default function DrawerCounter() {

  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);
  const [total, setTotal] = React.useState(0);
  const [drawer1Expected, setDrawer1Expected] = React.useState();
  const [drawer2Expected, setDrawer2Expected] = React.useState();
  const [totalExpected, setTotalExpected] = React.useState(0);


  React.useEffect(() => {
    let denominationValues = Object.values(state);
    let newTotal = calculateTotal(denominationValues);
    setTotal(newTotal)
  }, [state])

  React.useEffect(() => {
    let newTotalExpected = Number(drawer1Expected) 
      + Number(drawer2Expected) 
      - 200;
    // if (Number(newDifference)) {
    //   setDifference(newDifference);
    // }
    if (!isNaN(newTotalExpected)) {
      setTotalExpected(newTotalExpected)
    }
  }, [drawer1Expected, drawer2Expected])

  const handleChangeDrawer1 = ({ target: { value } }: any) => {
    setDrawer1Expected(value);
  }
  const handleChangeDrawer2 = ({ target: { value } }: any) => {
    setDrawer2Expected(value);
  }


  return (
    <div className={styles.container}>

      <div className={styles.drawerRows}>

        <div className={styles.drawerOne}>
          <span>Drawer 1 Expected Balance</span>
          <input
            className={styles.drawerExpectedInput}
            type="number"
            onChange={handleChangeDrawer1}
            value={drawer1Expected}
          />

        </div>

        <div className={styles.drawerTwo}>
          <span>Drawer 2 Expected Balance</span>
          <input
            className={styles.drawerExpectedInput}
            type="number"
            onChange={handleChangeDrawer2}
            value={drawer2Expected}
          />
        </div>

        <div className={styles.totalExpected}>
          <span></span>
          <span>${totalExpected}</span>
        </div>

      </div>

      {/* <div className={styles.dataRows}>
  
        <div className={styles.differenceRow}>
          <span>Expected</span>
          <span></span>
          <span className={styles.inputContainer}>
            <input
              className={[styles.expectedInput].join(" ")}
              type="number"
              onChange={handleChangeExpected}
              value={expectedTotal}
            />
          </span>

        </div>
        <div className={styles.differenceRow2}>
          <span></span>
          <span></span>
          <span className={styles.difference}>
            ${difference}
          </span>
        </div>

      </div> */}


      <div className={styles.denominationRows}>

        <Row dispatchFn={dispatch} denomination={1} />
        <Row dispatchFn={dispatch} denomination={5} />
        <Row dispatchFn={dispatch} denomination={10} />
        <Row dispatchFn={dispatch} denomination={20} />
        <Row dispatchFn={dispatch} denomination={50} />
        <Row dispatchFn={dispatch} denomination={100} />

      <div className={styles.totalRow}>
          <span>Total</span>
          <span> </span>
          <span className={styles.totalValue}>
            ${total}
          </span>
        </div>
      </div>


    </div>
  )
}