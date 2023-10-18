import Person from "./Person/Person";
import './App.css';
import {useState} from "react";

interface Person {
    name: string;
    age: number;
    hobby: string;
}

function App() {
    const [people, setPeople] = useState<Person[]>([
        {name: 'Jane', age: 28, hobby: 'Knitting'},
        {name: 'John', age: 32, hobby: 'Video games'},
    ]);

    const [numbers, setNumbers] = useState<number[]>([])
    const changeName = () => {
            setPeople([
            {name: 'Jane Doe', age: 28, hobby: 'Knitting'},
            {name: 'John Doe', age: 32, hobby: 'Video games'},
        ]);
    };

    const addNumber = () => {
        setNumbers((prevState) => {
            return [...prevState, 20];
        })
    };

    return (
        <div className="App">
            <Person name={people[0].name} age={people[0].age}><strong>Hobby: </strong>{people[0].hobby}</Person>
            <Person name={people[1].name} age={people[1].age}><strong>Hobby: </strong>{people[1].hobby}</Person>
            <div>
                {numbers.join(', ')}
            </div>
            <div>
                <button onClick={changeName}>Change name</button>
                <button onClick={addNumber}>Change number</button>
            </div>
        </div>
    );
}

export default App;
