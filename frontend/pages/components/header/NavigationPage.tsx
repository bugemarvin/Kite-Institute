import React from 'react';
import style from './nav.module.css';
import Link from 'next/link';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  Button,
  DropdownItem
} from '@nextui-org/react';
import { useRouter } from 'next/router';

type Item = {
  key: string;
  label: string;
  href: string;
};

export default function NavigationPage() {
  const { pathname } = useRouter();
  return (
    <>
      <div className={style.navigation}>
        <div className={style.navigation__links}>
          <Link className={`${style.navigation__link} ${pathname === '/' ? style.active : style.notActive}`} href='/'>
            Home
          </Link>
          <Link className={`${style.navigation__link} ${pathname === '/about' ? style.active : style.notActive}`} href='/about'>
            About
          </Link>
          <Link className={`${style.navigation__link} ${pathname === '/courses' ? style.active : style.notActive}`} href='/courses'>
            Courses
          </Link>
          <Link className={`${style.navigation__link} ${pathname === '/location' ? style.active : style.notActive}`} href='/location'>
            Location
          </Link>
          <Link className={`${style.navigation__link} ${pathname === '/contact' ? style.active : style.notActive}`} href='/contact'>
            Contact Us
          </Link>
        </div>
        <Dropdown>
          <DropdownTrigger>
            <Button variant='bordered' className={style.btn}>Menu</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label='Dynamic Actions' className={style.list}>
              <DropdownItem>
                  <Link href='/' className={pathname === '/' ? style.active : style.notActive}>Home</Link>
              </DropdownItem>
              <DropdownItem>
                  <Link href='/about' className={pathname === '/about' ? style.active : style.notActive}>About</Link>
              </DropdownItem>
              <DropdownItem>
                  <Link href='/courses' className={pathname === '/courses' ? style.active : style.notActive}>Courses</Link>
              </DropdownItem>
              <DropdownItem>
                  <Link href='/location' className={pathname === '/location' ? style.active : style.notActive}>Location</Link>
              </DropdownItem>
              <DropdownItem>
                  <Link href='/contact' className={pathname === '/contact' ? style.active : style.notActive}>Contact Us</Link>
              </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <div className={style.navigation__button}>
          <Link className={style.navigation__buttons} href="/login">
            Login
          </Link>
          <Link className={style.navigation__buttons} href="/signup">
            JOIN US
          </Link>
        </div>
      </div>
    </>
  );
}
