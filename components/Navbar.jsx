import React from 'react';
import Image from 'next/image';
import styles from '../styles/Navbar.module.scss';
import logo from '../public/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={`${styles.topbar} ` + (menuOpen && `${styles.active}`)}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <a href="#intro">
            <Image
              src={logo}
              width="70"
              height="40"
              objectFit="contain"
              alt=""
              className={styles.LogoIcon}
            />
          </a>
          <a href="#intro" className={styles.logoText}>
            itech.
          </a>

          <div className={styles.itemContainer}>
            <a href="#contact">
              <FontAwesomeIcon
                data-aos="zoom-out-up"
                icon={faPhone}
                style={{ fontSize: 20, color: '#009587' }}
              />
              <span>+8801860060068</span>
            </a>
          </div>
          <div className={styles.itemContainer}>
            <a href="#contact">
              <FontAwesomeIcon
                data-aos="zoom-in-up"
                icon={faEnvelope}
                style={{ fontSize: 20, color: '#ffd700', marginRight: '5' }}
              />
              <span>italimbd@gmail.com</span>
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <div
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            data-aos="zoom-in-right"
          >
            <span className={styles.line1}></span>
            <span className={styles.line2}></span>
            <span className={styles.line3}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
