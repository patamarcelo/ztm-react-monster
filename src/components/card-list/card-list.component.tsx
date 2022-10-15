import "./card-list.styles.css";

import CardComponent from "../card/card.component";
import { Monster } from '../home-page/home-page.component'

type CardListProps = { 
	monsters: Monster[],
}
const CardList = ({ monsters }: CardListProps) =>
	<div className="card-list">
		{monsters.map(monster => {
			return <CardComponent key={monster.id} monster={monster} />;
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
