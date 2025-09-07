
import Link from "next/link";

// icons 
import { FaArrowRightToBracket } from "react-icons/fa6";

export default function Home() {
  return (
  <>
   <div className=" mx-auto flex flex-col items-center justify-center gap-4 flex-1 ">
    <h1 className="text-4xl font-bold text-purple-700">Welcome to Notes App</h1>
    <h3 className="text-2xl">A simple way to jot down your thoughts</h3>
    <Link href="/notes">
    <button className="flex items-center gap-2 py-2 px-4 mx-1 bg-purple-700 text-white rounded-lg text-lg cursor-pointer">View Notes

      <FaArrowRightToBracket/>
    </button>
    </Link>
   </div>
  </>
  );
}
