import "./user.styles.css";
import { useState, useEffect } from "react";

const User = () => {
	const [count, setCount] = useState(0);
	const [users, setUsers] = useState([]);
	const [arrayUsers, setArrayUsers] = useState([]);

	const handlerCount = () => setCount(count + 1);
	const handlerCountDecre = () => setCount(count - 1);

	const fetchNextUsers = async () => {
		const data = await fetch(`https://randomuser.me/api?page${count}`)
			.then(response => response.json())
			.then(data => data.results[0]);
		const { thumbnail } = data.picture;
		const { first, last } = data.name;
		const newUser = {
			name: first,
			last: last,
			photo: thumbnail
		};
		// const { name: { first, last} } = data.results
		// console.log('name', data)
		const addUser = [...users, newUser];
		setUsers(addUser);
		setCount(count + 1);
	};

	useEffect(() => {
		fetchNextUsers(count);
	}, []);

	console.log(typeof users);
	console.log(users.length);
	console.log(users);

	return (
		<div className="user-container">
			<h1 className="title">User Page</h1>

			<div className="container-counter">
				<button onClick={handlerCountDecre}>Decrem</button>
				<p>
					Incremente: {count}
				</p>
				<button onClick={fetchNextUsers}>Increment</button>
			</div>
			<div className="container-counter">
				{users &&
					users.map(user => {
						return (
							<div className="container-user-img">
								<div>
									<img src={user.photo} alt={user.name} />
								</div>
								<div>
									<span>
										{user.name}
									</span>
								</div>
								<div>
									<span>
										{user.last}
									</span>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default User;
