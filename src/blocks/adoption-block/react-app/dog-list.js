import React, {useState} from 'react';
import DogListItem from "./dog-list-item";

export default function DogList({ posts }) {
	return (
		<div className="dog-list">
			{posts.map((post) => (
				<DogListItem post={post} key={post.id} />
			))}
		</div>
	);
}
