import React from 'react';
import './Skeleton.css';

const SkeletonElement = ({type}) => {

    const classes = `skeleton ${type}`;
    return (
        <>
        <div className="skeleton-item">
            <div className={classes}></div>
        </div>
        </>

    );
}

export default SkeletonElement;