function Sidebar() {
  return (
    //handle button
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100">
          <a
            href="https://necc.di.uminho.pt/"
            className="flex items-center pl-2.5 mb-5"
          >
            <img
              //necc logo from public/logos
              src="/logos/necc-blue.svg"
              className="h-6 mr-3 sm:h-7"
              alt="Necc Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              NECChange
            </span>
          </a>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 "
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g data-name="Layer 2">
                      {" "}
                      <g data-name="file-add">
                        {" "}
                        <rect width="24" height="24" opacity="0"></rect>{" "}
                        <path d="M19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67zM14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2zm.71-7a.79.79 0 0 1-.71-.85V4l3.74 4z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <span className="ml-3">Upload</span>
              </a>
            </li>

            <li>
              <a
                href="/schedule"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M19,4h-1V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H8V3c0-0.6-0.4-1-1-1S6,2.4,6,3v1H5C3.3,4,2,5.3,2,7v1h20V7C22,5.3,20.7,4,19,4z M2,19c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-9H2V19z M17,12c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S16.4,12,17,12z M17,16c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S16.4,16,17,16z M12,12c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S11.4,12,12,12z M12,16c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S11.4,16,12,16z M7,12c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S6.4,12,7,12z M7,16c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S6.4,16,7,16z"></path>
                  </g>
                </svg>
                <span className="ml-3">Schedule</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
