import React from "react";

const orderDetails = [
  {
    productName: "Macbook pro 13”",
    category: "Laptop",
    price: "$2399.00",
    status: "Delivered",
    variants: "2",
    productImage: "./images/product/product-01.jpg",
  },
  {
    productName: "Apple Watch Ultra",
    category: "Watch",
    price: "$879.00",
    status: "Pending",
    variants: "1",
    productImage: "./images/product/product-02.jpg",
  },
  {
    productName: "iPhone 15 Pro Max",
    category: "SmartPhone",
    price: "$1869.00",
    status: "Delivered",
    variants: "2",
    productImage: "./images/product/product-03.jpg",
  },
  {
    productName: "iPad Pro 3rd Gen",
    category: "Electronics",
    price: "$1699.00",
    status: "Canceled",
    variants: "2",
    productImage: "./images/product/product-04.jpg",
  },
  {
    productName: " Airpods Pro 2nd Gen",
    category: "Accessories",
    price: "$240.00",
    status: "Delivered",
    variants: "1",
    productImage: "./images/product/product-05.jpg",
  },
];
const TableOne = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Recent Orders
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            <svg
              className="stroke-current fill-white dark:fill-gray-800"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.29004 5.90393H17.7067"
                stroke=""
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.7075 14.0961H2.29085"
                stroke=""
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.0826 3.33331C13.5024 3.33331 14.6534 4.48431 14.6534 5.90414C14.6534 7.32398 13.5024 8.47498 12.0826 8.47498C10.6627 8.47498 9.51172 7.32398 9.51172 5.90415C9.51172 4.48432 10.6627 3.33331 12.0826 3.33331Z"
                fill=""
                stroke=""
                stroke-width="1.5"
              />
              <path
                d="M7.91745 11.525C6.49762 11.525 5.34662 12.676 5.34662 14.0959C5.34661 15.5157 6.49762 16.6667 7.91745 16.6667C9.33728 16.6667 10.4883 15.5157 10.4883 14.0959C10.4883 12.676 9.33728 11.525 7.91745 11.525Z"
                fill=""
                stroke=""
                stroke-width="1.5"
              />
            </svg>
            Filter
          </button>

          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            See all
          </button>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="min-w-full">
          {/* table header start */}
          <thead>
            <tr className="border-gray-100 border-y dark:border-gray-800">
              <th className="py-3">
                <div className="flex items-center">
                  <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                    Products
                  </p>
                </div>
              </th>
              <th className="py-3">
                <div className="flex items-center">
                  <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                    Category
                  </p>
                </div>
              </th>
              <th className="py-3">
                <div className="flex items-center">
                  <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                    Price
                  </p>
                </div>
              </th>
              <th className="py-3">
                <div className="flex items-center col-span-2">
                  <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                    Status
                  </p>
                </div>
              </th>
            </tr>
          </thead>
          {/* table header end */}

          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {orderDetails.map((item, index) => (
              <tr key={index}>
                <td className="py-3">
                  <div className="flex items-center">
                    <div className="flex items-center gap-3">
                      <div className="h-[50px] w-[50px] overflow-hidden rounded-md">
                        <img src={item.productImage} alt="Product" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {item.productName}
                        </p>
                        <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                          {item.variants} Variants
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-3">
                  <div className="flex items-center">
                    <p className="text-gray-500 text-theme-sm dark:text-gray-400">
                      {item.category}
                    </p>
                  </div>
                </td>
                <td className="py-3">
                  <div className="flex items-center">
                    <p className="text-gray-500 text-theme-sm dark:text-gray-400">
                      {item.price}
                    </p>
                  </div>
                </td>
                <td className="py-3">
                  <div className="flex items-center">
                    <p
                      className={
                        item.status === "Delivered"
                          ? "rounded-full bg-success-50 px-2 py-0.5 text-theme-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500"
                          : item.status === "Pending"
                          ? "rounded-full bg-warning-50 px-2 py-0.5 text-theme-xs font-medium text-warning-600 dark:bg-warning-500/15 dark:text-orange-400"
                          : item.status === "Canceled"
                          ? "rounded-full bg-error-50 px-2 py-0.5 text-theme-xs font-medium text-error-600 dark:bg-error-500/15 dark:text-error-500"
                          : "rounded-full bg-gray-50 px-2 py-0.5 text-theme-xs font-medium text-gray-600"
                      }
                    >
                      {item.status}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
            {/* table body end */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableOne;
