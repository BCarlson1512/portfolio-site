import { Head } from "$fresh/runtime.ts";
import Navbar from "../components/Navbar.tsx"

export default function Home() {
  return (
    <>
      <Head>
        <title>Ben Carlson | Home</title>
      </Head>
      <div>
        <Navbar />
      </div>
      <div class="p-4 mx-auto max-w-screen-md">
        <div>
          
        </div>
      </div>
    </>
  );
}
