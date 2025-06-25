import { useAtom } from "jotai";
import { useEffect } from "react";
import { pages } from "./Pictures";
import { pageAtom } from "./Atom";

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <>
      <main className=" pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col">
        {/* logo */}
        <a
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto mt-10 ml-10"
          href="https://aliyan-jabbar-portfolio.vercel.app/"
        >
          <img className="w-20" src="/images/logo.png" />
        </a>
        {/* buttons  */}
        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center sm:gap-4 xs:gap-3 gap-2 flex-wrap justify-center max-w-full p-10">
            {/* fist page (cover) */}
            <button
              className={`border-transparent hover:border-white transition-all duration-300 xs:px-3 xs:py-2 sm:px-4 sm:py-3 px-2 py-1 rounded-full  sm:text-lg text-sm uppercase shrink-0 border ${
                page === 0 ? "bg-white/90 text-black" : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(0)}
            >
              Cover
            </button>
            {/* prev */}
            <button
              className="border-transparent hover:border-white transition-all duration-300 xs:px-3 xs:py-2 sm:px-4 sm:py-3 px-2 py-1 rounded-full  sm:text-lg text-sm uppercase shrink-0 border hover:bg-white/90 hover:text-black bg-black/30 text-white flex items-center justify-center gap-2"
              onClick={() => setPage(page - 1 > 0 ? page - 1 : 0)}
            >
              <span>«</span>
              <span>Prev</span>
            </button>
            {/* next */}
            <button
              className="border-transparent hover:border-white transition-all duration-300 xs:px-3 xs:py-2 sm:px-4 sm:py-3 px-2 py-1 rounded-full  sm:text-lg text-sm uppercase shrink-0 border hover:bg-white/90 hover:text-black bg-black/30 text-white flex items-center justify-center gap-2"
              onClick={() =>
                setPage(page + 1 < pages.length ? page + 1 : pages.length)
              }
            >
              <span>Next</span>
              <span>»</span>
            </button>

            {/* last page (back cover)*/}
            <button
              className={`border-transparent hover:border-white transition-all duration-300 xs:px-3 xs:py-2 sm:px-4 sm:py-3 px-2 py-1 rounded-full  sm:text-lg text-sm uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length)}
            >
              Back Cover
            </button>
          </div>
        </div>
      </main>

      {/* background text */}
      <div className="fixed inset-0 flex items-center -rotate-2 select-none overflow-hidden">
        <div className="relative w-full">
          {/* First Scrolling Layer */}
          <div className="bg-white/0 animate-horizontal-scroll flex items-center gap-8 w-max px-8">
            <h1 className="shrink-0 text-white text-5xl xs:text-6xl sm:text-8xl md:text-9xl lg:text-10xl font-black">
              Aliyan's
            </h1>
            <h2 className="shrink-0 text-white text-4xl xs:text-5xl sm:text-6xl md:text-7xl italic font-light">
              React Three Fiber
            </h2>
            <h2 className="shrink-0 text-white text-5xl xs:text-7xl sm:text-9xl font-bold">
              Three.js
            </h2>
            <h2 className="shrink-0 text-transparent text-5xl xs:text-7xl sm:text-9xl font-bold italic outline-text">
              Quote Book
            </h2>
            <h2 className="shrink-0 text-white text-4xl xs:text-6xl sm:text-8xl font-extralight italic">
              Practice
            </h2>
            <h2 className="shrink-0 text-white text-6xl xs:text-8xl sm:text-10xl font-bold">
              Creative
            </h2>
            <h2 className="shrink-0 text-transparent text-6xl xs:text-8xl sm:text-10xl font-bold italic outline-text">
              Project
            </h2>
          </div>

          {/* Second Layer for Infinite Scroll Illusion */}
          <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
            <h1 className="shrink-0 text-white text-5xl xs:text-6xl sm:text-8xl md:text-9xl lg:text-10xl font-black">
              Aliyan's
            </h1>
            <h2 className="shrink-0 text-white text-4xl xs:text-5xl sm:text-6xl md:text-7xl italic font-light">
              React Three Fiber
            </h2>
            <h2 className="shrink-0 text-white text-5xl xs:text-7xl sm:text-9xl font-bold">
              Three.js
            </h2>
            <h2 className="shrink-0 text-transparent text-5xl xs:text-7xl sm:text-9xl font-bold italic outline-text">
              Quote Book
            </h2>
            <h2 className="shrink-0 text-white text-4xl xs:text-6xl sm:text-8xl font-extralight italic">
              Practice
            </h2>
            <h2 className="shrink-0 text-white text-6xl xs:text-8xl sm:text-10xl font-bold">
              Creative
            </h2>
            <h2 className="shrink-0 text-transparent text-6xl xs:text-8xl sm:text-10xl font-bold italic outline-text">
              Project
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
