import React from "react";
import { BiLogoGoogle, BiSearch } from "react-icons/bi";
import {
  LiaExclamationCircleSolid,
  LiaExclamationSolid,
  LiaExclamationTriangleSolid,
  LiaGoogle,
} from "react-icons/lia";

const Jellyfin = () => {
  return (
    <div
      id="jellyfin"
      className="flex flex-col gap-2 bg-[#f5f5f5] dark:bg-[#1f1f1f] rounded-lg p-3 w-full"
    >
      <p className="gradient text-xl md:text-2xl font-bold">
        Jellyfin, egy médiaszerver letöltése
      </p>
      <p>
        A Jellyfin egy nyílt forráskódú médiaszerver szoftver, amely lehetővé
        teszi az otthoni média gyűjtemények tárolását, szervezését és
        streamingjét. Ez a szoftver lehetővé teszi, hogy saját médiafájljait
        (például filmeket, sorozatokat, zenéket és egyéb médiafájlokat) tárolja
        egy központi helyen, majd hozzáférjen ezekhez a fájlokhoz különböző
        eszközökön, például okostelefonokon, táblagépeken, számítógépeken vagy
        intelligens TV-kön keresztül. A Jellyfin kiemelkedik a következő
        szolgáltatásaival:
      </p>
      <ul className="pl-5 list-disc">
        <li>
          <strong>Média tárolás és szervezés:</strong> A felhasználók számára
          lehetőséget nyújt a médiafájlok tárolására és kategorizálására
          különböző mappastruktúrákban.
        </li>
        <li>
          <strong>Streaming:</strong> Lehetővé teszi a médiafájlok streamingjét
          több eszközön, amelyek képesek kapcsolódni a Jellyfin szerverhez.
        </li>
        <li>
          <strong>Média konvertálás:</strong> A Jellyfin szoftver beépített
          média konvertálóval rendelkezik, amely automatikusan átalakítja a
          médiafájlokat az eszközök kompatibilitásának biztosítása érdekében.
        </li>
        <li>
          <strong>Felhasználói fiókok és jogosultságok:</strong> Lehetőséget
          nyújt a felhasználói fiókok létrehozására, így a családtagok vagy
          barátok is hozzáférhetnek a média tartalomhoz. A jogosultságok
          beállításával szabályozható, hogy ki melyik tartalomhoz fér hozzá.
        </li>
        <li>
          <strong>Erős kliens támogatás:</strong> Számos kliens alkalmazás és
          böngésző kiegészítő létezik a Jellyfinhez, amelyek lehetővé teszik a
          különböző eszközökön történő hozzáférést.
        </li>
      </ul>

      <div className="code gap-2 flex">
        <p className=" select-none">$ </p>{" "}
        <p>
          sudo curl https://repo.jellyfin.org/install-debuntu.sh | sudo bash
        </p>
      </div>
      <p>
        Az installáció során végig fogadd el a dolgokat, az alapértelmezett
        teljesen jó.
      </p>
      <div className="code gap-2 flex">
        <p className=" select-none">$ </p>{" "}
        <p>sudo systemctl start jellyfin.service</p>
      </div>

      <p>A végén kapsz egy IP-címet, amivel eljutsz a UI-ba.</p>
      <img
        src="jellyfinsetup.png"
        alt="Jellyfin Setup"
        loading="lazy"
        className="rounded-lg"
      />
      <p>Most csinálj egy felhasználót, amivel be fogsz lépni</p>
      <img
        src="jellyfinuser.png"
        alt="Jellyfin felhasználó kreálás"
        loading="lazy"
        className="rounded-lg"
      />
      <p>Végül add meg fotóid és videóid helyét</p>
      <img
        src="jellyfinfolder.png"
        alt="Jellyfin könyvtár megadása"
        loading="lazy"
        className="rounded-lg"
      />
      <p>
        Ezek után el tudo érni a UI-t a számítógép local IP-címével, amit a
        következő commanddal nézhetsz meg:
      </p>
      <div className="code gap-2 flex">
        <p className=" select-none">$ </p> <p>ifconfig -y</p>
      </div>
      <img
        src="yourip.png"
        alt="Az IP címed"
        loading="lazy"
        className="rounded-lg"
      />
      <p>
        Vagy ha a routereden beállítasz egy port-forward profilt, akárhonnan az
        internetről.
      </p>
      <div className="rounded-lg p-2 gap-2 bg-red-500 flex ">
        <LiaExclamationCircleSolid className="h-full w-16 text-9xl self-center" />
        <p>
          {" "}
          Egy port-forward-dal nagyon vigyázz a biztonságra. Kérlek, kövess egy
          útmutatót, hogy biztonságban maradj.
        </p>
      </div>
      <a
        href="https://www.google.com/search?q=how+to+set+up+port+forwarding"
        className="bg-[#2f2f2f] relative w-full h-16 rounded-full items-center flex gap-2 p-2 px-4"
      >
        <BiLogoGoogle className="text-4xl self-center" />
        <p>How to set up port-forwarding</p>
        <BiSearch className="text-4xl right-8 absolute" />
      </a>
    </div>
  );
};

export default Jellyfin;
