import React from 'react';
import CategoryList from './category-list';

export default function App(props) {
    return (
        <div>
            <h1>
                My Inbox
            </h1>
            <div>
                <CategoryList />
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
};