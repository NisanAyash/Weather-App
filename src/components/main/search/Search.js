import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import useSearch from './useSearch';
import { withTheme } from 'styled-components';

const Search = ({ theme }) => {
  const { places, loading, handleChange, handleSelected } = useSearch();

  return (
    <Autocomplete
      id="combo-box-demo"
      options={places || []}
      getOptionLabel={(option) => option.LocalizedName}
      getOptionSelected={(option, value) => option.Version === value.Version}
      onChange={(event, place) => handleSelected(place)}
      style={{
        maxWidth: 500,
        margin: '10px auto',
        padding: '25px ',
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="search"
          variant="outlined"
          onChange={handleChange}
          style={{
            background: theme.inputColor,
          }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default withTheme(Search);
