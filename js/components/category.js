import React from 'react';
import {Link} from 'react-router';

export default function Category(props) {
    return (
        <div>
            <strong>
                <Link to={'/' + props.name}>
                    {props.name}
                </Link>
            </strong>
        </div>
    );
};

