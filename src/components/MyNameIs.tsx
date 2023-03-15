interface MyNameIsProps {
    name: string
    age?: number
}

export function MyNameIs({ name, age }: MyNameIsProps) {
    return(
        <h2>Meu nome é {name}! {age && `Eu tenho ${age} anos.`} </h2>
    )
}