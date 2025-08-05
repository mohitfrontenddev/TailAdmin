import React, { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const ChartThree = () => {
  const datepickerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("overview");

  function tabberToggleBtn() {
    setTabberToggle(!tabberToggle);
  }
  // ========== Chart Init ==========
  useEffect(() => {
    const chartOptions = {
      series: [
        {
          name: "Sales",
          data: [180, 190, 170, 160, 175, 165, 170, 205, 230, 210, 240, 235],
        },
        {
          name: "Revenue",
          data: [40, 30, 50, 40, 55, 40, 70, 100, 110, 120, 150, 140],
        },
      ],
      colors: ["#465FFF", "#9CB9FF"],
      chart: {
        fontFamily: "Outfit, sans-serif",
        height: 310,
        type: "area",
        toolbar: { show: false },
      },
      fill: {
        gradient: {
          enabled: true,
          opacityFrom: 0.55,
          opacityTo: 0,
        },
      },
      stroke: {
        curve: "straight",
        width: ["2", "2"],
      },
      legend: { show: false },
      markers: { size: 0 },
      grid: {
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: true } },
      },
      dataLabels: { enabled: false },
      tooltip: {
        x: { format: "dd MMM yyyy" },
      },
      xaxis: {
        type: "category",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        axisBorder: { show: false },
        axisTicks: { show: false },
        tooltip: { enabled: false },
      },
      yaxis: {
        title: {
          style: { fontSize: "0px" },
        },
      },
    };

    const chart = new ApexCharts(
      document.querySelector("#chartThree"),
      chartOptions
    );
    chart.render();

    return () => chart.destroy();
  }, []);

  // ========== Datepicker Init ==========
  useEffect(() => {
    if (datepickerRef.current) {
      flatpickr(datepickerRef.current, {
        mode: "range",
        static: true,
        dateFormat: "M j, Y",
        defaultDate: [new Date().setDate(new Date().getDate() - 6), new Date()],
        monthSelectorType: "static",
        prevArrow:
          '<svg class="stroke-current" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15.25 6L9 12.25L15.25 18.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        nextArrow:
          '<svg class="stroke-current" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.75 19L15 12.75L8.75 6.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        onReady: (selectedDates, dateStr, instance) => {
          instance.element.value = dateStr.replace("to", "-");
        },
        onChange: (selectedDates, dateStr, instance) => {
          instance.element.value = dateStr.replace("to", "-");
        },
      });
    }
  }, []);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
        {/* Header */}
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Statistics
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Target you’ve set for each month
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-start w-full gap-3 sm:justify-end">
          <div className="inline-flex w-fit items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900">
            <button
              onClick={() => setActiveTab("overview")}
              className={`${
                activeTab === "overview"
                  ? "shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800"
                  : "text-gray-500 dark:text-gray-400"
              } px-3 py-2 font-medium rounded-md text-theme-sm hover:text-gray-900 dark:hover:text-white`}
            >
              Overview
            </button>

            <button
              onClick={() => setActiveTab("sales")}
              className={`${
                activeTab === "sales"
                  ? "shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800"
                  : "text-gray-500 dark:text-gray-400"
              } px-3 py-2 font-medium rounded-md text-theme-sm hover:text-gray-900 dark:hover:text-white`}
            >
              Sales
            </button>

            <button
              onClick={() => setActiveTab("revenue")}
              className={`${
                activeTab === "revenue"
                  ? "shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800"
                  : "text-gray-500 dark:text-gray-400"
              } px-3 py-2 font-medium rounded-md text-theme-sm hover:text-gray-900 dark:hover:text-white`}
            >
              Revenue
            </button>
          </div>

          {/* Datepicker */}
          <div className="relative w-fit">
            <input
              ref={datepickerRef}
              className="datepicker h-10 rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
              placeholder="Select dates"
              readOnly
            />
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <svg
                className="fill-gray-700 dark:fill-gray-400"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.66683 1.54199C7.08104 1.54199 7.41683 1.87778 7.41683 2.29199V3.00033H12.5835V2.29199C12.5835 1.87778 12.9193 1.54199 13.3335 1.54199C13.7477 1.54199 14.0835 1.87778 14.0835 2.29199V3.00033L15.4168 3.00033C16.5214 3.00033 17.4168 3.89576 17.4168 5.00033V15.8337C17.4168 16.9382 16.5214 17.8337 15.4168 17.8337H4.5835C3.47893 17.8337 2.5835 16.9382 2.5835 15.8337V5.00033C2.5835 3.89576 3.47893 3.00033 4.5835 3.00033L5.91683 3.00033V2.29199C5.91683 1.87778 6.25262 1.54199 6.66683 1.54199ZM6.66683 4.50033H4.5835C4.30735 4.50033 4.0835 4.72418 4.0835 5.00033V6.75033H15.9168V5.00033C15.9168 4.72418 15.693 4.50033 15.4168 4.50033H6.66683ZM15.9168 8.25033H4.0835V15.8337C4.0835 16.1098 4.30735 16.3337 4.5835 16.3337H15.4168C15.693 16.3337 15.9168 16.1098 15.9168 15.8337V8.25033Z"
                  fill=""
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Container */}
      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div id="chartThree" className="-ml-4 min-w-[700px] pl-2"></div>
      </div>
    </div>
  );
};

export default ChartThree;
