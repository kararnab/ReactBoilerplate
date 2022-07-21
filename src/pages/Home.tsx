import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Header } from '../components/Header';
import { Modal } from '../components/Modal/Modal';
import { NumericSearchBar } from '../components/SearchBar';
import { Shimmer } from '../components/Shimmer';
import { signOut } from '../redux/slices/userSlice';
import UserService from '../services/user.service';

const Home = () => {
    const dispatch = useDispatch();
    const [searchTxt, setSearchTxt] = useState('');
    const [data, setData] = useState({ isLoading: false, errorMsg: '', data: [] });


    const fetchItemListAPI = useCallback(async () => {
        setData(prevState => ({ ...prevState, isLoading: true }));
        try {
            const res = await UserService.getItemList(searchTxt);
            setData({ isLoading: false, errorMsg: '', data: [] });
        } catch (e: any) {
            setData(prevState => ({ ...prevState, isLoading: false, errorMsg: e || 'Something went wrong' }));
        }
    }, [searchTxt]);

    useEffect(() => {
        fetchItemListAPI();
    }, [fetchItemListAPI]);

    return (
        <div>
            <Header
                title={'HomePage'}
                rightActionText={'Logout'}
                onRightActionClick={() => {
                    dispatch(signOut());
                }}
            />
            <NumericSearchBar
                placeholder={'Search items'}
                showSearchIcon={true}
                onChange={(txt) => {
                    setSearchTxt(txt);
                }}
            />
            {
                data.isLoading &&
                loaderPlaceHolder()
            }
            <Modal
                isShown={data.errorMsg.length > 0}
                hide={() => {
                    setData(prevState => ({ ...prevState, errorMsg: '' }));
                }}
                headerText={'Error'}
                modalContent={
                    <div>
                        {data.errorMsg}
                    </div>
                }
            />
        </div>
    );
};

const loaderPlaceHolder = () => {
    return (
        <>
            <Shimmer />
            <Shimmer />
            <Shimmer />
        </>

    );
};
export default Home;