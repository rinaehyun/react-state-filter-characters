import {PhotoProps} from "../types/ComponentProps.ts";

export default function CharacterPhoto ({ image }: PhotoProps) {

    return (
        <img
            src={image}
            alt={"character-image"}
            style={{height:200, width:200}}
        />
    )
}