import { response } from "../externalData/Response.ts";
import {useEffect, useState} from "react";
import {CharacterType} from "../types/ResponseTypes.ts";
import CharacterInfo from "./CharacterInfo.tsx";
import {CharacterProps} from "../types/ComponentProps.ts";

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
                    <CharacterInfo
                        key={character.id}
                        name={character.name}
                        status={character.status}
                        species={character.species}
                        gender={character.gender}
                    />)
            }
        </>
    )
}