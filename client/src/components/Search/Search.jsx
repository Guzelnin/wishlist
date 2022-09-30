import { alpha, InputBase, makeStyles } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Search({ details }) {
  const [searchField, setSearchField] = useState('');

  //   const filteredPersons = details.filter(
  //     (person) => (
  //       person
  //         .name
  //         .toLowerCase()
  //         .includes(searchField.toLowerCase())
  //         || person
  //           .email
  //           .toLowerCase()
  //           .includes(searchField.toLowerCase())
  //     ),
  //   );

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  //   function searchList() {
  //     return (
  //       <SearchList filteredPersons={filteredPersons} />

  //     );
  //   }

  const classes = useStyles();
  return (

    <>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Поиск…"
          onChange={handleChange}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
      </div>
      {/* <div>
        {searchList()}
      </div> */}
    </>

  );
}

export default Search;
