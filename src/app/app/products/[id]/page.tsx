interface parmsProps{
 params:{
    id: string
 }
}

export default function Products({params}: parmsProps){
    return (
        <div>
            <h1>product, {params.id}</h1>
        </div>
    )
}