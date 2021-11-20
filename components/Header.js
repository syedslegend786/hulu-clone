import Image from "next/image"
import {
    HomeIcon,
    LightningBoltIcon,
    CollectionIcon,
    BadgeCheckIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'
import HeaderItem from "./HeaderItem"
function Header() {
    return (
        <header className='flex flex-col items-center sm:flex-row sm:justify-between'>
            <div className='flex justify-evenly max-w-2xl space-x-7 p-4'>
                <HeaderItem title='HOME' Icon={HomeIcon} />
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
                <HeaderItem title='COLLECTION' Icon={CollectionIcon} />
                <HeaderItem title='VARIFIED' Icon={BadgeCheckIcon} />
                <HeaderItem title='SEARCH' Icon={SearchIcon} />
                <HeaderItem title='PROFILE' Icon={UserIcon} />
            </div>
            <Image
                className='object-contain'
                src='https://download.logo.wine/logo/Hulu/Hulu-Logo.wine.png'
                height='100px'
                width='200px'
            />
        </header>
    )
}

export default Header
