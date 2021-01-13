import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  makeStyles,
  Typography,
  Box,
  TextField,
  Button,
} from '@material-ui/core/';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  textStyle: {
    color: '#5A5A5A',
    alignSelf: 'center',
    paddingBottom: '20px',

  },
  paddingInput: {
    paddingBottom: '16px',
  },
  buttonsGrid: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '25px',
  },
  buttonLogin: {
    alignSelf: 'center',
    background: 'linear-gradient(#5433FF, #20BDFF, #A5FECB)',
    minWidth: '200px',
    color: 'white',
    fontWeight: 'bold',
    minHeight: '50px',
    boxShadow: '-1px 5px 17px 0px #7e7e82;',
  },
  buttonResgister: {
    alignSelf: 'center',
    color: 'linear',
    marginTop: '5px',
  },
  typographyRegister: {
    fontSize: '12px',
  },
});

const PagLogin: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Box
        display="flex"
        flexDirection="column"
        bgcolor="#FFFFFF"
        marginTop="40px"
        height="350px"
        width="400px"
        paddingX="20px"
        paddingY="20px"
        borderRadius="5%"
      >
        <Typography variant="h4" className={classes.textStyle}>
          Registro
        </Typography>
        <TextField className={classes.paddingInput} id="login" variant="outlined" label="usuário" />
        <TextField className={classes.paddingInput} id="senha" variant="outlined" label="senha" />
        <TextField id="email" variant="outlined" label="email" />
        <Grid item className={classes.buttonsGrid}>
          <Button className={classes.buttonLogin}>
            registrar
          </Button>
          <Button className={classes.buttonResgister} component={Link} to="/">
            <Typography className={classes.typographyRegister}>
              já possui conta?
            </Typography>
          </Button>
        </Grid>
      </Box>
    </Grid>
  );
};

export default PagLogin;
