import React from "react";
import {
  LiaExclamationCircleSolid,
  LiaExclamationSolid,
  LiaExclamationTriangleSolid,
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

      <p>A végén kapsz egy ip-címet, amivel eljutsz a UI-ba.</p>
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
      <p>Végül add meg fotóid/videóid helyét</p>
      <img
        src="jellyfinfolder.png"
        alt="Jellyfin könyvtár megadása"
        loading="lazy"
        className="rounded-lg"
      />
      <p>
        Ezek után el tudo érni a UI-t a számítógép local ip-címével, amit a
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
    </div>
  );
};

export default Jellyfin;
