import React from 'react';

export default function Person() {
    const name = 'Derek Zoolander';
    const imageUrl = 'https://pmcvariety.files.wordpress.com/2014/07/zoolander.jpg?w=670&h=377&crop=1';
    const job = 'Male model';
    return (
        <div className="person">
            <div className="person-name">{name}</div>
            <img className="person-img" src={imageUrl} />
            <div className="person-job">
                {job}
            </div>
        </div>
    );
}