// src/Components/MobileNav.jsx
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/authcontext";
import useGetSingleUser from "../Hooks/useGetSingleUser";

export default function MobileNav() {
  const { user: authUser } = useContext(AuthContext);
  const { user: dbUser } = useGetSingleUser(authUser?.email);
  const location = useLocation();

  const links = [
    {
      to: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      to: "/notifications",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      ),
    },
    {
      to: "/create-posts",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      ),
    },
    {
      to: `/profile/${dbUser?.email}`,
      icon: dbUser?.profilePic ? (
        <img
          src={dbUser.profilePic}
          alt="Profile"
          className="h-7 w-7 rounded-full object-cover"
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2m14 0v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2m14 0H5"
          />
        </svg>
      ),
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md md:hidden z-50">
      <ul className="flex justify-around items-center py-2">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link
              to={link.to}
              className={`flex flex-col items-center ${
                location.pathname === link.to
                  ? "text-blue-600"
                  : "text-gray-700"
              }`}
            >
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
