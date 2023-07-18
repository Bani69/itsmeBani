import "../styles/section3.css"
import {motion} from "framer-motion";

function Section3() {

    const animation = (prop) => {
        return {

            initial: {translateY: -30, opacity: 0},
            whileInView: {translateY: 0, opacity: 0.6 ,  transition: {duration: 0.1, delay: prop}},

             whileHover:{opacity: 1, scale: 1.3,rotate: 2,   transition: {duration: 0.1, delay: 0.1}}

    }


    }
    return (
        <>

            <div className="parent">
                <motion.div className="container1" initial={{translateX: -90, opacity: 0}}
                            whileInView={{translateX: 0, opacity: 1}}
                            transition={{duration: 0.5, delay: 0.9, type: "spring", stiffness: 100}}>

                    <div className="">

                        <h1> Insights into My Life</h1>
                        <h4> what I enjoy doing?</h4>
                        <p>Meet Jiovani, a curious and enthusiastic student eager to unlock the secrets of programming.
                            Intrigued by the ability to create digital wonders with just a few lines of code, Jiovani
                            sets out on a quest to delve into the world of programming purely for the joy of it.

                            Driven by a desire to grasp the fundamental concepts and techniques behind programming,
                            Jiovani embraces the challenge with open arms. Armed with a positive mindset and a thirst
                            for knowledge, Jiovani immerses themselves in the world of programming, ready to discover
                            the fascinating possibilities that await them.

                        </p>


                    </div>

                </motion.div>
                <div className="container2">
                    <motion.div {...animation(1.1)}>
                    </motion.div>
                    <motion.div {...animation(1.4)}>
                    </motion.div>
                    <motion.div {...animation(1.7)}>
                    </motion.div>
                    <motion.div {...animation(2)}>
                    </motion.div>
                </div>


            </div>


        </>


    )


}


export default Section3;