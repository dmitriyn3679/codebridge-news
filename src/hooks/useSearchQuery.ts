import {useSearchParams} from "react-router-dom";

type UpdateSearch = (searchQuery: string) => void;

export const useSearchQuery = (): [URLSearchParams, UpdateSearch] => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const updateSearchQuery = (searchQuery: string) => {
    if (searchQuery.length === 0) {
      searchParams.delete('query');
    } else {
      searchParams.set('query', searchQuery);
    }
    
    setSearchParams(searchParams);
  };
  
  return [searchParams, updateSearchQuery];
};