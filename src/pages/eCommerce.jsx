import React from "react";
import MetricGroup from "../components/partials/metricGroup";
import ChartOne from "../components/partials/charts/chartOne";
import ChartTwo from "../components/partials/charts/chartTwo";
import ChartThree from "../components/partials/charts/chartThree";
import MapOne from "../components/partials/maps/mapOne";
import TableOne from "../components/partials/tables/tableOne";

const ECommerce = () => {
  return (
    <main>
      <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 space-y-6 xl:col-span-7">
            {/* Metric Group One */}
            <MetricGroup />
            {/* Metric Group One */}

            {/* ====== Chart One Start */}
            <ChartOne />
            {/* ====== Chart One End */}
          </div>
          <div className="col-span-12 xl:col-span-5">
            {/* ====== Chart Two Start */}
            <ChartTwo />
            {/* ====== Chart Two End */}
          </div>

          <div className="col-span-12">
            {/* ====== Chart Three Start */}
            <ChartThree />

            {/* ====== Chart Three End */}
          </div>

          <div className="col-span-12 xl:col-span-5">
            {/* ====== Map One Start */}
            <MapOne />
            {/* ====== Map One End */}
          </div>

          <div className="col-span-12 xl:col-span-7">
            {/* ====== Table One Start */}
             <TableOne />
            {/* ====== Table One End */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ECommerce;
