import { response } from "../externalData/Response.ts";
import { useState } from "react";
import {CharacterType} from "../types/ResponseTypes.ts";
import CharacterInfo from "./CharacterInfo.tsx";

export default function Character() {

    const [character, setCharacter] = useState<CharacterType[]>(response);

    console.log(character);
    //setCharacter()
    return (
        <>
            {
                character.map(char =>
                    <CharacterInfo
                        key={char.id}
                        name={char.name}
                        status={char.status}
                        species={char.species}
                        gender={char.gender}
                    />)
            }
        </>
    )
}