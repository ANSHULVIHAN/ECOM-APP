import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import styled from "styled-components";
import { FaShoppingCart, FaUserCircle, } from "react-icons/fa";
import { CgMenu, CgClose } from "react-icons/cg";
import { auth } from "../../firebase/config";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "../../Redux/slice/authSlice";
import ShowOnLogin, { ShowOnLogout } from "../hiddenLink/hiddenLink";

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        E<span>Shop</span>.
      </h2>
    </Link>
  </div>
);


function Header() {

  const [menuIcon, setMenuIcon] = useState();

  const [displayName, setdisplayName] = useState("");


  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const uid = user.uid;
        console.log(user.displayName);

        if (user.displayName == null) {

          const ul = user.email.slice(0, -10);
          const uName=ul.charAt(0).toUpperCase()+
          ul.slice(1)
          console.log(uName);
          setdisplayName(uName)
        } else{

          setdisplayName(user.displayName)
        }



        setdisplayName(user.displayName);


        dispatch(SET_ACTIVE_USER({
          email: "user.email",
          userName: user.displayName ? user.displayName 
          :displayName ,
          userID: "user.uid",
        }))
      } else {
        setdisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });

  }, []);



  const logoutUser = () => {
    signOut(auth).then(() => {
      toast.success("Logout sucessfully")
      navigate("/")
    }).catch((error) => {
      toast.error(error.message)
    });

  };


  const Nav = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }
    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }
    .close-outline {
      display: none;
    }
    .cart-trolley--link {
      position: relative;
      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }
      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
      }
    }
    .user-login--name {
      text-transform: capitalize;
    }
    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};
        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }
      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }
      .active .close-outline {
        display: inline-block;
      }
      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }
      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;
        .navbar-link {
          font-size: 4.2rem;
        }
      }
      .cart-trolley--link {
        position: relative;
        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }
        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }
      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `;



  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          {logo}


          <Link to='/' onClick={() => setMenuIcon(false)} >
            Home
          </Link>

          <Link to='/Contact'>
            Contact
          </Link>






          <Link to='/Products' onClick={() => setMenuIcon(false)} >
            MyProduct
          </Link>
          



       <ShowOnLogout>
          <Link to='/login' onClick={() => setMenuIcon(false)} >
            Login
          </Link>
          </ShowOnLogout>


          <ShowOnLogin>
          <a href="#home">
            <FaUserCircle size={16} />
            Hi,{displayName}
          </a>
          </ShowOnLogin>

          
          <ShowOnLogin>

          <Link to='/' onClick={logoutUser}>
            Logout
          </Link>
          </ShowOnLogin>

          <Link to='/Cart' onClick={() => setMenuIcon(false)}>
            Cart
            <FaShoppingCart />
          </Link>

        </ul>





        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>

      </div>
    </Nav>
  );
};
export default Header;


























