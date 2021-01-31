import React, {useContext} from "react";
import {ExpenseTrackerContext} from '../../context/context'
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  Grid
} from "@material-ui/core";
import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";
function Main() {
  const classes = useStyles();
  const {balance} = useContext(ExpenseTrackerContext)
  return (
    <Card className={classes.root} >
      <CardHeader title="Expense Tracker" align='center'  />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance $ {balance}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        ></Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}></Grid>
        <Grid item xs={12}>
            <List />
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Main;
