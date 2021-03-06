import { useState, useEffect } from 'react';
import { Container, Collapse, Paper, Avatar, TextField, Button, Typography, makeStyles } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, clearError } from '../../../store/actions/userActions';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
  },
}));

const Register = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loggedIn, error, errorMsg, redirect } = useSelector(state => state.user);

  useEffect(() => {
    if(error)
      dispatch(clearError());
  }, []);
  useEffect(() => {
    if(loggedIn)
      history.replace('/profile');
  }, [loggedIn]);
    
  return(
    <Container maxWidth='sm'>
      <Collapse in={error}>
          <Alert severity="error" onClose={() => {dispatch(clearError())}}>
            {errorMsg}
          </Alert>
      </Collapse>
      <Paper variant='elevation' elevation={3} className={classes.paper}>
        <Avatar className={classes.avatar}>
          <VpnKeyIcon/>
        </Avatar>
        <Typography component='h1' variant='h5'>
          Register
        </Typography>
        <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="email"
            label="Email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        <Button
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
          disabled={!username || !email || !password}
          onClick={async () => {
            dispatch(registerUser({
              username,
              email,
              password
            })).then(() => {
              dispatch(clearError());
              history.push('/login');
            })
    
          }}
        >
          Register
        </Button>
      </Paper>
    </Container>
  )
}

export default Register