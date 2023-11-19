

'use client'
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter, Link} from '../navigation';
import {useEffect} from "react";


export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher')
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();


    useEffect(()=>{
        console.log(locale)
    })

    const onLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;
        router.replace(pathname, { locale: newLocale });
    }


    return (<>
            {['en', 'pl'].map((lang) => (
                <Link key={lang} href="/" locale={lang!}>
            {lang}
           </Link>
            ))}
        </>
    )
}
