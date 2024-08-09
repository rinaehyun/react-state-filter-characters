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
            <input
                className={"search-input"}
                onChange={handleInputChange}
            />
            <Character searchQuery={searchItem}/>
        </>
    )
}

export default App
