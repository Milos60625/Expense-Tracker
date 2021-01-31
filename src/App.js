import React from 'react';
import {Grid} from '@material-ui/core';
import Details from './components/Details/Details'
import Main from './components/Main/Main'

import useStyles from './styles'
const App = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems='center' justify='center' style={{height: '100vh'}} items="true">
                <Grid 
                item xs={12} sm={4} className={classes.mobile} items="true">
                    <Details title='Income'/>
                </Grid>
                <Grid item xs={12} sm={3} className={classes.main} items="true">
                    <Main />
                </Grid>
                <Grid item xs={12} sm={4} className={classes.desktop} items="true">
                    <Details title='Income'/>
                </Grid>
                <Grid item xs={12} sm={4} className={classes.last} items="true">
                    <Details title='Expense' />
                </Grid>
            </Grid>
        </div>
    )
}

export default App
