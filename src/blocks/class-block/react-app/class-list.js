import React, {useState} from 'react';
import ClassListItem from "./class-list-item";

export default function EventList({ posts }) {
	return (
		<div className="class-list">
			{posts.map((post) => (
				<ClassListItem post={post} key={post.id} />
			))}
		</div>
	);
}
