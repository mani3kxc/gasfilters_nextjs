'use client'
import {unstable_setRequestLocale} from 'next-intl/server';
import {ReactNode, useEffect, useRef, useState} from "react";
import Header from "@/components/Sections/Header";

type Props = {
    params: { locale: string }
}

export default function Index({
                                  params: {locale}
                              }:Props) {


    const [selectedItem, setSelectedItem] = useState(0);
    const [showMenu, setShowMenu] = useState(false);

    const handleGoTo = (id:string) => {
        const element = document.querySelector("[id=" + id + "]");
        if (element) {
            window.scrollTo({
                behavior: 'smooth',
                top:
                    element.getBoundingClientRect().top -
                    document.body.getBoundingClientRect().top - (window.innerWidth < 768 ? 39 : 100),
            })
        }
    }

    const handleScroll = () => {

    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLang = (lang:string) => {
    }


    return <div className="App">
        <Header goTo={handleGoTo} changeLang={handleLang} language={locale}
                selectedItem={selectedItem} showMenu={showMenu}/>
    </div>;
}
