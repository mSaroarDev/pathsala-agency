import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="px-5 lg:px-10 fixed top-0 w-full z-50 bg-[#FFF8FE]">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-ador-noirrit-semibold text-[18px]"
            >
              <li>
                <Link to="/">হোমপেজ</Link>
              </li>
              <li>
                <Link to="/about">আমাদের সম্পর্কে</Link>
              </li>
              {/* <li>
                <a>সার্ভিস সমূহ</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li> */}
              <li>
                <Link to="/packages">প্যাকেজ সমূহ</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="font-ador-noirrit-bold text-[24px]">
            <img src="/logo.png" alt="পাঠশালা" className="w-[110px]" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-ador-noirrit-semibold text-[18px]">
            <li>
              <Link to="/">হোমপেজ</Link>
            </li>
            <li>
              <Link to="/about">আমাদের সম্পর্কে</Link>
            </li>
            {/* <li>
              <details>
                <summary>সার্ভিস সমূহ</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
            <li>
              <Link to="/packages">প্যাকেজ সমূহ</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end font-ador-noirrit-semibold">
          <a className="hidden lg:block button-main text-[18px]">
            +৮৮০১৭ ৯৮ ৪৫৬ ৩৮০
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
