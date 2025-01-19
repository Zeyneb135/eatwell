import React from 'react'
import style from './Header.module.scss'
import Drawer from 'react-modern-drawer'
import { RxHamburgerMenu } from "react-icons/rx";

import 'react-modern-drawer/dist/index.css'
const Header = () => {
    const [isOpen , setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
  return (
    <div className={style.container}>
        <p>EATWELL</p>

    <Drawer 
            open = {isOpen}
            onClose = {toggleDrawer}
            direction = 'right'
            className = 'bla bla bla'>
                <ul className={style.myull}>
            <li><a id={style.Home} href="/">HOME</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">OFFER</a></li>
            <li><a href="">MENU</a></li>
            <li><a href="">NEWS</a></li>
            <li><a href="">GALLERY</a></li>
            <li><a href="">CONTACT</a></li>
        </ul>
     </Drawer>

        <ul className={style.myul}>
            <li><a id={style.Home} href="/">HOME</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">OFFER</a></li>
            <li><a href="">MENU</a></li>
            <li><a href="">NEWS</a></li>
            <li><a href="">GALLERY</a></li>
            <li><a href="">CONTACT</a></li>
        </ul>
        <div onClick={toggleDrawer} className={style.burger}><RxHamburgerMenu /> MENU</div>
    </div>
  )
}

export default Header