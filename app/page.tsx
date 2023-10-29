import Image from "next/image";
import Footer from "./Footer";
import DownloadLinux from "./DownloadLinux";

export default function Home() {
  return (
    <main className="dark:bg-[#1f1f1f] flex flex-col gap-5 md:w-11/12 pl-3 w-5/6 self-center bg-[#f9f9f9]">
      <p className="text-2xl w-full gradient  text-center self-center p-3 font-extrabold md:text-3xl">
        Új Élet A Réginek
      </p>
      <p className="">
        Szeretnél új életet lehelni a régi gépedbe vagy számítógépedbe, ami
        esetleg csak egy porfogó most?
      </p>
      <p>
        Ebben az útmutatóban lehetőséged lesz kiválasztani feature-öket, amiket
        szeretnél használni az új szervereden.
      </p>
      <DownloadLinux />
    </main>
  );
}
