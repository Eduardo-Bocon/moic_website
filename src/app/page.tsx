import Image from "next/image";
import UpBar from "./components/up_bar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full bg-white">
      <UpBar></UpBar>
      <div className="flex flex-row w-full h-[450px] bg-gradient-to-t from-[#aabefc] from-10% to-white to-50% justify-center">
        <div className="mr-44 text-black text-3xl font-bold mt-10">
          <h1>Crypto</h1>
          <h1>Tweeter/X</h1>
        </div>
        <div>
          <h1>MOIC</h1>
        </div>
      </div>
      
    </main>
  );
}
