import {CharacterInfoProps} from "../types/ComponentProps.ts";

export default function CharacterInfo(props: CharacterInfoProps) {

    return (
        <section className={"character-info"}>
            <h4 style={{color: "#535bf2"}}>{props.name}</h4>
            <h5>Stats: {props.status}</h5>
            <h5>Species: {props.species}</h5>
            <h5>Gender: {props.gender}</h5>
        </section>
    )
}