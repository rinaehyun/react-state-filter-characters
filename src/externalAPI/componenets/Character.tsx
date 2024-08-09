import { response } from "../externalData/Response.ts";
import { useState } from "react";
import {CharacterType} from "../types/ResponseTypes.ts";

export default function Character() {

    const [character, setCharacter] = useState<CharacterType[]>(response);

    console.log(character);
    //setCharacter()
    return (
        <></>
    )
}