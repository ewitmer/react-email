import React from 'react';
import EmailList from './email-list';
import EMAILS from '../emails'

export default function EmailListContainer(props) {
    const emails = EMAILS[props.params.emailId];
    return <EmailList emails={emails} />;
};

