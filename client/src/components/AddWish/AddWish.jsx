import {
  Button, FormControl, FormControlLabel,
  FormHelperText, FormLabel, Grid, Radio, RadioGroup, TextField,
} from '@mui/material';
import React from 'react';

// const cats = ['cat11', 'cat12', 'cat13', 'cat14'];

export default function AddWish() {
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <TextField id="outlined-basic" label="Wish Name" variant="outlined" required />
        </Grid>
        <Grid item>
          <TextField id="outlined-basic" label="Link" variant="outlined" required />
        </Grid>
        <Grid item>
          <TextField id="outlined-basic" label="Photo" variant="outlined" required />
        </Grid>
        <Grid item>
          <TextField id="outlined-basic" label="Category" variant="outlined" required />
        </Grid>
        <Grid item>
          <TextField id="outlined-basic" label="Description" variant="outlined" required />
        </Grid>
        <Grid item>
          <TextField id="outlined-basic" label="Data" variant="outlined" required />
        </Grid>
        <Grid item>
          <TextField id="outlined-basic" label="Private" variant="outlined" required />
        </Grid>
        <Grid item>
          <Button type="submit">Добавить желание</Button>
        </Grid>
      </Grid>
      <FormControl
        component="fieldset"
        variant="filled"
        disabled
      >
        <FormLabel
          component="legend"
          htmlFor="residence-type-radio"
        >
          Residence
        </FormLabel>
        <RadioGroup
          aria-label="residence"
          id="residence-type-radio"
          defaultValue="homeowner"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="homeowner"
            control={<Radio />}
            label="Homeowner"
          />
          <FormControlLabel
            value="renter"
            control={<Radio />}
            label="Renter"
          />
          <FormControlLabel
            value="nomad"
            control={<Radio />}
            label="Nomad"
          />
        </RadioGroup>
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>

    </>
  );
}
