import React, {useState, useEffect} from 'react';
import EventList from "./event-list";
import {TextControl} from "@wordpress/components";


export default function BlockApp(props) {
	let [keyword, setKeyword] = useState('');
	let [event, setEvent] = useState([]);
	let [filteredEvents, setFilteredEvents] = useState([]);

	useEffect(() => {
		fetch('/wp-json/wp/v2/event?_embed')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				console.log(data[0]._embedded);
				setEvent(data);
				setFilteredEvents(data);
			})
	}, []); //<-- [] defines when the hook is run


	function filterEvents(keyword){
		//if you have a ton of records you would do an ajax call here

		const results = event.filter( name => {
			return name.title.rendered.toLowerCase().includes(keyword.toLowerCase());
		})

		setKeyword(keyword);
		setFilteredEvents(results);
	}

	return (
		<div>
			<div>
				<label>Filter:
					<input type="text"
						   value={keyword}
						   onChange={e => filterEvents(e.target.value)}
					/>
					{keyword}
				</label>

				<br/>

				<TextControl
					label="Filter"
					value={keyword}
					onChange={keyword => filterEvents(keyword)}
				/>
			</div>
			<EventList posts={filteredEvents}/>
		</div>
	)
}

