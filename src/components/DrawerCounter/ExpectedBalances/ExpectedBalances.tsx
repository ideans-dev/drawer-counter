import React from 'react';
import styles from './ExpectedBalances.module.css';
import { Container, Input, Segment } from 'semantic-ui-react';

export default function ExpectedBalances( { totalExpected, setTotalExpected }: any ) {
  const [ drawer1, setDrawer1 ] = React.useState( "" );
  const [ drawer2, setDrawer2 ] = React.useState( "" );

  React.useEffect( () => {
    let newExpectedTotal = Number( drawer1 ) + Number( drawer2 );
    setTotalExpected( newExpectedTotal )
  }, [ drawer1, drawer2 ] )


  return (
    <Container className={ styles.container }>
      <Segment.Group className={ styles.segmentGroup }>
        <Segment>
          <h3>Expected Balances</h3>
          <Segment.Group horizontal={ true }>

            <Segment>
              <Input
                className={ styles.input }
                label="Drawer 1"
                placeholder="Expected Balance"
                type="number"
                onChange={ ( { target: { value } } ) => setDrawer1( value ) }
                value={ drawer1 }
              />
            </Segment>

            <Segment>
              <Input
                className={ styles.input }
                label="Drawer 2"
                placeholder="Expected Balance"
                onChange={ ( { target: { value } } ) => setDrawer2( value ) }
                value={ drawer2 }
              />
            </Segment>

          </Segment.Group>
        </Segment>

        <Segment className={styles.flexRow}>
          <h3>Total Expected Balance</h3>
          <h4>${ totalExpected }</h4>
        </Segment>

        <Segment>

        </Segment>
      </Segment.Group>


    </Container>
  )
}