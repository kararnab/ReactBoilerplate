import React from 'react';
import './styles.css';

export const Shimmer = () => {

    return (
        <div className='card br'>
            <div className="wrapper">
                <div className="profilePic animate din"></div>
                <div className="comment br animate w80"></div>
                <div className="comment br animate"></div>
                <div className="comment br animate"></div>
            </div>
        </div>
    );
};