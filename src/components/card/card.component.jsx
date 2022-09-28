// import { Component  } from 'react';
import "./card.styles.css";

const CardComponent = ({ monster }) => {
	const { id, name, email } = monster;
	return (
		<div className="card-container" key={id}>
			<img
				alt={`monster ${name}`}
				src={`https://robohash.org/${id}?set=set2&size=180x180`}
			/>
			<h2 className="text-2xl py-5">
				{name}
			</h2>
			<small>
				{email}
			</small>
		</div>
	);
};
// class CardComponent extends Component {
//     render(){
//         const { id, name , email } = this.props.monster
//         return (
//             <div className="card-container" key={id}>
//                             <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
//                             <h2 className="text-2xl py-5">{name}</h2>
//                             <small>{email}</small>
//                         </div>
//         )
//     }
// }

export default CardComponent;
