import React from 'react';
import Email from './email';

export default function EmailList(props) {
     const emails = Object.keys(props.emails).map((emailId, index) => {
		const email = props.emails[emailId];
		return (
			<li key={index}>
				<Email id={email.id} from={email.from} content={email.content} title={email.title} />
			</li>
		);
	});

	return (
		<ul>
			{emails}
		</ul>
	);
};