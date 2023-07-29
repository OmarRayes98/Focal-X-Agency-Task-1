import "./Navbar.css";
import { useCallback, useState } from "react";
import {NavLinksData} from './NavLinksData';

import { ReactComponent as Signal } from '../../assets/icons/signal-solid.svg';
import { ReactComponent as ArrowDown } from '../../assets/icons/arrow-down-s-line.svg';
import { ReactComponent as MenuLine } from '../../assets/icons/menu-line.svg';
import { ReactComponent as CloseLine } from '../../assets/icons/close-line.svg';
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle3, setToggle3] = useState(null);

  //change color when scroll 
  const [color , setColor] = useState(false);

  const changeColor = ()=>{

    if(window.scrollY >= 90){
      setColor(true);

    }else{
      setColor(false);
    }
  }

  window.addEventListener("scroll",changeColor);



  const handleToggle = (id) => {
    if (toggle3 === id) {
      setToggle3(null);
    } else {
      setToggle3(id);
    }
  };

  const handleburger =  useCallback( () => {
    setToggle3(null);
    setToggle(toggle => !toggle);
  
  },[]);

  return (
    <header className={color ? "header header-bg" :"header"}>
      <nav className="nav container">
        <div className="nav__data">
          <div className="nav__logo">
            <Signal/>
            <h3>Starter</h3>
          </div>

          <div
            className={toggle === true ? "nav__toggle show-icon" : "nav__toggle "}
          
            id="nav-toggle"
            onClick={() => {
              handleburger();
            }}
          >
            <MenuLine className="nav__burger" style={color ? {fill:'var(--maincolor)'}: {}}/>
            <CloseLine className="nav__close" style={color ? {fill:'var(--maincolor)'}: {}}/>
          </div>
        </div>

        {/* <!--=============== NAV MENU ===============--> */}
        <div
          className={toggle === true ? "nav__menu show-menu " : "nav__menu "}
          id="nav-menu"
        >
          <ul className="nav__list">
            {NavLinksData.map((el)=>{
              if(!el.children){
                return(
              <li
              key={el.id}
              onClick={() => {
                handleburger();
              }}
            >
              <a href="#/" className={color ? "nav___link_change nav___link_change_color " : "nav__link nav__link_color"} >
                {el.name}
              </a>
            </li>
                );
              }

              return(
                <li
                key={el.id}
                onClick={() => {
                  handleToggle(el.id);
                }}
                className={
                  toggle3 === el.id
                    ? "dropdown__item active-toggle"
                    : "dropdown__item"
                }
              >
                <div className={color ? "nav___link_change nav___link_change_color " : "nav__link nav__link_color"}>
                  {el.name}
                  <ArrowDown className="dropdown__arrow"/>
                </div>

              {/* <!--=============== DROPDOWN  ===============--> */}
              <Dropdown el={el} handleburger={handleburger} />
              </li>
              )
            })
            }
            
            <li className="nav__list_lan nav-third-hide">
              <a href="https://github.com/OmarRayes98?tab=repositories" className={color ? "nav___link_change nav___link_change_color " : "nav__link nav__link_color"}>
                Github
              </a>
            </li>

            <li className="nav__list_lan nav-third-hide">
              <a href="https://www.linkedin.com/in/omar-rayes-594b6b272/" className={color ? "nav___link_change nav___link_change_color " : "nav__link nav__link_color"}>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* <!--===============End NAV MENU ===============--> */}

        <div className="nav-third-show" >
          <ul className="nav__list">
            
            <li className="nav__list_lan">
              <a href="https://github.com/OmarRayes98?tab=repositories" className={color ? "nav___link_change nav___link_change_color " : "nav__link nav__link_color"}>
                Github
              </a>
            </li>

            <li className="nav__list_lan">
              <a href="https://www.linkedin.com/in/omar-rayes-594b6b272/" className={color ? "nav___link_change nav___link_change_color " : "nav__link nav__link_color"}>
              LinkedIn
              </a>
            </li>
          </ul>
        </div>


      </nav>
    </header>
  );
};

export default Navbar;
