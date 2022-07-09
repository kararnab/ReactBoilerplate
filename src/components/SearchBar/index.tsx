import React, { useEffect, useState } from 'react';
import './SearchBar.scss';
import useDebounce from '../../hooks/useDebounce';

export interface ISearchBarProps {
	/**
	 * Placeholder for SearchBar, defaults to Search
	 */
	placeholder?: string;
	/**
	 * Debounce after time in milliseconds, defaults to 500 ms
	 */
	debounceAfter?: number;
	/**
	 * Whether we should show search icon or not
	 */
	showSearchIcon?: boolean;
	/**
	 * Callback to trigger when debounce timeouts
	 */
	onChange: (txt: string) => void;
}

/**
 * A Generic Debouncable Search Bar
 * @author Arnab Kar
 */
export const SearchBar = ({
	placeholder = 'Search',
	debounceAfter = 500,
	showSearchIcon,
	onChange
}: ISearchBarProps) => {
	const [searchTxt, setSearchTxt] = useState('');
	const debounceValue = useDebounce<string>(searchTxt, debounceAfter >= 0 ? debounceAfter : 0);

	useEffect(() => {
		onChange(debounceValue);
	}, [debounceValue]);

	return (
		<div className={showSearchIcon ? 'search-container-withIcon' : 'search-container'}>
			<input
				className={'search-container-input'}
				placeholder={placeholder}
				value={searchTxt}
				onChange={(e) => {
					setSearchTxt(e.target.value);
				}}
			/>
		</div>
	);
};