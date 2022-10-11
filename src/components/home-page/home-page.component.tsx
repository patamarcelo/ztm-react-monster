import { useState, useEffect } from "react";

import CardList from "../card-list/card-list.component";
import SearchBox from "../search-box/search-box.component";


import { getData } from '../../utils/data.utils'
import { ChangeEvent } from 'react'

export type Monster = {
    id: string;
    name: string;
    email: string;
}
const HomePage = () => {


        const [searchField, setSearchField] = useState("");
        const [monsters, setMonsters] = useState<Monster[]>([]);
        const [filteredMonsters, setFilteredMonsters] = useState(monsters);

        console.log("render");

        useEffect(() => {
            // fetch("https://jsonplaceholder.typicode.com/users")
            //     .then((response) => response.json())
            //     .then((users) => setMonsters(users));
            const fetchUsers = async () => {
                const users = await getData<Monster[]>(`https://jsonplaceholder.typicode.com/users`)
                setMonsters(users);
            }
            fetchUsers();
        }, []);

        useEffect(() => {
            const newFilterMonsters = monsters.filter((monster) => {
                return monster.name.toLocaleLowerCase().includes(searchField);
            });
            setFilteredMonsters(newFilterMonsters);
        }, [monsters, searchField]);

        const onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void =(e) => {
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
}


export default HomePage;