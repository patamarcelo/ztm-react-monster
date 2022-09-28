import "./card-list.styles.css";

import CardComponent from "../card/card.component";

const CardList = ({ monsters }) =>
	<div className="card-list">
		{monsters.map(monster => {
			return <CardComponent monster={monster} />;
		})}
	</div>;

// class CardList extends Component {
//     render () {
//         const { monsters } = this.props;
//         console.log('render Cardlist')
//         return (
//             <div className="card-list">
// 					{monsters.map((monster) => {
//                     return <CardComponent monster={monster} />
//                     })}
//             </div>
//         )
//     }
// }

export default CardList;
