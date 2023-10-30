import DownloadLinux from "./DownloadLinux";
import Jellyfin from "./Jellyfin";

import Pihole from "./Pihole";
import Shairplay from "./Shairplay";
import Spocon from "./Spocon";

export default function Home() {
  return (
    <main className="dark:bg-[#111111] flex flex-col gap-3 md:w-11/12 overflow-x-hidden px-3 md:px-5 w-full self-center bg-white">
      <p className="text-2xl absolute top-5 self-center w-5/6 gradient pt-10 text-center p-3 font-extrabold md:text-3xl">
        Új Élet A Réginek
      </p>
      <div className=" self-center w-full h-28" />

      <p className="pb-3">
        Szeretnél új életet lehelni a régi gépedbe vagy számítógépedbe, ami
        esetleg csak egy porfogó most?
      </p>
      <p>
        Ebben az útmutatóban lehetőséged lesz kiválasztani feature-öket, amiket
        szeretnél használni az új szervereden.
      </p>

      <DownloadLinux />
      <Pihole />
      <Jellyfin />
      <Shairplay />
      <Spocon />
    </main>
  );
}
