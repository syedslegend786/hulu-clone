import Image from 'next/image'
import { forwardRef } from 'react'
import { ThumbUpIcon } from '@heroicons/react/outline'
const Thumbnail = forwardRef(({ data }, ref) => {
    console.log(data)
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    return (
        <div ref={ref} className='p-2 group cursor-pointer transition-all duration-200 ease-in-out sm:hover:scale-110 hover:z-50'>
            <Image
                layout='responsive'
                src={`${BASE_URL}${data.backdrop_path}`}
                height='1080'
                width='1920'
                alt=''
            />
            <div className='p-2'>
                <p className='truncate max-w-md'>{data.overview}</p>
                <h2 className='text-2xl mt-2 transition-all ease-in duration-100 transform group-hover:font-bold'>{data.title || data.original_title}</h2>
                <div className='flex space-x-4
                opacity-0 group-hover:opacity-100'>
                    <span>{data.release_date}{data.vote_count ? '*' : ''}</span>
                    <ThumbUpIcon className='h-6' />
                    <span>{data.vote_count}</span>
                </div>
            </div>
        </div>
    )
})

export default Thumbnail
