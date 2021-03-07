import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function App(props) {
  const classes = useStyles();
  const [testing, setTesting] = useState('');
  useEffect(() => {
    (async () => {
      await axios.get('/')
        .then((res) => {
          console.log(res.data);
          setTesting(res.data.message);
        })
    })();
  }, [props])

  return (
    <>
      <Card className={classes.root}>
        <h1>{testing}</h1>      
      </Card>
    </>
  );
}

export default App;
