'use client';

import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import logo from '~/assets/logo/Web3 Together.svg';
import { NavbarItemList } from "@/contraints/NavbarItem";

const path = [
  "/mint-page",
  "/community/"
];

export default function NavbarDefault() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const isPathMatched = path.some(p => pathname.includes(p));
    setHidden(isPathMatched);
  }, [pathname, router]);

  return (
    <Navbar className={`${hidden ? 'hidden' : 'flex'} bg-background/0 backdrop-saturate-1 justify-start items-center text-white p-7`} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="bg-transparent"> {/* Corrected className */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <Image src={logo} height={'auto'} width={'auto'} alt="logo" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        {
          NavbarItemList.map((item) => (
            <NavbarItem key={item.id}>
              <Link className="text-white opacity-70 cursor-pointer" href={item.route}>
                {item.label}
              </Link>
            </NavbarItem>
          ))
        }
        <NavbarItem className="w-100" key={'login'}>
          <Button onClick={() => { router.push('/mint-page'); }} className="bg-secondary rounded-lg text-md font-semibold text-white">
            Mint is live
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-transparent backdrop-blur-md pt-20">
        {
          NavbarItemList.map((item) => (
            <NavbarMenuItem key={item.id}>
              <Link className="text-white opacity-70 cursor-pointer" href={item.link}>
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))
        }
      </NavbarMenu>
    </Navbar>
  );
}
