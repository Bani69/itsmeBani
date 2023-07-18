import "../styles/section4.css"
import r from "../images/logo512.png"

import {motion} from "framer-motion";
const x = (e) => {
    console.log(e.target.value)
}

function Section4() {
    return (
        <>


            <div className="con">

                <motion.div className="con11" initial={{translateX: -90, opacity: 0}}
                            whileInView={{translateX: 0, opacity: 1}}
                            transition={{duration: 0.5, delay: 0.9, type: "spring", stiffness: 100}}>


                    <img src="https://eugenebadato.vercel.app/_next/image?url=%2Fimages%2Fme.png&w=750&q=100"/>
                </motion.div>
                <motion.div className="con12"  initial={{translateX: 90, opacity: 0}}
                            whileInView={{translateX: 0, opacity: 1}}
                            transition={{duration: 0.5, delay: 0.9, type: "spring", stiffness: 100}}>

                    <form>
                        <motion.h1 initial={{translateY: -90, opacity: 0}}
                                   whileInView={{translateY: 0, opacity: 1}}
                                   transition={{duration: 0.9, delay: 0.9, type: "spring", stiffness: 100}}>Message Me!</motion.h1>
                        <label htmlFor="">Your Email</label>
                        <input type="text" placeholder="Email...." onChange={x}/>
                        <label htmlFor="">Message</label>


                        <textarea placeholder="Messagge...." onChange={x}></textarea>
                        <div>
                            <button type="submit">Send</button>
                        </div>

                    </form>
                </motion.div>

            </div>
            <div><footer>Created with <img src={r}/> By <span>@JiovaniFabro</span></footer></div>

        </>


    )


}


export default Section4;