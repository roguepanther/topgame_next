import Link from "next/link"

export default function Game({title, key, id, release_date, background_image }){
    return(
        <div>
            <h1>{title}</h1>
            <h2>Release Date {release_date}</h2>
            <Link href={`/${id}`}>
                <img src={background_image} alt="" />
            </Link>
        </div>
    )
}