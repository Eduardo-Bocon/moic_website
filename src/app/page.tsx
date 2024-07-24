import Image from "next/image";
import UpBar from "./components/up_bar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <UpBar></UpBar>
    </main>
  );
}
