import { Link } from "react-router-dom";

function Leftbar() {
  return (
    <div className="w-60 xl:w-60 lg:w-48 md:w-44">
      <div className="my-5">
        <div className="card bg-base-100 w-auto shadow-xl">
          <figure className="pt-5">
            <div className="avatar">
              <div className="w-24 mask mask-squircle">
                <img
                  src="https://api.lorem.space/image/face?hash=47449"
                  alt="avatar"
                />
              </div>
            </div>
          </figure>

          <div className="card-body pt-2 pb-0 items-center text-center">
            <h2 className="card-title md:text-sm">Çağlar Karahüseyin</h2>
          </div>
          <ul className="menu bg-base-100 w-auto p-2 rounded-box">
            <li>
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:w-4 md:h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Profil Sayfası
              </Link>
            </li>
            <li>
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:w-4 md:h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Siparişler
              </Link>
            </li>
            <li>
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:w-4 md:h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Ayarlar
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="shadow-xl">
        <ul className=" menu bg-base-100 rounded-btn border-y-4 border-y-amber-500">
          <li>
            <Link to="/">Item 1</Link>
          </li>
          <li className="bordered">
            <Link to="/">I have border</Link>
          </li>
          <li>
            <Link to="/">Item 3</Link>
          </li>
          <li>
            <Link to="/">Item 3</Link>
          </li>
          <li>
            <Link to="/">Item 3</Link>
          </li>
          <li>
            <Link to="/">Item 3</Link>
          </li>
          <li>
            <Link to="/">Item 3</Link>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
}

export default Leftbar;
