import React from 'react';
import {
  Box, Container, Typography, Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   footer: {
//     backgroundColor: theme.palette.primary.main,
//     width: '100%',
//     position: 'relative',
//     overflow: 'hidden',
//     marginTop: '6em',
//     padding: '2em 0 ',
//   },
//   link: {
//     fontSize: '1.25em',
//     color: '#fff',
//     '&:hover': {
//       color: theme.palette.info.main,
//     },
//   },
//   copylight: {
//     color: '#fff',
//     fontSize: '1em',
//     '&:hover': {
//       color: theme.palette.info.main,
//     },
//   },
// }));

// function Footer() {
//   const classes = useStyles();
//   return (
//     <footer className={classes.footer}>
//       <Container maxWidth="lg">
//         <Grid container spacing={3} justify="center">
//           Hi
//         </Grid>
//       </Container>
//     </footer>
//   );
// }

// export default Footer;

export default function GuestFooter() {
  return (
    <Paper
      style={{
        bottom: 0,
        position: 'fixed',
        width: '100%',
      }}
      sx={{
        marginTop: 'calc(10% + 60px)',

        // position: 'fixed',
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
            my: 1,
          }}
        />

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2022. [] Limited
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
