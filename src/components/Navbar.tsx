"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import addIconPath from "../icons/add-square-svgrepo-com.svg";
import logoIconPath from "../icons/brain-svgrepo-com.svg";
import Image from "next/image";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav className="items-center">
            <ul className="list-none flex justify-between items-center">
                <div className="flex mx-10 items-center">
                    <li className="mx-10">
                        <Link href="/">
                <Image
                  className="my-2"
                                src={logoIconPath}
                                alt="Add"
                                width={36}
                                height={24}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/notes"
                            className={`mx-10 ${
                                pathname === "/notes"
                                    ? "underline underline-offset-8"
                                    : ""
                            }`}
                        >
                            Notes
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/tbr"
                            className={`mx-10 ${
                                pathname === "/tbr"
                                    ? "underline underline-offset-8"
                                    : ""
                            }`}
                        >
                            TBR List
                        </Link>
                    </li>
                </div>
                <li className="justify-self-end">
                    <Link href="/add">
                        <Image
                            className="mx-10"
                            src={addIconPath}
                            alt="Add"
                            width={32}
                            height={24}
                        />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
