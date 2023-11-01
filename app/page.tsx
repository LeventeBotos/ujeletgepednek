import { BiRecycle } from "react-icons/bi";
import { BsLightning } from "react-icons/bs";
import { MdOutlineMoneyOffCsred } from "react-icons/md";
import DownloadLinux from "./DownloadLinux";
import Jellyfin from "./Jellyfin";

import Pihole from "./Pihole";
import Shairplay from "./Shairplay";
import Spocon from "./Spocon";

export default function Home() {
  return (
    <main className="dark:bg-[#111111] flex flex-col gap-3 md:w-11/12 overflow-x-hidden px-3 md:px-5 w-full self-center bg-white">
      <p className="text-2xl absolute top-5 self-center w-5/6 gradient pt-10 text-center p-3 font-extrabold md:text-3xl">
        Új Élet Egy Számítógépnek
      </p>
      <div className=" self-center w-full h-28" />
      <p className="pb-5 w-5/6 self-center">
        Az informatikai világban mindig van lehetőség arra, hogy
        megtapasztaljunk valami teljesen újat. Talán mostanáig úgy érezted, hogy
        régi számítógéped vagy laptopod már nem teljesít olyan jól, mint
        korábban, vagy épp csak egy porfogó alól szabadítanád fel. Vagy talán
        kíváncsi vagy az alternatív operációs rendszerek világára, de nem tudod,
        merre indulj el.
      </p>
      <p className="pb-5 w-5/6 self-center">
        Ebben az útmutatóban olyan lehetőségeket és megoldásokat kínálunk,
        amelyekkel meghozhatod a döntést a számítógéped felújítása vagy akár egy
        új Linux szerver használata mellett.
      </p>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row items-center gap-3 justify-evenly">
          <BiRecycle className="text-6xl" />
          <p className="md:w-2/3 w-full">
            <strong>Környezetvédelem:</strong> Az új életet lehelés nem csak a
            pénztárcádnak jó, hanem környezetvédelmi előnyökkel is jár. Régi
            számítógépek felújítása és újrahasznosítása segít csökkenteni az
            elektronikai hulladék mennyiségét, és így hozzájárul a
            fenntarthatósághoz.
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-3 justify-evenly">
          <p className="md:w-2/3 w-full">
            <strong> Gyorsaság és Stabilitás:</strong> A hardver frissítése és
            az operációs rendszer optimalizálása gyorsabb és stabilabb
            teljesítményt eredményez, ami kényelmesebb és hatékonyabb
            használatot tesz lehetővé.
          </p>
          <BsLightning className="text-6xl" />
        </div>
        <div className="flex flex-col md:flex-row gap-3  items-center justify-evenly">
          <MdOutlineMoneyOffCsred className="text-6xl" />
          <p className="md:w-2/3 w-full">
            <strong>Ingyenes Szoftverek:</strong> A Linux operációs rendszer
            nyílt forráskódú, ami azt jelenti, hogy ingyenesen hozzáférhető és
            használható. Ezáltal pénzt takaríthatsz meg a szoftverlicenc
            költségein.
          </p>
        </div>
      </div>
      {/* <p>
        Esetleg meg szeretnél ismerkedni a Linux világával, de nem tudod hogy
        hol kezdd?
      </p>
      <p>
        Ebben az útmutatóban lehetőséged lesz kiválasztani feature-öket, amiket
        szeretnél használni az új szervereden.
      </p> */}
      <DownloadLinux />
      <Pihole />
      <Jellyfin />
      <Shairplay />
      <Spocon />
      <p className="text-center text-2xl">
        Gratulálok, az útmutató követésével egy gépnyivel kevesebb szemetet
        kellett az ócéanba dobni!
      </p>
    </main>
  );
}
