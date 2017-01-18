import React from 'react';
import EMAILS from '../emails';
import Category from './category'

export default function CategoryList(props) {
	const categories = Object.keys(EMAILS).map((category, index) => {	
		return (
			<li key={index}>
				<Category name={category} />
			</li>
		);
	});

	return (
		<ul>
			{categories}
		</ul>
	);
}