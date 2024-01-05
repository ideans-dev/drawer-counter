import React from 'react';
import styles from './ExpectedBalances.module.css';
import { Container, Input, Segment } from 'semantic-ui-react';

export default function ExpectedBalances( { total, totalExpected, setTotalExpected }: any ) {
  const [ drawer1, setDrawer1 ] = React.useState( "" );
  const [ drawer2, setDrawer2 ] = React.useState( "" );
  const [difference, setDifference] = React.useState( "" )

  React.useEffect( () => {
    let newExpectedTotal: string = (Number( drawer1 ) + Number( drawer2 )).toFixed(2);
    setTotalExpected( newExpectedTotal )

  }, [ drawer1, drawer2 ] )

  React.useEffect(() => {
    let newDifference: string = (Number(total) - Number(totalExpected)).toFixed(2);
    setDifference( newDifference );
  }, [total, totalExpected])

  return (
    <Container className={ styles.container }>
      <Segment.Group className={ styles.segmentGroup }>
        <Segment>
          <h3>Expected Balances</h3>
          <Segment.Group horizontal={ false }>

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
                type="number"
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
        <Segment className={styles.flexRow}>
          <h3>Difference</h3>
          <h4>${ difference }</h4>
        </Segment>

        <Segment>

        </Segment>
      </Segment.Group>


    </Container>
  )
}