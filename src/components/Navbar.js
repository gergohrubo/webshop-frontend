import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  }
}));

export default function Navbar(props) {
  const classes = useStyles();
  console.log('navbar prop', props.user)

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <MusicNoteIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Music webshop
            <Link to="/signup"> Sign up</Link>
            <Link to="/album"> Album</Link>
            {!props.user.username && <Link to="/login"> Log in</Link>}
            {props.user.username && <p className="username-navbar">{props.user.username}</p>}
            {props.user.username && <Link to="/upload"> Upload</Link>}
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}