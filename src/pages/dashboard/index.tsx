import React, { useState } from 'react';
import {
  AppBar,
  Grid,
  makeStyles,
  Toolbar,
  Card,
} from '@material-ui/core';
import api from '../../services/api';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100vh',
    background: '#5433ff',
    position: 'fixed',
  },
  styleAppBar: {
    background: 'linear-gradient(to right, #5433ff, #20bdff, #a5fecb)',
  },
  cardDirections: {

  },
  cardStyle: {
    background: '#fff',
    minHeight: '100px',
    width: '60px',
    marginBottom: '30px',
  },a
});

const Dashboard: React.FC = () => {
  const [newComent, setNewComent] = useState('');
  const [comentary, setComentary] = useState([]);
  const classes = useStyles();

  return (
    <>
      <AppBar>
        <Toolbar className={classes.styleAppBar} />
      </AppBar>
      <Grid container className={classes.root}>
        <Grid item xl={2} lg={3} md={6} sm={6} xs={12} className={classes.cardDirections}>
          <Card className={classes.cardStyle} />
        </Grid>
        <Grid item xl={2} lg={3} md={6} sm={6} xs={12} className={classes.cardDirections}>
          <Card className={classes.cardStyle} />
        </Grid>
        <Grid item xl={2} lg={3} md={6} sm={6} xs={12} className={classes.cardDirections}>
          <Card className={classes.cardStyle} />
        </Grid>
        <Grid item xl={2} lg={3} md={6} sm={6} xs={12} className={classes.cardDirections}>
          <Card className={classes.cardStyle} />
        </Grid>
        <Grid item xl={2} lg={3} md={6} sm={6} xs={12} className={classes.cardDirections}>
          <Card className={classes.cardStyle} />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
