import React from 'react';
import { Button } from '../Button/Button';
import './header.scss';

export interface IHeaderProps {
    /**
     * Input text
     */
    title: string;
    rightActionText?: string;
    onRightActionClick?: () => void;
}

export const Header = ({
    title,
    rightActionText,
    onRightActionClick
}: IHeaderProps) => {
    return (
        <div className='header-container'>
            <div className='header-title'>
                {title}
            </div>
            {
                rightActionText &&
                <Button
                    primary={true}
                    label={rightActionText}
                    onClick={() => {
                        onRightActionClick && onRightActionClick();
                    }}
                />
            }
        </div>
    );
};