import React from "react";

const Shairplay = () => {
  return (
    <div
      id="shairplay"
      className="flex flex-col bg-[#f5f5f5] dark:bg-[#1f1f1f] rounded-lg gap-3 p-3"
    >
      <p className="gradient text-xl md:text-2xl font-bold">
        Shairport-Sync, egy AirPlay hangszóró létrehozása
      </p>
      <p>
        Shairport Sync lehetővé teszi bármilyen számítógép vagy eszköz számára,
        hogy AirPlay-képes hangforrássá váljon, így könnyedén lehet zenét,
        podcasteket, hangoskönyveket és egyéb audiotartalmakat vezeték nélküli
        úton továbbítani más AirPlay-képes eszközök felé. Ez lehetővé teszi az
        iOS vagy macOS eszközök (például iPhone, iPad vagy Mac) számára, hogy
        vezeték nélküli streaming szolgáltatást nyújtsanak AirPlay-képes
        eszközökkel.
      </p>
      <h3>Főbb jellemzők és felhasználási lehetőségek:</h3>
      <ul className="pl-5 list-disc">
        <li>
          <strong>Vezeték nélküli hangszórók:</strong> Shairport Sync
          segítségével bármelyik hangszóró vagy erősítő AirPlay-képesvé válhat,
          és lehetővé teszi vezeték nélküli hangstreaminget okostelefonról vagy
          számítógépről.
        </li>
        <li>
          <strong>Multiroom audiostreaming:</strong> Több Shairport
          Sync-kompatibilis eszköz segítségével több helyiségben is egyszerre
          lejátszható a hang, létrehozva egy multiroom hangrendszer.
        </li>
        <li>
          <strong>Zene megosztás:</strong> Egyszerűen megosztható zene az
          eszközök között, lehetővé téve több felhasználó számára a zenék
          AirPlay-képes hangszórókon való közvetítését.
        </li>
        <li>
          <strong>Különböző platformokon való futtatás:</strong> Shairport Sync
          számos operációs rendszeren működik, beleértve a Linuxot és a
          Raspberry Pi-t.
        </li>
        <li>
          <strong>Nyílt forráskód:</strong> Shairport Sync egy nyílt forráskódú
          projekt, ami lehetőséget nyújt a fejlesztők számára a szoftver
          testreszabására és bővítésére saját igényeik szerint.
        </li>
      </ul>
      <p>Le kell tölteni a szükséges csomagokat a Shairport-sync-hez:</p>
      <div className="code gap-2 flex">
        <p className=" select-none">$ </p>{" "}
        <p>
          sudo apt install --no-install-recommends build-essential git autoconf
          automake libtool libpopt-dev libconfig-dev libasound2-dev avahi-daemon
          libavahi-client-dev libssl-dev libsoxr-dev libplist-dev libsodium-dev
          libavutil-dev libavcodec-dev libavformat-dev uuid-dev libgcrypt-dev
          xxd
        </p>
      </div>
      <p>NQPTP csomagjainak letöltése:</p>
      <div className="code gap-2 flex">
        <p className=" select-none">$ </p>{" "}
        <p>git clone https://github.com/mikebrady/nqptp.git && cd nqptp</p>
      </div>
      <p>Konfiguráljuk:</p>
      <div className="code gap-2 flex">
        <p className=" select-none">$ </p>{" "}
        <p>sudo autoreconf -fi && sudo ./configure --with-systemd-startup</p>
      </div>

      <p>És telepítjük:</p>
      <div className="code gap-2 flex">
        <p className=" select-none">$ </p>{" "}
        <p> sudo make && sudo make install</p>
      </div>

      <p>Végül, indítsuk el az NQPTP-t:</p>
      <div className="code gap-2 flex">
        <p className=" select-none">$ </p>{" "}
        <p> sudo systemctl enable nqptp && sudo systemctl start nqptp </p>
      </div>
      <p>Most töltsük le a Shairport-sync csomagjait:</p>
      <div className="code gap-2 flex">
        <p className=" select-none">$ </p>{" "}
        <p>
          {" "}
          sudo git clone https://github.com/mikebrady/shairport-sync.git && cd
          shairport-sync
        </p>
      </div>
      <p>Konfiguráljuk:</p>
      <div className="code gap-2 flex">
        <p className=" select-none">$ </p>{" "}
        <p>
          sudo autoreconf -fi && ./configure --sysconfdir=/etc --with-alsa \
          --with-soxr --with-avahi --with-ssl=openssl --with-systemd
          --with-airplay-2
        </p>
      </div>

      <p>Telepítjük:</p>
      <div className="code gap-2 flex">
        <p className=" select-none">$ </p>{" "}
        <p> sudo make && sudo make install</p>
      </div>

      <p>És indítsuk el a Shairport-sync-et:</p>
      <div className="code gap-2 flex">
        <p className=" select-none">$ </p>{" "}
        <p>
          {" "}
          sudo systemctl start shairport-sync && sudo systemctl enable
          shairport-sync{" "}
        </p>
      </div>
    </div>
  );
};

export default Shairplay;
