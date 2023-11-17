'use client'
import React, {useState} from 'react';
import styles from "./Header.module.css";

import bg from 'public/background4.jpg'

import Link from "next/link";
import {useTranslations} from "next-intl";
import MenuLink from "@/components/MenuLink";


function Header(props) {

    const { t } = useTranslations('Index')

    const [address, setAddress] = useState('');

    const goToAddress = (address) => {
        console.log("Going to" + address);
        setAddress(address);
        window.location.href = address;
    }

    return (
        <div className={styles.headerContainer} id="top" style={{backgroundSize: "cover" }}>
            <nav className={`${styles.navContainer} ${props.showMenu ? styles.showMenu : null}`}>
                <div className={styles.navInnerContainer}>
                 <div className={styles.languageButtons}>
                    <a onClick={props.changeLang.bind(this, "en")} className={`${props.language==='en' ? 'selected' : ''}`}>EN</a>
                    <a onClick={props.changeLang.bind(this, "pl")} className={`${props.language==='pl' ? 'selected' : ''}`}>PL</a>
                    </div>
                <div>
                    <MenuLink onAction={props.goTo.bind(this, "top")} active={props.selectedItem==0}>HOME</MenuLink>
                    <MenuLink onAction={props.goTo.bind(this, "about")} active={props.selectedItem==1}>{t('menu_title_1')}</MenuLink>
                    <MenuLink onAction={props.goTo.bind(this, "products")} active={props.selectedItem==2}>{t('menu_title_2')}</MenuLink>
                    <MenuLink onAction={props.goTo.bind(this, "references")} active={props.selectedItem==3}>{t('menu_title_3')}</MenuLink>
                    <MenuLink onAction={props.goTo.bind(this, "contact")} active={props.selectedItem==4}>{t('menu_title_4')}</MenuLink>
                </div>
                <div className="title-container">
                    <a
                        className={styles.menuLogo}
                        onClick={props.goTo.bind(this, "about")}
                    >
                        <img
                            src="./elprimero.png"
                            alt="JMR Europe Logo"
                            height={32}
                        />
                    </a>
                </div>
                </div>
            </nav>
            <main className={`${styles.main}`}>
                <div className={styles.description}>
                        <div className={styles.languageButtons}>
                            <a onClick={props.changeLang.bind(this, "en")} className={`${props.language==='en' ? 'selected' : ''}`}>EN</a>
                            <a onClick={props.changeLang.bind(this, "pl")} className={`${props.language==='pl' ? 'selected' : ''}`}>PL</a>
                        </div>
                    <div>
                        <a
                            onClick={props.goTo.bind(this, "about")}
                        >
                            <img
                                src="elprimero.png"
                                alt="JMR Europe Logo"
                                width={100}
                            />
                        </a>
                    </div>
                </div>

                <div className={styles.center}>
                    <h1>GASFILTERS.EU</h1>
                    <div className={styles.productsContainer}>
                        <div className={styles.productItem}>
                        </div>
                        <div className={styles.productItemLight1}>
                        </div>
                        <div className={styles.productItemLight2}>
                        </div>
                        <div className={styles.productItem}>
                        </div>
                    </div>
                </div>

                <div className={styles.grid}>
                    <a
                        className={`${styles.card} ${styles.redcard}`}
                        onClick={props.goTo.bind(this, "about")}
                    >
                        <h2>
                            {t('menu_title_1')}
                        </h2>
                    </a>

                    <a
                        className={styles.card}
                        onClick={props.goTo.bind(this, "products")}
                    >
                        <h2>
                            {t('menu_title_2')}
                        </h2>
                    </a>

                    <a
                        className={styles.card}
                        onClick={props.goTo.bind(this, "references")}
                    >
                        <h2>
                            {t('menu_title_3')}
                        </h2>
                    </a>
                    <a
                        className={styles.card}
                        onClick={props.goTo.bind(this, "contact")}
                    >
                        <h2>
                            {t('menu_title_4')}
                        </h2>
                    </a>
                </div>
            </main>
        </div>
    );
}

export default Header;
