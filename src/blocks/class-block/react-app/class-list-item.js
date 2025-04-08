import React, {useState} from 'react';

export default function ClassListItem({post}){

	return(
		<div className="class-card">
			<a href={post.link} className="class-card">
				<div className="class-card-inner">
					<div
						className="class-card-img"
						style={{
							backgroundImage: `url(${post._embedded?.['wp:featuredmedia']?.[0].source_url})`}}></div>

					<div className="class-card-info">
						<h3 className="class-title">{post.title.rendered}</h3>

						<div className="class-description">
							<p>{post.acf.class_days} at {post.acf.class_time} </p>
							<p>{post.acf.class_description}</p>
						</div>
					</div>
				</div>
			</a>
		</div>
	)
}




