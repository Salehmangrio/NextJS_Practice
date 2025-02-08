'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigate = (path) => {
    router.push(path)
  }
  return (
    <>
      <h1>Hello</h1>
      <button
        className="bg-red-300 hover:bg-rose-500 px-6 py-2 text-xl rounded-lg"
        onClick={() => navigate('projects')}>
        Go To Projects
      </button>
    </>
  );
}
