import React, {useState} from 'react';

export default function EventListItem({post}){

	return(
		<div className="event-card">
			<a href={post.link} className="event-card">
			<div className="event-card-inner">
				<div
					className="event-card-img"
					style={{
						backgroundImage: `url(${post._embedded?.['wp:featuredmedia']?.[0].source_url})`}}></div>

				<div className="event-card-info">
					<h3 className="event-title">{post.title.rendered}</h3>
					<div className="event-description">
						<p className="event-date">{post.acf.event_date}</p>
						<p className="event-time">{post.acf.event_time}</p>
					</div>
				</div>
			</div>
			</a>
		</div>
	)
}




