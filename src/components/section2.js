import "../styles/section2.css"
import Jmpa from "../images/jpma.png"
import html from "../images/html-5.png"
import css from "../images/css-3.png"
import jquery from "../images/j.png"
import php from "../images/php.png"
import {motion} from "framer-motion";

import Library from "../images/library.png"

function Section2() {


    const animation = (prop) => {
        return {

            initial: {translateY: -20, opacity: 0},
            whileInView: {translateY: 0, opacity: 1},
            transition: {duration: 0.1, delay: prop, type: "spring", stiffness: 100}
        }


    }
    const Cards = (prop) => {
        return (
            <div className="childcon">

                <motion.div className="childcon2" initial={{translateX: -90, opacity: 0}}
                            animate={{translateX: 0, opacity: 1}}
                            transition={{duration: 0.5, delay: 0.4}}>

                    <div className="con1"><img src={prop.image}/></div>
                    <div className="con2">


                        <h4><span> {prop.h} </span>{prop.title} </h4>
                        <p>Is an simple Ecommerce website Project</p>
                        <div>
                            <motion.a  {...animation(1.1)}><img src={html}/></motion.a>
                            <motion.a  {...animation(1.3)}><img src={css}/></motion.a>

                            <motion.a  {...animation(1.5)}><img src={jquery}/></motion.a>
                            <motion.a  {...animation(1.7)}><img src={php}/></motion.a>
                        </div>
                        <button>Take a Look</button>

                    </div>
                </motion.div>

            </div>


        )
    }

    return (
        <>
            <motion.header className="ft" id="section2" initial={{translateX: -90, opacity: 0}}
                           whileInView={{translateX: 0, opacity: 1}}
                           transition={{duration: 0.5, delay: 0.4, type: "spring", stiffness: 100}}

            >Featured Project
            </motion.header>
            <header className="ft"><span>-School Project</span></header>
            <div className="gridcontainer">


                <Cards image={Jmpa} h="JPMA " title={"Coffee Shop"}/>

                <Cards image={Library} h="ISPCS " title="library"/>


            </div>

        </>

    )


}


export default Section2;