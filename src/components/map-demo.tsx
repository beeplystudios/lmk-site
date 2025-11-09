import WorldMap from "@/components/ui/world-map";

export function WorldMapDemo() {
  return (
    <div className="bg-white w-full relative">
      <div className="flex flex-col items-center justfiy-center bg-linear-to-bl from-white/30 to-white/40 h-screen absolute z-10 w-full rounded-b-xl">
        <div className="p-6 flex justify-center flex-col items-center gap-1 h-full">
          <div className="flex gap-4 items-start md:items-center flex-col md:flex-row">
            <svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="128" height="128" rx="8" fill="black" />
              <path
                d="M40.1041 80H17.1991C16.6291 80 16.2091 79.88 15.9391 79.64C15.6991 79.37 15.5791 78.95 15.5791 78.38V49.22C15.5791 48.65 15.6991 48.245 15.9391 48.005C16.2091 47.735 16.6291 47.6 17.1991 47.6H24.1741C24.7441 47.6 25.1491 47.735 25.3891 48.005C25.6591 48.245 25.7941 48.65 25.7941 49.22V71.495H31.9591V64.205C31.9591 63.635 32.0791 63.23 32.3191 62.99C32.5891 62.72 33.0091 62.585 33.5791 62.585H40.1041C40.6741 62.585 41.0791 62.72 41.3191 62.99C41.5891 63.23 41.7241 63.635 41.7241 64.205V78.38C41.7241 78.95 41.5891 79.37 41.3191 79.64C41.0791 79.88 40.6741 80 40.1041 80ZM55.1932 80H48.4882C47.9182 80 47.4982 79.88 47.2282 79.64C46.9882 79.37 46.8682 78.95 46.8682 78.38V49.22C46.8682 48.65 46.9882 48.245 47.2282 48.005C47.4982 47.735 47.9182 47.6 48.4882 47.6H55.7332C56.2132 47.6 56.6032 47.705 56.9032 47.915C57.2332 48.125 57.5332 48.47 57.8032 48.95L61.8532 56.285C62.0032 56.555 62.1232 56.75 62.2132 56.87C62.3332 56.99 62.4832 57.05 62.6632 57.05H63.0682C63.2482 57.05 63.3832 56.99 63.4732 56.87C63.5932 56.75 63.7282 56.555 63.8782 56.285L67.8832 48.95C68.1532 48.47 68.4382 48.125 68.7382 47.915C69.0682 47.705 69.4732 47.6 69.9532 47.6H77.2432C77.8132 47.6 78.2182 47.735 78.4582 48.005C78.7282 48.245 78.8632 48.65 78.8632 49.22V78.38C78.8632 78.95 78.7282 79.37 78.4582 79.64C78.2182 79.88 77.8132 80 77.2432 80H70.3132C69.7432 80 69.3232 79.88 69.0532 79.64C68.8132 79.37 68.6932 78.95 68.6932 78.38V62.54L66.0382 67.445C65.7682 67.955 65.4382 68.33 65.0482 68.57C64.6882 68.78 64.2232 68.885 63.6532 68.885H61.8532C61.2832 68.885 60.8032 68.78 60.4132 68.57C60.0532 68.33 59.7382 67.955 59.4682 67.445L56.8132 62.54V78.38C56.8132 78.95 56.6782 79.37 56.4082 79.64C56.1682 79.88 55.7632 80 55.1932 80ZM93.6517 80H86.6767C86.1067 80 85.6867 79.88 85.4167 79.64C85.1767 79.37 85.0567 78.95 85.0567 78.38V49.22C85.0567 48.65 85.1767 48.245 85.4167 48.005C85.6867 47.735 86.1067 47.6 86.6767 47.6H93.6517C94.2217 47.6 94.6267 47.735 94.8667 48.005C95.1367 48.245 95.2717 48.65 95.2717 49.22V59.57H97.0717L101.707 49.085C101.917 48.545 102.202 48.17 102.562 47.96C102.922 47.72 103.387 47.6 103.957 47.6H110.887C111.397 47.6 111.742 47.735 111.922 48.005C112.102 48.245 112.087 48.605 111.877 49.085L107.287 59.57C108.967 59.66 110.302 60.26 111.292 61.37C112.312 62.45 112.822 63.89 112.822 65.69V78.38C112.822 78.95 112.687 79.37 112.417 79.64C112.177 79.88 111.772 80 111.202 80H104.272C103.702 80 103.282 79.88 103.012 79.64C102.772 79.37 102.652 78.95 102.652 78.38V69.605C102.652 69.125 102.532 68.75 102.292 68.48C102.052 68.21 101.692 68.075 101.212 68.075H95.2717V78.38C95.2717 78.95 95.1367 79.37 94.8667 79.64C94.6267 79.88 94.2217 80 93.6517 80Z"
                fill="white"
              />
            </svg>

            <div className="max-w-7xl mx-auto flex flex-col items-start">
              <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
                Let Me Know!
              </p>
              <p className="text-sm md:text-lg text-neutral-500 max-w-2xl text-left">
                Dive into personalized updates without the noise. Subscribe to
                the topics that truly matter to you, and share stories through
                "cliques" to keep your crew in sync.
              </p>
            </div>
          </div>
          <div className="flex gap-4 my-4 items-center bg-white/30 backdrop-blur-sm p-4 border-[0.0125rem] rounded-2xl">
            <button className="bg-black w-fit shadow-xs border-[0.0125rem] text-white px-4 py-2 rounded-full text-sm font-medium flex items- gap-2 active:scale-95">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/1022px-Android_robot.svg.png?20180121030125"
                alt=""
                className="size-6"
              />
              Download for Android
            </button>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=beeplystudios&repo=lmk&type=star&count=true&size=large"
              frameBorder="0"
              scrolling="0"
              width="170"
              height="30"
              title="GitHub"
            ></iframe>
          </div>
          <div className="text-black">
            <p className="font-semibold text-sm">A Beeply Studios Product</p>
            <p className="text-xs text-zinc-500">
              {
                "Created with <3 by Nirjhor Nath, Aramie Ewen, Santiago Vira, and Gilbert Zhang"
              }
            </p>
          </div>
        </div>
      </div>

      <WorldMap
        dots={[
          {
            start: { lat: 40.914854, lng: -73.136868 }, // Stony Brook, NY :contentReference[oaicite:0]{index=0}
            end: { lat: 40.925654, lng: -73.140943 }, // Stony Brook, NY :contentReference[oaicite:0]{index=0}
          },
          {
            // start: { lat: 40.7128, lng: -74.006 }, // New York City
            start: { lat: 40.925654, lng: -73.140943 }, // Stony Brook, NY :contentReference[oaicite:0]{index=0}

            end: { lat: 25.761681, lng: -80.191788 }, // Miami, FL :contentReference[oaicite:1]{index=1}
          },
          {
            start: { lat: 25.761681, lng: -80.191788 }, // Miami, FL
            end: { lat: 37.773972, lng: -122.431297 }, // San Francisco, CA :contentReference[oaicite:2]{index=2}
          },
          {
            start: { lat: 37.773972, lng: -122.431297 }, // San Francisco, CA
            end: { lat: 23.810331, lng: 90.412521 }, // Dhaka, Bangladesh :contentReference[oaicite:3]{index=3}
          },
          {
            start: { lat: 23.810331, lng: 90.412521 }, // Dhaka, Bangladesh
            end: { lat: 19.07609, lng: 72.877426 }, // Mumbai (Bombay), India :contentReference[oaicite:4]{index=4}
          },
          {
            start: { lat: 19.07609, lng: 72.877426 }, // Mumbai, India
            end: { lat: -33.86882, lng: 151.20929 }, // Sydney, Australia
          },
          {
            start: { lat: -33.86882, lng: 151.20929 }, // Sydney, Australia
            end: { lat: 55.676098, lng: 12.568337 }, // Copenhagen, Denmark :contentReference[oaicite:5]{index=5}
          },
        ]}
      />
    </div>
  );
}
