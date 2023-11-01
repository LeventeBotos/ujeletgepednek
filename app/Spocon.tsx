import React from "react";

const Spocon = () => {
  return (
    <div
      id="spocon"
      className="flex flex-col bg-[#f5f5f5] dark:bg-[#1f1f1f] rounded-lg gap-3 p-3"
    >
      <p className="gradient text-xl md:text-2xl font-bold">
        SpoCon, egy Spotify Connect hangszóró létrehozása
      </p>
      <p>
        A SpoCon egy Spotify Connect client, amivel akármilyen Spotify
        alkalmazásról zenét játsszunk le a szerveren.
      </p>
      <p>A SpoCon letöltése és telepítése:</p>
      <div className="code gap-2 flex">
        <p className=" select-none">$ </p>{" "}
        <p>sudo curl -sL https://spocon.github.io/spocon/install.sh | sh</p>
      </div>
      <p>
        Amint letöltött a szoftver, fel fog jönni a Spotify-on a hangszóró ezen
        a hálózaton. A hangszóró neve a szerver neve lesz.
      </p>
      <img
        src="spotifyConnect.png"
        alt="SpotifyConnect használatban"
        loading="lazy"
        className="rounded-lg w-1/2 object-contain self-center"
      />
      <p>Ha nem jött fel, próbáldd meg a következőt:</p>
      <div className="code gap-2 flex">
        <p className=" select-none">$ </p>{" "}
        <p>
          sudo systemctl start spocon.service && sudo systemctl enable
          spocon.service
        </p>
      </div>
    </div>
  );
};

export default Spocon;
