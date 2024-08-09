import {CharacterInfoProps} from "../types/ComponentProps.ts";

export default function CharacterInfo(props: CharacterInfoProps) {

    return (
        <section className={"character-info"}>
            <h4>{props.name}</h4>
            <h5>{props.status}</h5>
            <h5>{props.species}</h5>
            <h5>{props.gender}</h5>
        </section>
    )
}