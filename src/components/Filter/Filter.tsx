import {Box, InputAdornment, InputLabel, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React, {useCallback, useEffect, useState} from "react";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {actions as queryActions} from "../../features/query";
import { debounce } from 'lodash';
import './Filter.scss';
import {useSearchQuery} from "../../hooks/useSearchQuery";
import {customize} from "./customize";

export const Filter = () => {
  const dispatch = useAppDispatch();
  const [searchParams, updateSearch] = useSearchQuery();
  const [query, setQuery] = useState<string>(searchParams.get('query') || '');
  
  const debounceSearch = useCallback(debounce((searchQuery: string) => {
    dispatch(queryActions.change(searchQuery));
  }, 500), []);
  
  const immediatelySetter = (value: string) => {
    dispatch(queryActions.change(value));
  };
  
  useEffect(() => {
    immediatelySetter(query);
  }, []);
  
  useEffect(() => {
    debounceSearch(query);
  }, [query]);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSearch(event.target.value)
    setQuery(event.target.value)
  };
  
  return (
    <Box className="filter">
      <InputLabel
        shrink
        htmlFor="search-field"
        sx={customize.filterLabel}
      >
        Filter by keywords
      </InputLabel>
      <TextField
        id="search-field"
        placeholder="Search"
        className="filter__input"
        value={query}
        onChange={handleChange}
        InputProps={{
          style: customize.searchField,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="medium" color="action" />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </Box>
  );
};