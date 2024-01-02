import React from 'react';
import logo from "../../assets/imgs/Logo.svg";
import phone from "../../assets/imgs/phone.svg";
import gmail from "../../assets/imgs/gmail.svg";
import location from "../../assets/imgs/location.svg";
import facebook from "../../assets/imgs/facebok.svg";
import tiktok from "../../assets/imgs/tiktok.svg";
import instagram from "../../assets/imgs/instgram.svg";
import linkedin from "../../assets/imgs/linkedin.svg";
import youtube from "../../assets/imgs/youtube.svg";


import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";


const landings = [
    { text: 'Home', route: '', addedText: null },
    { text: 'Products', route: '', addedText: null },
    { text: 'Services', route: '', addedText: null },
    { text: 'Reviews', route: '', addedText: null }
];
const company = [
    { text: 'Home', route: '', addedText: null },
    { text: 'Careers', route: '', addedText: 'Hiring' },
    { text: 'Services', route: '', addedText: null }
];
const contact_info = [
    { text: '(+234) 703 382 2103', route: '', icon: phone },
    { text: 'aquafitacademy@gmail.com.', route: '', icon: gmail },
    { text: 'Abuja, Nigeria', route: '', icon: location }
];

const social_links = [
    { name: 'youtube', icon: youtube, to: '', h: '40px'},
    { name: 'instagram', icon: instagram, to: '', h: '35px'},
    { name: 'linkedIn', icon: linkedin, to: '', h: '40px'},
    { name: 'facebook', icon: facebook, to: '', h: '40px'},
    { name: 'tiktok', icon: tiktok, to: '', h: '35px'},
]


function Footer(){
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <footer>
            <div data-aos='fade-left' className="bottom-logo">
                <img 
                    src={logo}
                    alt="" 
                    height="41px" 
                    width="156px" />
                <p className="footer-text-1">...happy and fit</p>

                <div className='social_links'>
                    {social_links.map((item, index) => (
                        <a title={item.name} href={item.to} target='_blank' key={index}>
                            <img height={item.h} width={'50px'} src={item.icon} alt="item.name" />
                        </a>
                    ))}
                </div>

                <p className="footer-text-2">All rights reserved.</p>
            </div>

            <div data-aos='fade-up' className="bottom-links flex flex-wrap justify-around">
                <ul className="grid ">
                    <li>
                        Company
                    </li>
                    {landings.map((item, index) => (
                        <li key={index}>
                            <a href={item.route}>{ item.text }</a>
                        </li>
                    ))}
                </ul>
                {/* <ul className="grid ">
                    <li>
                        Landing
                    </li>
                    {company.map((item, index) => (
                        <li key={index}>
                            <a href={item.route}>{ item.text }</a>
                            {item.addedText && <span className="highlighted">{ item?.addedText }</span>}
                        </li>
                    ))}
                </ul> */}
                <ul data-aos='fade-up' className="grid">
                    <li>
                        Contact Information
                    </li>
                    {contact_info.map((item, index) => (
                        <li className='contact_info' key={index}>
                            <img height={'20px'} width={'30px'} src={item.icon} alt={item.text} />
                            <a href={item.route}>{ item.text }</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer;