import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import firebaseDb from "../Config/firebase-config";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";

const Navbar =  () => {
  const [navbarListData, setNavbarListData] = useState([]);
  const [loading , setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    const q = query(collection(firebaseDb, "navbarlist"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const navbarList = [];
      querySnapshot.forEach((doc) => {
        navbarList.push(doc.data());
      });
      setNavbarListData(navbarList);
    });
    setLoading(false)
  }, []);
  console.log("The daata is :", navbarListData);

  const NavbarList = navbarListData.map((get, keys) => {
    if (get.id == "iggBfOQHyMLI4dUjErrO") {
      return (
        <>
          <li className="nav-item dropdown" key={keys}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {get.title}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {/* {mySkill.map((get, keys) => {
                return (
                  <li key={keys}>
                    <NavLink to="/about_me">
                    <p className="dropdown-item">
                      <span className="span-span">
                        <i class="fa-solid fa-feather-pointed"></i>
                      </span>
                      {get.skill}
                    </p>
                    </NavLink>
                  </li>
                );
              })} */}
                <Link to={'/lists'}>
                    <p className="dropdown-item">
                      <span className="span-span">
                        <i class="fa-solid fa-feather-pointed"></i>
                      </span>
                  List Details
                    </p>
                    </Link>
            </ul>
          </li>
        </>
      );
    } else if (get.id == "pIdSsD6ttjRmUEror0WG") {
      return (
        <>
          <li className="nav-item dropdown" key={keys}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {get.title}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {/* {myService.map((get, keys) => {
                return (
                  <li key={keys}>
                    <NavLink to="my_services">
                    <p className="dropdown-item-1">
                      <span className="span-span">
                        <i class="fa-solid fa-feather-pointed"></i>
                      </span>
                      {get.title}
                    </p>
                    </NavLink>
                    <NavLink to="my_services"><p className="dropdown-sub-list">{get.description_title}</p></NavLink>
                  </li>
                );
              })} */}
                <p className="dropdown-item-1">
                      <span className="span-span">
                        <i class="fa-solid fa-feather-pointed"></i>
                      </span>
                      Travel Next Page
                    </p>
            </ul>
          </li>
        </>
      );
    } else {
      return (
        <li className="nav-item" key={keys}>
          {get.id == "xPwKVdqZZItimdIOvifP" ? (
            <NavLink className="nav-link" to="/contactus">{get.title}</NavLink>
          ) : get.id== "pY8v9F1wYurlsiBVhHcH" && (
            <NavLink className="nav-link" to="/">{get.title}</NavLink>
          )}
        </li>
      
      );
    }
  });

  return (
    <>
   
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={'/'}>
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse main-nav me-auto" id="navbarNav">
            {/* <ul className="navbar-nav">
              {navbarListData?.map((event) => {
                return (
                  <>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        {event.title}
                      </a>
                    </li>
                  </>
                );
              })}
            </ul> */}
              {loading ? <p>Loading  .....</p> : NavbarList}





            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
