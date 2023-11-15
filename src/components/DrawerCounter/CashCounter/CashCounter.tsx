"use client"
import React from 'react';
import styles from './CashCounter.module.css';
import { Container, Input, Segment } from 'semantic-ui-react';

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

function reducer( state: IState, action: any ): IState {
  switch ( action.type ) {
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

function calcDrawerTotal( denominationValues: number[] ): number {
  return denominationValues.reduce( ( total, currentValue ) => total += currentValue, 0 );
}


export default function CashCounter({setTotal}: any) {

  const [ state, dispatch ] = React.useReducer( reducer, INITIAL_STATE );

  React.useEffect( () => {

    let denominationValues = Object.values( state );
    let newTotal = calcDrawerTotal( denominationValues );
    setTotal( newTotal );

  }, [ state ] )

  const handleChange = ({target: {value}}: any) => {
    dispatch({type: })
  }

  return (
    <Container className={styles.container}>
      <Segment.Group className={styles.segmentGroup}>
        <Segment className={styles.flexSpaceBetween}>
          <Input className={styles.input} label="1s" placeholder="# of Bills" />
          <Input className={styles.input} value="total" label="$" />
        </Segment>
        <Segment className={styles.flexSpaceBetween}>
          <Input className={styles.input} label="5s" placeholder="# of Bills" />
          <Input className={styles.input} value="total" label="$" />
        </Segment>
        <Segment className={styles.flexSpaceBetween}>
          <Input className={styles.input} label="10s" placeholder="# of Bills" />
          <Input className={styles.input} value="total" label="$" />
        </Segment>
        <Segment className={styles.flexSpaceBetween}>
          <Input className={styles.input} label="20s" placeholder="# of Bills" />
          <Input className={styles.input} value="total" label="$" />
        </Segment>
        <Segment className={styles.flexSpaceBetween}>
          <Input className={styles.input} label="50s" placeholder="# of Bills" />
          <Input className={styles.input} value="total" label="$" />
        </Segment>
        <Segment className={styles.flexSpaceBetween}>
          <Input className={styles.input} label="100s" placeholder="# of Bills" />
          <Input className={styles.input} value="total" label="$" />
        </Segment>

        <Segment className={styles.flexSpaceBetween}>
          <span>Grand Total</span>
          <span>$----</span>
        </Segment>
      </Segment.Group>
    </Container>
  );
}