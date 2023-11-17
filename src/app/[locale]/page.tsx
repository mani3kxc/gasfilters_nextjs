'use client'
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import {useEffect, useRef, useState} from "react";
import Header from "@/components/Sections/Header";

export default function Index({
                                  params: {locale}
                              }) {

    unstable_setRequestLocale(locale);

    const references = useRef();
    const products = useRef();
    const contact = useRef();
    const about = useRef();

    const [selectedItem, setSelectedItem] = useState(0);
    const [showMenu, setShowMenu] = useState(false);


    const handleGoTo = (id) => {
        const element = document.querySelector("[id=" + id + "]");
        if (element) {
            window.scrollTo({
                behavior: 'smooth',
                top:
                    element.getBoundingClientRect().top -
                    document.body.getBoundingClientRect().top - (window.innerWidth<768? 39 : 100),
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

    const handleLang = (lang) => {
    }



    const t = useTranslations('Index');
    return <div className="App">
        <Header goTo={handleGoTo} changeLang={handleLang} language={locale}
                selectedItem={selectedItem} showMenu={showMenu}/>
    </div>;
}
