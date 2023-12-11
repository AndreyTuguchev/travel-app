import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image  src="/hilink-logo.svg" alt='logo' width={74} height={29} />
            </Link>

            <ul className='hidden h-full gap-12 lg:flex items-center top-menu-ul'>
                {NAV_LINKS.map((link) =>(
                    <li key={crypto.randomUUID()}>
                        <Link href={link.href} className='regular-16 bold-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:text-green-600' aria-label={link.label}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            {/* <li className='lg:flexCenter hidden'>
                <Link href="/" aria-label='login' className='flexCenter gap-3 rounded-full border cursor-pointer btn_dark_green'>
                    <Image src="/user.svg" alt="user icon" width={24} height={24} />
                    <span>Login</span>
                </Link>
            </li> */}
            </ul>
            

            <span className="mobile-menu-toggle" >
                <span></span>
                <span></span>
                <span></span>
            </span>

        </nav>
    )
}

export default Navbar