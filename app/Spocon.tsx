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
      <p>A SpoCon letöltése és telepítése:</p>
      <div className="code gap-2 flex">
        <p className=" select-none">$ </p>{" "}
        <p>sudo curl -sL https://spocon.github.io/spocon/install.sh | sh</p>
      </div>
    </div>
  );
};

export default Spocon;
