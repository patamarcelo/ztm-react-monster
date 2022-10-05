import { useState, useEffect } from "react";
// import { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
	const [searchField, setSearchField] = useState("");
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	console.log("render");

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	useEffect(() => {
		const newFilterMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});
		setFilteredMonsters(newFilterMonsters);
	}, [monsters, searchField]);

	const onSearchChange = (e) => {
		const searchFieldString = e.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className="App">
			<h1 className="text-5xl app-title">Monsters Rolodex</h1>
			<SearchBox
				onChangeHandler={onSearchChange}
				placeholder="Search Monsters"
				className="border"
			/>
			<div className="w-full flex items-center justify-center">
				<CardList monsters={filteredMonsters} />
			</div>
		</div>
	);
};
// class App extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			monsters: [],
// 			searchField: ""
// 		};
// 		console.log("constructor");
// 	}

// 	componentDidMount() {
// 		console.log("componentDidMount");
// 		fetch("https://jsonplaceholder.typicode.com/users")
// 			.then((response) => response.json())
// 			.then((users) =>
// 				this.setState(
// 					() => {
// 						return { monsters: users };
// 					},
// 					() => {
// 						console.log(this.state);
// 					}
// 				)
// 			);
// 	}

// 	onSearchChange = (e) => {
// 		const searchField = e.target.value.toLocaleLowerCase();
// 		this.setState(() => {
// 			return { searchField };
// 		});
// 	};
// 	render() {
// 		console.log("Render");

// 		const { searchField, monsters } = this.state;
// 		const { onSearchChange } = this;
// 		const filterMonsters = monsters.filter((monster) => {
// 			return monster.name.toLocaleLowerCase().includes(searchField);
// 		});

// 		return (
// 			<div className="App">
// 				<h1 className="text-5xl app-title">Monsters Rolodex</h1>
// 				<SearchBox
// 					onChangeHandler={onSearchChange}
// 					placeholder="Search Monsters"
// 					className="border"
// 				/>
// 				<div className="w-full flex items-center justify-center">
// 					<CardList monsters={filterMonsters} />
// 				</div>
// 			</div>
// 		);
// 	}
// }

export default App;
