import React from 'react';
import { Icon } from '@iconify/react';
import '../styles/styles.css'

const Footer = () => {
    return (

        <footer className="footer">
            <ul className="social">
                <li><a href="https://www.facebook.com/">
                    <Icon icon="ion:logo-facebook" />
                </a></li>
                <li><a href="https://twitter.com/">
                    <Icon icon="cib:twitter" />
                </a></li>
                <li><a href="https://www.linkedin.com/">
                    <Icon icon="raphael:linkedin" />
                </a></li>
                <li><a href="https://www.instagram.com/">
                    <Icon icon="uil:instagram-alt" />
                </a></li>
            </ul>
            <p>©2023 Online Notes | All Rights Reserved</p>
        </footer>

    );
};

export default Footer;