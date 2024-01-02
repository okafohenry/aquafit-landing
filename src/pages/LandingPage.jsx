import React from "react";
import { ContactUs, Footer, Jumbotron,  Navbar, Reviews, Services } from "../components/ui";
import AboutUs from "../components/ui/AboutUs";

function LandingPage() {
    return (
        <div className="body">
            <main>
                <Navbar />
                <Jumbotron />
                <AboutUs />
                <Services />
                <Reviews />
                <ContactUs />
            </main>
            <Footer />
        </div>
    )
}

export default LandingPage;