import aboutImg from '../../assets/imgs/jumbotron-img.png';

function AboutUs() {
    return (
        <section id='about' className="about-us">
            <h3>About Us</h3>
            <div className="grid">
                <div className="left">
                    <img src={aboutImg} alt="about" />
                </div>
                <div className="right">
                    <p>
                        At Aquafit, we foster a nurturing environment for all ages to learn, thrive, and develop lifelong swimming skills. More than a swim school, we're a community valuing safety, passion, and the joy of swimming.
                    </p>
                    <p className='mission'>
                        <p className='bold'>Our Mission:</p>
                        <p>Empowering individuals through water education and promoting a healthy lifestyle through the art of swimming.</p> 
                    </p>
                    <p className='choose-aqua'>
                        <p className='bold'>Why Choose Aquafit:</p>
                        <ul>
                            <li>
                                We prioritize personalized attention, ensuring a positive and effective learning experience for each swimmer.
                            </li>
                            <li>
                                We prioritize safety in and around the water. Our instructors are equipped with the right safety measures to create a secure learning environment.
                            </li>
                            <li>
                                Our diverse programs cater to all skill levels, from beginners to advanced swimmers. Whether you're an infant or aiming for competitive training, we have the right program for you.
                            </li>
                            <li>
                                We aim to instill a lifelong love for swimming beyond the pool, fostering a passion for water activities and overall well-being.
                            </li>
                        </ul>
                        <p>
                            Join us at Aquafit Swimming Academy and embark on a journey of aquatic discovery, fitness, and fun!
                        </p>
                    </p>

                </div>
            </div>
        </section>
    )
}

export default AboutUs