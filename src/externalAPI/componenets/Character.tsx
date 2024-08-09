import { response } from "../externalData/Response.ts";
import {useEffect, useState} from "react";
import {CharacterType} from "../types/ResponseTypes.ts";
import CharacterInfo from "./CharacterInfo.tsx";
import {CharacterProps} from "../types/ComponentProps.ts";
import CharacterPhoto from "./CharacterPhoto.tsx";

export default function Character({ searchQuery }: CharacterProps) {

    const [characters, setCharacters] = useState<CharacterType[]>(response);

    useEffect((): void => {
        setCharacters(
            response.filter(character =>
                character.name.toLowerCase().includes(searchQuery.toLowerCase())
        ));
    }, [searchQuery])


    return (
        <>
            {
                characters.map(character =>
                    <div key={character.id} className={"character-box"}>
                        <CharacterInfo
                            name={character.name}
                            status={character.status}
                            species={character.species}
                            gender={character.gender}
                        />
                        <CharacterPhoto image={character.image}/>
                    </div>
                )
            }
        </>
    )
}