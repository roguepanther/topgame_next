import Game from "./Game";

export default async function Home() {
  const data = await fetch(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`);
  const res = await data.json();
  console.log(res)
  return (
    <main>
      <h1 className="text-lg py-2 m-4"> TopGame App</h1>
      <div className="grid gap-16 grid-cols-fluid">
      {res.results.map((game) => (
        <Game title={game.name} 
          key={game.id}
          id={game.id}
          release_date={game.released}
          background_image={game.background_image}
        />
      ))}
       </div>
    </main>
  )
}
