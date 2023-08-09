import { Repo } from "./Repo";

export async function User(){
await new Promise<void>((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('https://api.github.com/users/mattzu22', {

  cache: 'no-store',
  });

 const user = await response.json()
 
  return (
   <div>
    <h1>User</h1>
    <pre>{JSON.stringify(user, null, 2)}</pre>
   </div>
  )
}