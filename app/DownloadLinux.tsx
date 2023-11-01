import React from "react";
import Image from "next/image";

const DownloadLinux = () => {
  return (
    <div
      id="linux"
      className="flex flex-col bg-[#f5f5f5] dark:bg-[#1f1f1f] rounded-lg gap-3 p-3 items-start w-full"
    >
      <p className="gradient text-xl md:text-2xl font-bold">
        Az Új Operációs Rendszer Letöltése
      </p>
      <p>
        Ebben az útmutatóban Linux-ot fogunk használni. A Linux egy OS, mint a
        Windows, csak más dolgokra van használva, legtöbbször szerver ként.
      </p>
      <p>
        A Linuxnak nagyon sok verziója elérhető, de én az Ubuntu-t ajánlom a
        kezdőknek. Azt fogjuk letölteni.
      </p>
      <p className="text-xl md:text-2xl self-start font-semibold">
        1. ISO megszerzése
      </p>
      <img
        src="/downloadubuntu.png"
        alt="ISO megszerzése"
        loading="lazy"
        className="rounded-lg"
      />
      <p>
        Az <a href="https://ubuntu.com/download/server">Ubuntu weboldaláról</a>{" "}
        le tudjuk tölteni a legújabb verziót, ami jelenleg nekem a Ubuntu
        22.04.3 Server.
      </p>
      <p className="text-xl md:text-2xl self-start font-semibold">
        2. ISO Feltöltése USB-re
      </p>
      <img
        src="/downloadetcher.png"
        alt="Etcher letöltése"
        loading="lazy"
        className="rounded-lg"
      />
      <p>
        A{" "}
        <a href="https://etcher.balena.io/#download-etcher">
          Balena weboldaláról
        </a>{" "}
        le tudjuk tölteni az Etcher alkalmazást, ami ISO fájlok
        &quot;flashelésére&quot; használandó. Ez igazából csak ráteszi a fájlt
        egy USB-re.
      </p>
      <img
        src="/etcher.png"
        alt="ISO flashelére az USB-re"
        loading="lazy"
        className="rounded-lg"
      />
      <p>
        Nyisdd meg az alkalmazást, válaszd ki a letöltött ISO-t, az USB drive-ot
        és nyomd meg hogy &quot;Flash&quot;!
      </p>
      <p className="text-xl md:text-2xl self-start font-semibold">
        3. Boot Az Ubuntu-ba
      </p>
      <p>
        Tedd be a szervernek szánt kompútered USB portjába a Flash drive-ot,
        amit csináltál, és indítsd újra. Nemsokára ilyeneket kéne látnod:
      </p>
      <img
        src="booting.png"
        alt="Boot Az Ubuntu-ba"
        loading="lazy"
        className="rounded-lg"
      />
      <p className="text-sm md:text-md opacity-70">
        *Ha nem jött fel ez a képernyő, akkor az indításkor a számítógép
        képernyőjén megjelenik egy üzenet, amely közli, hogy milyen billentyűt
        kell lenyomni a beállítások vagy a boot menü eléréséhez. A gyártótól
        függően ez lehet az Escape, F2, F10 vagy F12 billentyű. Egyszerűen
        indítsa újra a számítógépet, és tartsa lenyomva ezt a billentyűt addig,
        amíg megjelenik a boot menü, majd válassza ki azt a meghajtót, amin az
        Ubuntu telepítő média található.
      </p>
      <p className="text-xl md:text-2xl self-start font-semibold">
        4. Ubuntu konfigurálása
      </p>
      <p className="self-start">
        Válaszdd ki a nyelvet, amin szeretnéd hogy végigmenjen a telepítésen és
        kövesd a konfiguráció lépéseit.
      </p>
      <img
        src="language.png"
        alt="Nyelv kiválasztása"
        loading="lazy"
        className="rounded-lg"
      />
      <p>Válassz nyelvet Frissítsd a telepítőt (ha elérhető)</p>
      <p> Válaszd ki a billentyűzet elrendezését</p>
      <p>
        {" "}
        Ne konfiguráld a hálózatot (a telepítő megpróbálja beállítani a
        vezetékes hálózati csatlakozásokat DHCP segítségével, de ha ez nem
        működik, folytathatod hálózat nélkül is)
      </p>
      <p>
        {" "}
        Ne állíts be proxyt vagy egyéni tükröt, hacsak a hálózatod ezt meg nem
        követeli
      </p>
      <p>
        {" "}
        Tárolásnál hagyd bejelölve a &quot;teljes meghajtó használata&quot;
        lehetőséget, majd válassz egy meghajtót a telepítéshez, majd válaszd a
        &quot;Kész&quot; lehetőséget a konfigurációs képernyőn, és erősítsd meg
        a telepítést
      </p>
      <p>Add meg a felhasználónevet, hosztnév és jelszót</p>
      <p>
        {" "}
        Az SSH és snap beállításoknál válaszd a &quot;Kész&quot; lehetőséget
      </p>
      <p>
        Most látni fogsz logokat, amint a telepítés befejeződik Válaszd a
        rendszer újraindítását, amikor befejeződik, majd jelentkezz be a
        megadott felhasználónévvel és jelszóval. Ezt kell látnod:
      </p>
      <img
        src="loggedin.png"
        alt="Bejelentkezett Ubuntu kép"
        loading="lazy"
        className="rounded-lg"
      />
      <p>
        Ilyenkor mindig ajánlott egy frissítés ellenőrzés, amit a következő
        parancsal lehet futtatni:
      </p>
      <div className="code gap-2 flex">
        <p className=" select-none">$ </p>{" "}
        <p> sudo apt-get update && sudo apt-get upgrade</p>
      </div>
      <p>
        Kelleni fog hozzá a jelszó, amit megadtál, mint minden &quot;sudo&quot;
        commandhoz.
      </p>
    </div>
  );
};

export default DownloadLinux;
