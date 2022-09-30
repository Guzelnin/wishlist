import React from 'react';
import {
  Box, Container, Typography, Paper, Grid,
} from '@material-ui/core';
import Social from './Social';

export default function MyFooter() {
  return (
    <Paper
      component="footer"
      style={{
        bottom: 0,
        position: 'fixed',
        width: '100%',
        background: '#2E3B55',
      }}
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
            <Grid container direction="column" style={{ margin: '1.2em 0' }}>
              <Social />
            </Grid>
            Copyright ©2022
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
