import jumbotronImg  from "../../assets/imgs/jumbotron-img.png"
import authorImg from "../../assets/imgs/author-3.png"

function Jumbotron() {
    return(
        <section className="section-1 w-full">
            <div className="bg-img"></div>
            <div className="jumbotron-text">
                <h1>Dive into a World of Aquatic Excellence with Aquafit Academy</h1>
                <button className="btn">Get Started</button>
            </div>
        </section>
    )
}


export default Jumbotron;