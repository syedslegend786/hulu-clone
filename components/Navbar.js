import requests from "../utils/requests"
import { useRouter } from 'next/router'
function Navbar() {
    const router = useRouter()
    return (
        <nav className='relative'>
            <div className='flex px-6 sm:px-10 space-x-10 whitespace-nowrap
            text-2xl overflow-x-scroll scrollbar-hide'>
                {
                    Object.entries(requests).map(([key, { title, url }]) => (
                        <h2 key={key} onClick={() => router.push(`/?genre=${key}`)} className='last:pr-10 cursor-pointer transition duration-100
                    transform hover:scale-125 hover:text-white
                    active:text-red-200'>{title}</h2>
                    ))
                }
            </div>
            <div className='absolute top-0 right-0 bottom-0 bg-gradient-to-l from-[#06202A] w-6 h-10'  ></div>
        </nav>
    )
}

export default Navbar
