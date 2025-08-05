import React, { useEffect, useRef, useState } from "react";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/jsvectormap.min.css";
import "jsvectormap/dist/maps/world.js";



const MapOne = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;
  
    // Clear any existing content (just in case)
    mapRef.current.innerHTML = "";
  
    const map = new jsVectorMap({
      selector: mapRef.current, // ✅ Only this is needed
      map: "world",
      zoomButtons: false,
  
      regionStyle: {
        initial: {
          fontFamily: "Outfit",
          fill: "#D9D9D9",
        },
        hover: {
          fillOpacity: 1,
          fill: "#465fff",
        },
      },
      markers: [
        { name: "Egypt", coords: [26.8206, 30.8025] },
        { name: "United Kingdom", coords: [55.3781, 3.436] },
        { name: "United States", coords: [37.0902, -95.7129] },
      ],
      markerStyle: {
        initial: {
          strokeWidth: 1,
          fill: "#465fff",
          fillOpacity: 1,
          r: 4,
        },
        hover: {
          fill: "#465fff",
          fillOpacity: 1,
        },
      },
      onRegionTooltipShow: (tooltip, code) => {
        if (code === "EG") {
          tooltip.selector.innerHTML = tooltip.text() + " <b>(Hello Russia)</b>";
        }
      },
    });
  
    return () => {
      map.destroy();
      if (mapRef.current) {
        mapRef.current.innerHTML = "";
      }
    };
  }, []);
  

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
      {/* Header */}
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Customers Demographic
          </h3>
          <p className="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
            Number of customer based on country
          </p>
        </div>

        {/* Dropdown Button */}
        <div className="relative h-fit">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`${
              dropdownOpen
                ? "text-gray-700 dark:text-white"
                : "text-gray-400 hover:text-gray-700 dark:hover:text-white"
            }`}
          >
            <svg
              className="fill-current"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.2441 6C10.2441 5.0335 11.0276 4.25 11.9941 4.25H12.0041C12.9706 4.25 13.7541 5.0335 13.7541 6C13.7541 6.9665 12.9706 7.75 12.0041 7.75H11.9941C11.0276 7.75 10.2441 6.9665 10.2441 6ZM10.2441 18C10.2441 17.0335 11.0276 16.25 11.9941 16.25H12.0041C12.9706 16.25 13.7541 17.0335 13.7541 18C13.7541 18.9665 12.9706 19.75 12.0041 19.75H11.9941C11.0276 19.75 10.2441 18.9665 10.2441 18ZM11.9941 10.25C11.0276 10.25 10.2441 11.0335 10.2441 12C10.2441 12.9665 11.0276 13.75 11.9941 13.75H12.0041C12.9706 13.75 13.7541 12.9665 13.7541 12C13.7541 11.0335 12.9706 10.25 12.0041 10.25H11.9941Z"
              />
            </svg>
          </button>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 top-full z-40 w-40 space-y-1 rounded-2xl border border-gray-200 bg-white p-2 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark">
              <button className="flex w-full rounded-lg px-3 py-2 text-left text-theme-xs font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300">
                View More
              </button>
              <button className="flex w-full rounded-lg px-3 py-2 text-left text-theme-xs font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300">
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Map */}
      <div className="border-gary-200 my-6 overflow-hidden rounded-2xl border bg-gray-50 px-4 py-6 dark:border-gray-800 dark:bg-gray-900 sm:px-6">
        <div
          id="mapOne"
          ref={mapRef}
          className="mapOne map-btn -mx-4 -my-6 h-[212px] w-[252px] 2xsm:w-[307px] xsm:w-[358px] sm:-mx-6 md:w-[668px] lg:w-[634px] xl:w-[393px] 2xl:w-[554px]"
        ></div>
      </div>

      {/* Country Stats */}
      <div className="space-y-5">
        {/* USA */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              className="w-8 h-8"
              src="./images/country/country-01.svg"
              alt="usa"
            />
            <div>
              <p className="text-theme-sm font-semibold text-gray-800 dark:text-white/90">
                USA
              </p>
              <span className="block text-theme-xs text-gray-500 dark:text-gray-400">
                2,379 Customers
              </span>
            </div>
          </div>
          <div className="flex w-full max-w-[140px] items-center gap-3">
            <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
              <div className="absolute left-0 top-0 h-full w-[79%] rounded-sm bg-brand-500 text-xs font-medium text-white"></div>
            </div>
            <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
              79%
            </p>
          </div>
        </div>

        {/* France */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              className="w-8 h-8"
              src="./images/country/country-02.svg"
              alt="france"
            />
            <div>
              <p className="text-theme-sm font-semibold text-gray-800 dark:text-white/90">
                France
              </p>
              <span className="block text-theme-xs text-gray-500 dark:text-gray-400">
                589 Customers
              </span>
            </div>
          </div>
          <div className="flex w-full max-w-[140px] items-center gap-3">
            <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
              <div className="absolute left-0 top-0 h-full w-[23%] rounded-sm bg-brand-500 text-xs font-medium text-white"></div>
            </div>
            <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
              23%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapOne;
