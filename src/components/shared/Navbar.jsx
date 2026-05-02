'use client'
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import navImg from '@/asset/Eid-Al-Adha-Navbar.png'
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname()
  const { data: session } = authClient.useSession()
  const user = session?.user;
  


  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex items-center gap-3">
            <Image
              src={navImg}
              alt="Navebar-Image"
              width={60}
              height={40}
              className="rounded-full"
            />

          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link href="/" className={`${pathName === "/" && 'font-bold'}`}>Home</Link>
          </li>
          <li>
            <Link href="/all-animals" className={`${pathName === "/all-animals" && 'font-bold'}`}>
              All Animals
            </Link>
          </li>
          <li>
            <Link href="/profile" className={`${pathName === "/profile" && 'font-bold'}`}>Profile</Link>
          </li>
        </ul>

        {
          user ? <div className="hidden items-center gap-4 md:flex">
            <Avatar>
              <Avatar.Image alt={user?.name} src={user?.image} />
              <Avatar.Fallback>{user.name.slice(0, 2)}</Avatar.Fallback>
            </Avatar>
            <Button onClick={async()=>await authClient.signOut()}>Logout</Button>
          </div> : <div className="hidden items-center gap-4 md:flex">
            <Link href="/login">Login</Link>
            <Link href='/register'><Button>Register</Button></Link>
          </div>
        }

      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="/" className={`block py-2 ${pathName === "/" && 'font-bold'}`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/all-animals" className={`block py-2 ${pathName === "/all-animals" && 'font-bold'}`}>
                All Animals
              </Link>
            </li>
            <li>
              <Link href="/profile" className={`block py-2 ${pathName === "/profile" && 'font-bold'}`}>
                Profile
              </Link>
            </li>
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              {
                user ? <Avatar>
                  <Avatar.Image alt={user?.name} src={user?.image} />
                  <Avatar.Fallback>{user.name.slice(0, 2)}</Avatar.Fallback>
                </Avatar> : <Link href="/login" className="block py-2">
                  Login
                </Link>
              }

              {
                user?<Button onClick={async()=>await authClient.signOut()}>Logout</Button>:<Link href={'/register'}><Button className="w-full">Register</Button></Link>
              }
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;