import React, { useState } from "react";

const notificationData = [
  {
    userImage: "./images/user/user-02.jpg",
    userName: "Terry Franci",
    desription: "requests permission to change",
    projectName: " Project - Nganter App",
    notificationTag: "Project",
    notificationTime: "5 min ago",
    onlineStatus:true
  },
  {
    userImage: "./images/user/user-03.jpg",
    userName: "Alena Franci",
    desription: "requests permission to change",
    projectName: " Project - Nganter App",
    notificationTag: "Project",
    notificationTime: "5 min ago",
    onlineStatus:true
  },
  {
    userImage: "./images/user/user-04.jpg",
    userName: "Jocelyn Kenter",
    desription: "requests permission to change",
    projectName: " Project - Nganter App",
    notificationTag: "Project",
    notificationTime: "15 min ago",
    onlineStatus:false
  },
  {
    userImage: "./images/user/user-05.jpg",
    userName: "Brandon Philips",
    desription: "requests permission to change",
    projectName: " Project - Nganter App",
    notificationTag: "Project",
    notificationTime: "1 hr ago",
    onlineStatus:true
  },
  {
    userImage: "./images/user/user-06.jpg",
    userName: "Terry Franci",
    desription: "requests permission to change",
    projectName: " Project - Nganter App",
    notificationTag: "Project",
    notificationTime: "5 min ago",
    onlineStatus:false
  },
  {
    userImage: "./images/user/user-02.jpg",
    userName: "Terry Franci",
    desription: "requests permission to change",
    projectName: " Project - Nganter App",
    notificationTag: "Project",
    notificationTime: "8 min ago",
    onlineStatus:true
  },
  {
    userImage: "./images/user/user-08.jpg",
    userName: "Alena Franci",
    desription: "requests permission to change",
    projectName: " Project - Nganter App",
    notificationTag: "Project",
    notificationTime: "5 min ago",
    onlineStatus:true
  },
  {
    userImage: "./images/user/user-09.jpg",
    userName: "Jocelyn Kenter",
    desription: "requests permission to change",
    projectName: " Project - Nganter App",
    notificationTag: "Project",
    notificationTime: "15 min ago",
    onlineStatus:false
  },
];

const Notifications = () => {
   const [notificationBtn , setNotificationBtn] = useState(false);

  return (
    <div className="relative">
      <button onClick={()=> setNotificationBtn(!notificationBtn)} className="hover:text-dark-900 relative flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
        <span className="absolute top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-orange-400">
          <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
        </span>
        <svg
          className="fill-current"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.75 2.29248C10.75 1.87827 10.4143 1.54248 10 1.54248C9.58583 1.54248 9.25004 1.87827 9.25004 2.29248V2.83613C6.08266 3.20733 3.62504 5.9004 3.62504 9.16748V14.4591H3.33337C2.91916 14.4591 2.58337 14.7949 2.58337 15.2091C2.58337 15.6234 2.91916 15.9591 3.33337 15.9591H4.37504H15.625H16.6667C17.0809 15.9591 17.4167 15.6234 17.4167 15.2091C17.4167 14.7949 17.0809 14.4591 16.6667 14.4591H16.375V9.16748C16.375 5.9004 13.9174 3.20733 10.75 2.83613V2.29248ZM14.875 14.4591V9.16748C14.875 6.47509 12.6924 4.29248 10 4.29248C7.30765 4.29248 5.12504 6.47509 5.12504 9.16748V14.4591H14.875ZM8.00004 17.7085C8.00004 18.1228 8.33583 18.4585 8.75004 18.4585H11.25C11.6643 18.4585 12 18.1228 12 17.7085C12 17.2943 11.6643 16.9585 11.25 16.9585H8.75004C8.33583 16.9585 8.00004 17.2943 8.00004 17.7085Z"
            fill=""
          />
        </svg>
      </button>

      {/* Dropdown Start */} 
      <div 
        className={`${notificationBtn ? 'flex' : 'hidden'} shadow-theme-lg dark:bg-gray-dark absolute -right-[240px] mt-[17px] h-[480px] w-[350px] flex-col rounded-2xl border border-gray-200 bg-white p-3 sm:w-[361px] lg:right-0 dark:border-gray-800`}
      >
        <div className="mb-3 flex items-center justify-between border-b border-gray-100 pb-3 dark:border-gray-800">
          <h5 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Notification
          </h5>

          <button onClick={()=> setNotificationBtn(!notificationBtn)}   className="text-gray-500 dark:text-gray-400">
            <svg
              className="fill-current"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z"
                fill=""
              />
            </svg>
          </button>
        </div>

        <ul className="custom-scrollbar flex h-auto flex-col overflow-y-auto">
          {notificationData.map((data, index) => (
            <li key={index}>
              <a
                className="flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"
                href="#"
              >
                <span className="relative z-1 block h-10 w-full max-w-10 rounded-full">
                  <img
                    src={data.userImage}
                    alt="User"
                    className="overflow-hidden rounded-full"
                  />
                  <span className={`${data.onlineStatus ? 'bg-success-500' : 'bg-error-500'} absolute right-0 bottom-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white dark:border-gray-900`}></span>
                </span>

                <span className="block">
                  <span className="text-theme-sm mb-1.5 block text-gray-500 dark:text-gray-400">
                    <span className="font-medium text-gray-800 dark:text-white/90">
                      {data.userName}
                    </span>
                    {data.desription}
                    <span className="font-medium text-gray-800 dark:text-white/90">
                      {data.projectName}
                    </span>
                  </span>

                  <span className="text-theme-xs flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <span>{data.notificationTag}</span>
                    <span className="h-1 w-1 rounded-full bg-gray-400"></span>
                    <span>{data.notificationTime}</span>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="text-theme-sm shadow-theme-xs mt-3 flex justify-center rounded-lg border border-gray-300 bg-white p-3 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
        >
          View All Notification
        </a>
      </div>
      {/* Dropdown End */}
    </div>
  );
};

export default Notifications;
