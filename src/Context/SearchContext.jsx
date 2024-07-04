import { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ childeren }) => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
            {childeren}
        </SearchContext.Provider>
    );
};
