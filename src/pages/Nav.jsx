import React, { useState, useContext } from 'react';
import Menus from '../components/Menus';
import { DataContext } from '../context/DataProvider';
import { RiMenuFill } from "react-icons/ri";

const Nav = () => {
  const { menu } = useContext(DataContext);
  const [navActive, setNavActive] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴 열림/닫힘 상태 추가

  // 모바일 메뉴 클릭 시 메뉴 열기/닫기
  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="nav_menu">
      <ul className={`mynav ${isMenuOpen ? 'open' : ''}`}> {/* isMenuOpen에 따라 클래스 추가 */}
        {menu.map((item, index) => (
          <li key={index}>
            <Menus 
              navtitle={item.name} 
              navLink={item.link} 
              navActive={navActive} 
              setNavActive={setNavActive} 
            />
          </li>
        ))}
      </ul>
      <div className="mobile-menu d-block d-md-none" onClick={handleMenuToggle}>
        <RiMenuFill />
      </div>
    </nav>
  );
};

export default Nav;
