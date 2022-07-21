import React, { useEffect, useState } from 'react';
import './SearchBar.scss';
import useDebounce from '../../util/hooks/useDebounce';
import SearchIcon from './SearchIcon';

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
		<div
			className={showSearchIcon ? 'search-container-withIcon' : 'search-container'}
		>
			<input
				className={'search-container-input'}
				placeholder={placeholder}
				type="tel"
				value={searchTxt}
				onChange={(e) => {
					setSearchTxt(e.target.value);
				}}
			/>
		</div>
	);
};

export interface INumericSearchBarProps {
	/**
	 * Placeholder for SearchBar, defaults to Search
	 */
	placeholder?: string;
	/**
	 * Minimum length
	 */
	minLength?: number;
	/**
	 * Whether we should show search icon or not
	 */
	showSearchIcon?: boolean;
	/**
	 * Callback to trigger when debounce timeouts
	 */
	onChange: (txt: string) => void;
}

export const NumericSearchBar = ({
	placeholder = 'Search',
	showSearchIcon,
	minLength = 10,
	onChange
}: INumericSearchBarProps) => {
	const [searchTxt, setSearchTxt] = useState('');
	const [btnEnabled, setBtnEnabled] = useState(false);

	return (
		<div
			className={'search-container'}
		>
			<input
				className={'search-input'}
				placeholder={placeholder}
				type="tel"
				inputMode='numeric'
				pattern='[0-9]*'
				value={searchTxt}
				onChange={(e) => {
					if (e.target.value == '' || e.target.value.match(/^\d+$/)) {
						setSearchTxt(e.target.value);
						setBtnEnabled(e.target.value.length >= minLength);
					}
					if (e.target.value == '') {
						onChange('');
					}

				}}
			/>
			<button
				className='search-ctaBtn'
				disabled={!btnEnabled}
				onClick={() => {
					onChange(searchTxt);
				}}
			>
				<SearchIcon />
			</button>
		</div>
	);
};