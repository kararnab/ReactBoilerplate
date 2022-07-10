import React from 'react';
import './inputbox.scss';

export interface IInputBoxProps {
    /**
     * Placeholder for InputBox
     */
    placeholder?: string;
    /**
     * Input type
     */
    type?: string;
    /**
     * Input text
     */
    text: string;
    /**
     * Set Input Text
     */
    setText: (text: string) => void;
}

export const InputBox = ({
    placeholder,
    text,
    setText,
    type = 'text'
}: IInputBoxProps) => {
    return (
        <input
            className={'input-container'}
            placeholder={placeholder}
            type={type}
            value={text}
            onChange={(e) => {
                setText(e.target.value);
            }}
        />
    );
};