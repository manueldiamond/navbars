"use client"
import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"

const menuItems = [
    { title: "Home", link: "/" },
    { title: "Courses", link: "/courses" },
    { title: "Blogs", link: "/blogs" },
    { title: "Tutorials", link: "/tutorials" },
    { title: "Search A Trainer", link: "/search-a-trainer" },
    { title: "Become A Teacher", link: "/become-a-teacher" }
];


const Navbar = ()=>{
    const [mobileMenuOpen,setMobileMenuOpen]=useState(false)
    const [scrolledDown,setScrolledDown] = useState(false)
    const maxScroll=60

    const toggleMobileMenu=()=>{
        setMobileMenuOpen(prevOpen=>!prevOpen)
    }
    const pathname=usePathname()
    const isCurrentPath=(path:string)=>(
        pathname&&(pathname===path||pathname.includes(path)&&path!=="/")
    )

    useEffect(()=>{
        const handleScroll = (event:Event) => {
            setScrolledDown(window.scrollY >= maxScroll);
            
            if (event.target!==document.getElementById("mobile-menu-dropdown"))
                setMobileMenuOpen(false)
          };
        window.addEventListener('scroll', handleScroll);
        
        const resizeFunc=()=>{
            setMobileMenuOpen(false)
        }
        addEventListener("resize",resizeFunc)

        return () => {
            window.removeEventListener('scroll', handleScroll);
            removeEventListener('resize',resizeFunc)
        };
    }, []);
    
    
    
 

    return (
        <nav className={`${scrolledDown&&" shadow-xl fixed top-0 "} bg-white w-full flex flex-col gap-3 max-h-screen`}>
           <div className="w-full flex-wrap flex justify-between px-4 lg:px-8 py-5">
               <Link href="/"> 
                    <Image src="/next.svg"
                        className="mr-20"
                        width={120}
                        height={50}
                        alt="next-js logo"
                    /> 
                </Link>
                < div className="flex gap-5 items-center flex-1 justify-between  text-black">
                    <div className="lg:hidden flex items-center flex-1 justify-evenly  text-black">
                        <button onClick={toggleMobileMenu} className="flex gap-1">
                            Menu
                            {mobileMenuOpen?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>
                            }
                        </button>
                        <div className="search">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                    </div>
                
                    <ul className=" hidden lg:flex flex-1  text-black justify-end gap-3 xl:gap-5 items-center">
                        {menuItems.map((item)=>(
                            <li 
                                className={`text-lg transition ${isCurrentPath(item.link)?"hover:500 border-b":" text-gray-500"}`} 
                                key={item.link}
                            >
                                <Link href={item.link}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
            
                    <div className="login-thing flex items-center gap-5">
                        <div className="cart-svg relative">
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            <span className="flex items-center justify-center bg-gray-700 absolute w-5 h-5 rounded-full right-0 top-0 -translate-y-1/2 translate-x-1/2 text-white">0</span>
                        </div>

                        <button 
                        className=" p-4 rounded-lg login-button bg-gray-200 overflow-clip text-black hover:text-white hover:after:scale-[150%] after:transition after:rounded-full after:absolute after:scale-0 after:top-0  after:left-0 after:bg-black relative after:w-full after:aspect-square after:-z-10 z-10
                        flex gap-3 md:mr-5
                        ">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 hidden md:block">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            Login
                        </button>
                    </div>

                </div>
            </div>
            {mobileMenuOpen&&innerWidth<786&&<div className="flex h-min px-8 pb-8 flex-col gap-5 overflow-clip">
                <hr/>
                <div id="mobile-menu-dropdown" className="flex h-full pb-4 flex-col gap-5  overflow-scroll mobile-menu-dropdown">
                    <div className="input p-4 flex rounded-lg bg-gray-200">
                        <input placeholder="Search" className="flex-1 bg-transparent outline-none"/>
                        <div className="search bg-transparent">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                        </div>
                    </div>
                    <ul className=" flex h-fullsssss flex-col flex-1  text-black justify-end gap-5 ">
                        {menuItems.map((item)=>(
                            <li 
                                className={`text-lg ${isCurrentPath(item.link)?"text-gray-500":" hover:text-gray-500"}`} 
                                key={item.link}
                            >
                                <Link href={item.link}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>}
        </nav>
    )
}
export default Navbar

