import './App.css'
import Character from "./externalAPI/componenets/Character.tsx";
import {useState} from "react";

function App() {

    const [searchItem, setSearchItem] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchItem(e.target.value)
    };

    return (
        <>
            <h1 style={{fontSize: "40px"}}>Rick and Morty Characters</h1>
            <label className={"label-input-container"}>
                Character Name Filter:
                <input
                    className={"search-input"}
                    onChange={handleInputChange}
                />
            </label>
            <Character searchQuery={searchItem}/>
        </>
    )
}

export default App
