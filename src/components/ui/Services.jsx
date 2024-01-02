import React from "react";
import { articles } from "../../utils/constants";
import NewsCard from "./NewsCard";

import header1 from '../../assets/imgs/img-1.png';
import header2 from '../../assets/imgs/img-2.png';

function Services() {
    return (
        <section id="services" className="section-2">
            <h3>Services</h3>

            <div className="box-center news-card-container">
                {/* {articles?.map((article, index) => (
                    <NewsCard
                        key={index}
                        {...article}
                    />
                ))} */}
                   <div className="news-card">
                        <img src={header1} alt="" />
                        <h4>Individual Swim Class</h4>
                        <p className="main-text">Our individual swim classes. Tailored to your needs, our focused sessions ensure rapid progress. <strike>N100,000</strike> N60,000</p>
                    </div>

                    <div className="news-card">
                        <img src={header2} alt="" />
                        <h4>Group Swim Class</h4>
                        <p className="main-text">Group of four (4) swim classes for skill development, safety, and confidence. Tailored sessions for all levels. <strike>N360,000</strike>  N220,000</p>
                    </div>
            </div>

            {/* <div className="flex justify-center">
                <button>Load more</button>
            </div> */}
        </section>
    )
}

export default Services