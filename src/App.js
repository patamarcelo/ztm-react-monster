import { Routes, Route } from "react-router-dom";
// import { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/home-page/home-page.component";
import User from "./components/user/user.component";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/user" element={<User />} />
		</Routes>
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
