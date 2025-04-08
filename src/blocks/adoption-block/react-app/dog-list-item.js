import React, {useState} from 'react';

export default function DogListItem({post}){

	return(
		<div className="dog-card">
			<a href={post.link} className="dog-card">
			<div className="dog-card-inner">
				<div
					className="dog-card-img"
					style={{
						backgroundImage: `url(${post._embedded?.['wp:featuredmedia']?.[0].source_url})`}}></div>

				<div className="dog-card-info">
					<h3 className="dog-name">{post.title.rendered}</h3>

					<div className="dog-description">
						<p>{post.acf.dog_breed}, {post.acf.dog_age} years old</p>
						<p>{post.acf.dog_gender} </p>
					</div>
				</div>
			</div>
			</a>
		</div>
	)
}




