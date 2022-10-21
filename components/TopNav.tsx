import * as React from "react";
import Link from "next/link";

type NavItemLink = {
    title: string,
    link: string
}

const TopNav : React.FC = () => {

    const navLinks : NavItemLink[] = [
        {
            title: "My Products",
            link: '/products'
        },
        {
            title: "My Gear",
            link: "/gear"
        },
        {
            title: "My Blog Posts",
            link: "/posts"
        },
        {
            title: "About Me",
            link: "/about"
        }
    ]

    return (
        <div className='bg-white border-b-[1px] border-b-primary'>
            <div className='flex flex-row w-3/4 mx-auto py-3'>
                <div className='flex flex-row flex-1'>
                    <img className='rounded-full w-[120px] h-[120px]' src='/images/profile.png' alt="Chris Board's Profile Picture" />
                    <p className='align-middle my-auto ml-6 text-2xl font-bold'>
                        Chris Board
                    </p>
                </div>
                <div className='align-middle my-auto text-right float-right flex-2'>
                    <ul>
                        {
                            navLinks.map(navLink => {
                                return (
                                    <li className='inline-block mx-3 p-2 font-bold text-primary rounded hover:bg-gray-200 transition-all ease-in-out'>
                                        <Link href={navLink.link}>{navLink.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TopNav;