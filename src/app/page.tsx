import { Repo } from "@/components/Repo";
import { User } from "@/components/User";
import { Contador } from "@/components/contador";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Suspense fallback={<p>carregando...user</p>}>
        <User />
      </Suspense>
      <Suspense fallback={<p>careggando...repo</p>}>
        <Repo />
      </Suspense>

      <Contador />
    </div>
  );
}
