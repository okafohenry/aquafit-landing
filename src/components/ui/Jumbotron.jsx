import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Jumbotron() {
    useEffect(() => {
        AOS.init();
      }, []);
    return(
        <section className="section-1 w-full">
            <div className="bg-img"></div>
            <div className="jumbotron-text">
                <h1 data-aos="fade-up">Dive into a World of Aquatic Excellence with Aquafit Academy</h1>
                <button data-aos="fade-up" className="btn">Get Started</button>
            </div>
        </section>
    )
}


export default Jumbotron;