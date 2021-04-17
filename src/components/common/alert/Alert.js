import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(() => ({
  root: {
    width: '30%',
    margin: '0 auto',
    position: 'absolute',
    bottom: '50px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
}));

export default function SimpleAlerts({ error }) {
  const classes = useStyles();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = (fn) =>
      setTimeout(() => {
        fn();
      }, 2500);

    if (error) {
      setVisible(true);

      timeout(() => {
        setVisible(false);
      });
    } else {
      return setVisible(false);
    }

    return clearTimeout(timeout);
  }, [error]);

  return (
    <div
      className={classes.root}
      style={{
        opacity: visible ? '1' : '0',
        transition: '0.3s ease',
        transform: visible ? 'translateY(0)' : 'translateY(100px)',
      }}
    >
      <Alert severity="error">{error}</Alert>
    </div>
  );
}
