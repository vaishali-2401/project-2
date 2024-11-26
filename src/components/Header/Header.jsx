import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Header() {
  const authStatus = useSelector((state) => state.auth.status);

  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },

    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },

    {
      name: "Sign-Up",
      slug: "/signup",
      active: !authStatus,
    },

    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },

    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-2 shadow bg-[#1A1E22]">
      <Container>
        <nav className="flex bg-[#1A1E22]">
          <div className="mr-4 flex">
            <h1 className="px-2 text-4xl py-1 text-white"> BlogIt</h1>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li className="text-white text-2xl" key={item.name}>
                  <button
                    onClick={() => {
                      navigate(item.slug);
                    }}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-black rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className="text-white text-2xl">
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
