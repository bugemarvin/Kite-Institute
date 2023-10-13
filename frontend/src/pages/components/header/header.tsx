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

export default function NavigationPage() {
  const router = useRouter();
  const { pathname } = router;
  const items: Item[] = [
    {
      key: 'index',
      label: 'Home',
      href: '/'
    },
    {
      key: 'us',
      label: 'About',
      href: '/about'
    },
    {
      key: 'studies',
      label: 'Courses',
      href: '/courses'
    },
    {
      key: 'map',
      label: 'Location',
      href: '/location'
    },
    {
      key: 'info',
      label: 'Contact Us',
      href: '/contact'
    }
  ];
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
          <DropdownMenu aria-label='Dynamic Actions' items={items} className={style.list}>
            {(item: Item) => (
              <DropdownItem key={item.key}>
                <Link href={item.href} className={pathname === item.href ? style.active : style.notActive}>{item.label}</Link>
              </DropdownItem>
            )}
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
