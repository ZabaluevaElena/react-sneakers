import React from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import cn from 'classnames';

const Button = ({children, onClick, left, right}) => {
    return (
        <button className={cn('button' , {'button-left' : left}, {'button-right' : right})} onClick={onClick}>
            {left && <span className="icon-left"><AiOutlineArrowLeft /></span>}
            {children}
            {right && <span className="icon-right"><AiOutlineArrowRight /></span>}
        </button>
    );
}

export default Button;