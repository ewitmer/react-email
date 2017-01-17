import React from 'react';

export default function Email(props) {
    return (
        <div>
            <h3>From: {props.from}</h3>
            <h5>Subject: {props.title}</h5>
            <p>{props.content}</p>
        </div>
    );
};