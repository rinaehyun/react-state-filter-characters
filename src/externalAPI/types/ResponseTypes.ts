export type CharacterType = {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: Gender,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: string[],
    url: string,
    created: string
}


type Gender = "Male" | "Female" | "unknown";