import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import TelegramIcon from '@mui/icons-material/Telegram';

import socialMedia from './socialMedia';

const useStyles = makeStyles((theme) => ({
  snsIcon: {
    width: '30px',
    height: '30px',

    [theme.breakpoints.down('xs')]: {
      width: '25px',
      height: '25px',
    },
    '&:hover': {
      color: theme.palette.info.main,
    },
  },
}));

function Social({ color }) {
  const classes = useStyles();

  const {
    github, elbrus, telegram, homepage,
  } = socialMedia;

  return (
    <Grid item container spacing={2} justifyContent="center">
      <Grid
        item
        component="a"
        target="_blank"
        rel="noreferrer noopener"
        href={homepage}
      >
        <HomeIcon
          className={classes.snsIcon}
          color={color ? 'primary' : 'secondary'}
        />
      </Grid>
      <Grid
        item
        component="a"
        target="_blank"
        rel="noreferrer noopener"
        href={elbrus}
      >
        <FilterHdrIcon
          className={classes.snsIcon}
          color={color ? 'primary' : 'secondary'}
        />
      </Grid>
      <Grid
        item
        component="a"
        target="_blank"
        rel="noreferrer noopener"
        href={github}
      >
        <GitHubIcon
          className={classes.snsIcon}
          color={color ? 'primary' : 'secondary'}
        />
      </Grid>
      <Grid
        item
        component="a"
        target="_blank"
        rel="noreferrer noopener"
        href={telegram}
      >
        <TelegramIcon
          className={classes.snsIcon}
          color={color ? 'primary' : 'secondary'}
        />
      </Grid>
    </Grid>
  );
}

export default Social;
