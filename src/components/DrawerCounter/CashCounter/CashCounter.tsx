"use client"
import React from 'react';
import styles from './CashCounter.module.css';
import { Container, Input, Segment } from 'semantic-ui-react';

type IState = {
  ".25": string,
  "1": string,
  "5": string,
  "10": string,
  "20": string,
  "50": string,
  "100": string,
}


const INITIAL_STATE: IState = {
  ".25": "",
  "1": "",
  "5": "",
  "10": "",
  "20": "",
  "50": "",
  "100": "",
}

function reducer( state: IState, action: any ): IState {
  switch ( action.type ) {
    case '.25': {
      const newState: IState = { ...state, ".25": action.payload };
      return newState;
    }
    case '1': {
      const newState: IState = { ...state, "1": action.payload };
      return newState;
    }
    case '5': {
      const newState: IState = { ...state, "5": action.payload };
      return newState;
    }
    case '10': {
      const newState: IState = { ...state, "10": action.payload };
      return newState;
    }
    case '20': {
      const newState: IState = { ...state, "20": action.payload };
      return newState;
    }
    case '50': {
      const newState: IState = { ...state, "50": action.payload };
      return newState;
    }
    case '100': {
      const newState: IState = { ...state, "100": action.payload };
      return newState;
    }

    default: {
      return state;
    }
  }
}

const InitialSumsState = {
  ".25": "",
  "1": "",
  "5": "",
  "10": "",
  "20": "",
  "50": "",
  "100": "",
}

export default function CashCounter( { setTotal, total }: any ) {
  const [ state, dispatch ] = React.useReducer( reducer, INITIAL_STATE );
  const [ dropAmount, setDropAmount ] = React.useState(0);

  React.useEffect( () => {
    let denominationCounts = Object.values( state );
    let denominations = Object.keys( state );
    let denominationSums = denominations.map((denom, index) => {
      return Number(denom) * Number(denominationCounts[index]);
    })

    let totalSum = denominationSums.reduce((totalSum, currentSum) => totalSum += currentSum, 0);
    if (Number(totalSum)) {
      setTotal(totalSum);
    }

  }, [ state ] )

  React.useEffect(() => {
    let newDropAmount = total - 200;
    setDropAmount( newDropAmount );
  }, [total])


  return (
    <Container className={ styles.container }>
      <Segment.Group className={ styles.segmentGroup }>
        <DenominationRow dispatchFn={dispatch} denomination=".25" value={state[".25"]} />
        <DenominationRow dispatchFn={dispatch} denomination="1" value={state["1"]} />
        <DenominationRow dispatchFn={dispatch} denomination="5" value={state["5"]} />
        <DenominationRow dispatchFn={dispatch} denomination="10" value={state["10"]} />
        <DenominationRow dispatchFn={dispatch} denomination="20" value={state["20"]} />
        <DenominationRow dispatchFn={dispatch} denomination="50" value={state["50"]} />
        <DenominationRow dispatchFn={dispatch} denomination="100" value={state["100"]} />
        <Segment className={ styles.row }>
          <div className={styles.inputContainer}>
            <h3>Grand Total</h3>
          </div>
          <div className={styles.sumContainer}>${ total }</div>
        </Segment>
        <Segment className={styles.row}>
          <div className={styles.inputContainer}>
            <h3>Left in Drawer</h3>
          </div>
          <div className={styles.sumContainer}>
            -$200 for Drawer
          </div>
        </Segment>
        <Segment className={styles.row}>
          <div className={styles.inputContainer}>
            <h3>Drop Amount</h3>
          </div>
          <div className={styles.sumContainer}>
            { dropAmount }
          </div>
        </Segment>
        <Segment></Segment>
      </Segment.Group>
    </Container>
  );
}

function DenominationRow({ dispatchFn, denomination, value }: any) {
  const [ sum, setSum ] = React.useState(0);

  React.useEffect(() => {
    let newSum = Number(value) * Number(denomination);
    setSum(newSum);
  }, [value])

  return (
    <Segment className={ styles.row }>
          <div className={ styles.inputContainer }>
            <Input
              className={ styles.input }
              label={denomination}
              placeholder="# of Bills"
              type="number"
              onChange={ ( event ) => dispatchFn( { type: denomination, payload: event.target.value } ) }
              value={value}
            />
          </div>
          <div className={ styles.sumContainer }>
            ${sum}
          </div>
        </Segment>
  )
}