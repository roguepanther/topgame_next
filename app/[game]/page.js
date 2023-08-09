import Image from "next/image"

export default async function GameDetail({params}) {
    const {game} = params
    const data = await fetch(`https://api.rawg.io/api/games/${game}?key=${process.env.API_KEY}`);
    const res = await data.json()

    return(
        <div>
            <div>
                <h2 className="text-2xl">{res.name}</h2>
                <h2 className="text-lg"> {res.released}</h2>
                <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-medium">Rating: {res.rating} Out of {res.ratings_count} ratings</h2>
                <Image className="my-12 w-full" src={res.background_image} width={1000} height={1000} priority/>
            </div>
        </div>
    )
}