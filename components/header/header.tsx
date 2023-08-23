import Image from "next/image";
import styles from './header.module.css';
import Link from "next/link";
import IconHaeder from "../Layout/iconHaeder";
import AddressButton from "../header/address-button";
import Navigation from "./nav";
import {useRef,useState } from "react";
const Header = ({setTitle, title, ManuList, SubList})=>{    
    const headerRef = useRef(null);
    const spanRef = useRef(null);
    const navRef = null;
    const logoClick = ()=>{
        setTitle('main')
    };
    const logoHover = ()=>{
        setTitle('main')
    }
    console.log(title)
    return  <header className={styles.headerContainer} 
                    ref={headerRef} 
                    >
                <h1  onClick={logoClick}
                     onMouseOver={logoHover}>
                    <Link href='/'>
                        <Image src={'/logo/headerLogo.png'} alt={`로고 이미지`} width={175} height={35} priority/>
                    </Link>
                </h1>
                <Navigation  
                    // setTitle={setTitle} 
                    // title={title} 
                    ManuList={ManuList}
                    SubList={SubList}
                />
                <AddressButton/>
                <IconHaeder spanRef={spanRef}/>
            </header>
    
};
export default Header;