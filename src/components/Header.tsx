'use client'
import Link from 'next/link';
import { useTranslations } from 'next-intl'
import LocaleSwitcher from "@/components/LocaleSwitcher";


export default function Header() {
    const t= useTranslations('Header')
    return (
        <header className="">
            <nav className="container flex px-2 py-2 gap-5 ">
                <Link href="/">{t('home')}</Link>
                <Link href="/about">{t('about')}</Link>
            </nav>
            <LocaleSwitcher/>
        </header>
    )
}
