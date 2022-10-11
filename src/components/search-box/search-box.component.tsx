// import { Component } from 'react';
import "./search-box.styles.css";
import {ChangeEvent } from 'react'

type SearchBoxProps = {
	className: string;
	placeholder?: string;
	onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}



const SearchBox = ({ onChangeHandler, placeholder, className }: SearchBoxProps ) =>
	
		<input
			placeholder={placeholder}
			className={`${className} search-box mt-10 p-1 pl-2 `}
			type="search"
			onChange={onChangeHandler}
		/>
	;

// class SearchBox extends Component {
//     render(){
//         const { onChangeHandler } = this.props
//         const { placeholder } = this.props
//         return (
//             <div>
//                 <input
// 					placeholder={placeholder}
// 					className={`${this.props.className} search-box mt-10 p-1 pl-2 `}
// 					type="search"
// 					onChange={onChangeHandler}
// 				/>
//             </div>
//                 )
//     }
// }

export default SearchBox;
