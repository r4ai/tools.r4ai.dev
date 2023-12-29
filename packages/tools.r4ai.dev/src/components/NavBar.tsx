"use client"

import { Link } from "@nextui-org/link"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar"
import NextLink from "next/link"
import { useState } from "react"
import { ThemeSwitch } from "./ThemeSwitch"

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  type MenuItem = {
    label: string
    href: string
  }
  const menuItems: MenuItem[] = [
    {
      label: "Diff it!",
      href: "/diff",
    },
    {
      label: "Format it!",
      href: "/format",
    },
  ]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} position="sticky">
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand as={NextLink} href="/">
          <div className="font-black text-inherit">r4ai/tools</div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.label}-${item.href}`} className="font-bold">
            <Link color="foreground" href={item.href} as={NextLink}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full"
              href={item.href}
              size="lg"
              as={NextLink}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
