import Link from "next/link";

export async function Repo(){
    await new Promise<void>((resolve) => setTimeout(resolve, 5000))

  const response = await fetch('https://api.github.com/users/mattzu22/repos', {

  cache: 'no-store',
  });

 const Repo = await response.json()
 
  return (
   <div>
    <h1>Repo</h1>
    <pre>{JSON.stringify(Repo, null, 2)}</pre>
   
   </div>
  )
}