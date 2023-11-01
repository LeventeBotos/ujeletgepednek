import React from "react";
import { BiLogoGoogle, BiSearch } from "react-icons/bi";

const Pihole = () => {
  return (
    <div
      id="pihole"
      className="flex flex-col bg-[#f5f5f5] dark:bg-[#1f1f1f] rounded-lg gap-3 p-3"
    >
      <p className="gradient text-xl md:text-2xl font-bold">
        Pi-Hole, egy adblocker letöltése
      </p>
      <p>
        A Pi-hole képes blokkolni a hirdetéseket DNS-szinten. Amikor egy eszköz
        hirdetéseket próbál letölteni vagy megjeleníteni egy weboldalon, a
        Pi-hole elutasítja a DNS-kérést, ami megakadályozza az adott hirdetési
        tartalom elérését. Ennek eredményeként az eszközök, amelyek a hálózatra
        csatlakoznak, kevesebb vagy semmilyen hirdetést nem látnak a böngészés
        során. A Pi-hole számos előnyt kínál, például:
      </p>
      <ul className="pl-5 list-disc">
        <li>
          <strong>Hirdetések blokkolása:</strong> Csökkenti a böngészés közbeni
          zavaró hirdetéseket.
        </li>
        <li>
          <strong>Adatforgalom csökkentése:</strong> Mivel nem tölt le
          hirdetéseket, kevesebb adatot használ fel.
        </li>
        <li>
          <strong>Gyorsabb webböngészés:</strong> A hirdetések blokkolása miatt
          a weboldalak gyorsabban betöltődnek.
        </li>
        <li>
          <strong>Adatvédelem:</strong> Hirdetési hálózatok nem tudják követni a
          böngészési szokásokat.
        </li>
        <li>
          <strong>Biztonság:</strong> A Pi-hole segíthet elkerülni rosszindulatú
          webhelyek és hirdetések elérésekor rejlő veszélyeket.
        </li>
      </ul>

      <div className="code gap-2 flex">
        <p className=" select-none">$ </p>{" "}
        <p>sudo curl -sSL https://install.pi-hole.net | bash</p>
      </div>
      <img
        src="piholeinstall.png"
        alt="Pi-hole install"
        loading="lazy"
        className="rounded-lg"
      />
      <p>
        A telepítés során kövesd az alábbi lépéseket és fogadd el az
        alapértelmezett beállításokat:
      </p>

      <ul className=" pl-6 list-disc">
        <li>Indítsd el a telepítést a fenti parancs futtatásával.</li>
        <li>
          A telepítő végén kapni fogsz egy IP-címet és jelszót az admin
          felülethez.
          <img
            src="piholeinstallationcomplete.png"
            alt="Pi-hole installlation complete"
            loading="lazy"
            className="rounded-lg"
          />
        </li>
        <li>Ezen az IP-címen fogod tudni elérni az admin felületet.</li>
        <li>
          Most már képes leszel irányítani az összes eszköz internetes forgalmát
          ezen az IP-címen keresztül.
        </li>
      </ul>
      <a
        href="https://www.google.com/search?q=how+to+set+up+a+dns+in+windows"
        className="bg-[#2f2f2f] relative w-full h-16 rounded-full items-center flex gap-2 p-2 px-4"
      >
        <BiLogoGoogle className="text-4xl self-center" />
        <p>How to set up a DNS in windows</p>
        <BiSearch className="text-4xl right-8 absolute" />
      </a>
      <p className="text-sm md:text-md opacity-70">
        *A DNS a szerver IP-címe legyen
      </p>
    </div>
  );
};

export default Pihole;
