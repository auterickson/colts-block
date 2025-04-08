import React, {useState} from 'react';
import EventListItem from "./event-list-item";

export default function EventList({ posts }) {
	return (
		<div className="event-list">
			{posts.map((post) => (
				<EventListItem post={post} key={post.id} />
			))}
		</div>
	);
}
