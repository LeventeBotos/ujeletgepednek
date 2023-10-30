import React from "react";

const Pihole = () => {
  return (
    <div
      id="pihole"
      className="flex flex-col bg-[#f5f5f5] dark:bg-[#1f1f1f] rounded-lg gap-3 p-3"
    >
      <p className="gradient text-xl md:text-2xl font-bold">
        Pi-Hole, egy adblocker letöltése
      </p>
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
        <li>
          Nyisd meg egy böngészőt, és látogasd meg ezt az IP-címet a
          hálózatodon.
        </li>
        <li>
          Most már képes leszel irányítani az összes eszköz internetes forgalmát
          ezen az IP-címen keresztül.
        </li>
      </ul>
    </div>
  );
};

export default Pihole;
