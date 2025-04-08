import React, {useState, useEffect} from 'react';
import ClassList from "./class-list";
import {TextControl} from "@wordpress/components";


export default function BlockApp(props) {
	let [keyword, setKeyword] = useState('');
	let [classes, setClass] =useState([]);
	let [filteredClasses, setFilteredClasses] = useState([]);

	useEffect(() => {
		fetch('/wp-json/wp/v2/class?_embed')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				console.log(data[0]._embedded);
				setClass(data);
				setFilteredClasses(data);
			})
	}, []); //<-- [] defines when the hook is run


	function filterClasses(keyword){
		//if you have a ton of records you would do an ajax call here

		const results = classes.filter( name => {
			return name.title.rendered.toLowerCase().includes(keyword.toLowerCase());
		})

		setKeyword(keyword);
		setFilteredClasses(results);
	}

	return (
		<div>
			<div>
				<label>Filter:
					<input type="text"
						   value={keyword}
						   onChange={e => filterClasses(e.target.value)}
					/>
					{keyword}
				</label>

				<br/>

				<TextControl
					label="Filter"
					value={keyword}
					onChange={keyword => filterClasses(keyword)}
				/>
			</div>
			<ClassList posts={filteredClasses}/>
		</div>
	)
}

