"use client";

import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Images/logo.png";

const navigation = [
  { name: "Product", href: "/sign-in" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [user, setUser] = useState(null);

  //   useEffect(() => {
  //     const fetchUser = async () => {
  //       try {
  //         const user = await userProfile();
  //         setUser(user);
  //       } catch (error) {
  //         console.error("Error fetching user:", error);
  //       }
  //     };
  //     fetchUser();
  //   }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-5">
      <nav
        className="flex items-center justify-between p-6 lg:px-8 bg-gray-900"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image className="h-10 w-auto lg:h-12" src={Logo} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`${
              mobileMenuOpen ? "hidden" : ""
            } lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-100"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {!user ? (
            <div className="">
              <Link
                href="/sign-in"
                className="text-sm font-semibold leading-6 text-gray-100 mx-4"
              >
                Log in
                {/* <span aria-hidden="true">&rarr;</span> */}
              </Link>
              <Link
                href="/sign-up"
                className="text-sm font-semibold leading-6 text-gray-100 mx-4"
              >
                Sign up
              </Link>
            </div>
          ) : (
            <UserButton afterSignOutUrl="/" />
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-3/5 overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image className="hidden h-12 w-auto" src={Logo} alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:text-indigo-600"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                {!user ? (
                  <>
                    <Link
                      href="/sign-in"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-100 hover:text-indigo-600"
                    >
                      Log in
                    </Link>
                    <Link
                      href="/sign-up"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-100 hover:text-indigo-600"
                    >
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <UserButton afterSignOutUrl="/" />
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
