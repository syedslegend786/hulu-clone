function HeaderItem({ title, Icon }) {
    return (
        <div className='flex items-center flex-col w-12 group cursor-pointer'>
            <Icon className='h-8 group-hover:animate-bounce' />
            <p className='opacity-0 group-hover:opacity-100 group-hover:text-white tracking-widest'>{title}</p>
        </div>
    )
}

export default HeaderItem
