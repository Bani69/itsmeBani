import './App.css';
import Navbar from "./components/navbar";
import face from "./images/facebook.png"
import instagram from "./images/instagram.png";
import github from "./images/github.png";
import twitter from "./images/twitter.png"
import {motion} from "framer-motion";
import Section2 from "./components/section2";
import useLocalStorage from "use-local-storage";
import Section3 from "./components/section3";
import Section4 from "./components/section4";


function App() {
    const [isActive, setIsActive] = useLocalStorage('theme' ? 'dark' : 'light');
    const animation = (prop) => {
        return {

            initial: {translateY: -20, opacity: 0},
            whileInView: {translateY: 0, opacity: 1},
            transition: {duration: 0.1, delay: prop, type: "spring", stiffness: 100}
        }


    }


    return (
        <div className="parentcontainer" data-theme={isActive}>
            <section><Navbar/>

                <div className="container">
                    <motion.div className="imagecon" initial={{translateX: -90, opacity: 0}}
                                whileInView={{translateX: 0, opacity: 1}}
                                transition={{duration: 0.5, delay: 0.9, type: "spring", stiffness: 100}}


                    >

                        <img src="https://eugenebadato.vercel.app/_next/image?url=%2Fimages%2Fme.png&w=750&q=100"/>
                    </motion.div>


                    <div className="introduction">
                        <motion.h4 initial={{translateX: 90, opacity: 0}}
                                   whileInView={{translateX: 0, opacity: 1}}
                                   transition={{duration: 0.1, delay: 0.4, type: "spring", stiffness: 100}}>Hello, they
                            call me Bani
                        </motion.h4>
                        <motion.h1 className="introh" initial={{translateX: 90, opacity: 0}}
                                   whileInView={{translateX: 0, opacity: 1}}
                                   transition={{duration: 0.6, delay: 0.8}}> As a <span>Hobby</span>,
                                   I <span>design</span> and <span>develop</span> things for the web .
                        </motion.h1>

                        <div className="btns">
                            <motion.a href="#section2" {...animation(1.1)} className="projbtn">Projects</motion.a>
                            <div>

                                <motion.a {...animation(1.3)} href="#"><img src={face}/></motion.a>
                                <motion.a  {...animation(1.6)} href="#"><img src={instagram}/></motion.a>
                                <motion.a  {...animation(1.9)} href="#"><img src={github}/></motion.a>
                                <motion.a   {...animation(2)} href="#"><img src={twitter}/></motion.a>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="section2" data-theme={isActive}>

                <Section2/>

            </section>
            <section id="section3" className="section3" data-theme={isActive}>
                <Section3 />
            </section>





            <section id="section4" className="section4" >
                <Section4 />
            </section>
        </div>
    );


}

export default App;
