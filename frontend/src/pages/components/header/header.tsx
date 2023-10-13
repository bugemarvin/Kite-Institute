import style from './nav.module.css';
import Link from 'next/link';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  Button,
  DropdownItem
} from '@nextui-org/react';

export default function NavigationPage() {
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
          <Link className={style.navigation__link} href='/'>
            Home
          </Link>
          <Link className={style.navigation__link} href='/about'>
            About
          </Link>
          <Link className={style.navigation__link} href='/courses'>
            Courses
          </Link>
          <Link className={style.navigation__link} href='/location'>
            Location
          </Link>
          <Link className={style.navigation__link} href='/contact'>
            Contact
          </Link>
        </div>
        <Dropdown>
          <DropdownTrigger>
            <Button variant='bordered' className={style.btn}>Menu</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label='Dynamic Actions' items={items}>
            {(item: Item) => (
              <DropdownItem key={item.key}>
                <Link href={item.href}>{item.label}</Link>
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
