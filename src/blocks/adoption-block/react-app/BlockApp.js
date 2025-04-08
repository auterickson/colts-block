import React, {useState, useEffect} from 'react';
import {TextControl} from "@wordpress/components";
import DogList from "./dog-list";


export default function BlockApp(props) {
	let [keyword, setKeyword] = useState('');
	let [dog, setDog] = useState([]);
	let [filteredDogs, setFilteredDogs] = useState([]);

	useEffect(() => {
		fetch('/wp-json/wp/v2/dog?_embed')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				console.log(data[0]._embedded);
				setDog(data);
				setFilteredDogs(data);
			})
	}, []); //<-- [] defines when the hook is run


	function filterDogs(keyword){
		//if you have a ton of records you would do an ajax call here

		const results = dog.filter( name => {
			return name.title.rendered.toLowerCase().includes(keyword.toLowerCase());
		})

		setKeyword(keyword);
		setFilteredDogs(results);
	}

	return (
		<div>
			<div>
				<label>Filter:
					<input type="text"
						   value={keyword}
						   onChange={e => filterDogs(e.target.value)}
					/>
					{keyword}
				</label>

				<br/>

				<TextControl
					label="Filter"
					value={keyword}
					onChange={keyword => filterDogs(keyword)}
				/>
			</div>
			<DogList posts={filteredDogs}/>
		</div>
	)
}

