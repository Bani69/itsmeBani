import "../styles/navbar.css"
import {motion} from "framer-motion";
import {useState} from "react";

import useLocalStorage from "use-local-storage";


function Navbar (){
    const [isActive, setIsActive] = useLocalStorage('theme' ? 'dark':'light');


    const animation=(prop)=> {
        return {

            initial:{ opacity: 0, translateY:-30 },
            whileInView:{translateY: 0.3, opacity:1},
            transition:{ duration: 0.4,delay: prop}
        }


    }




const darkmode=() => {

   const newtheme = isActive=== 'light' ? 'dark':'light'
setIsActive(newtheme)
}

    return (
        <>
            <div className="parentnav" data-theme={isActive}>
            <nav>
                <motion.div {...animation(0.3)}>
                    <a>@JiovaniFabro</a>
                </motion.div>
                <div>
                    <ul>
                        <motion.li {...animation(0.3)}><a  href="#">Home</a></motion.li>
                        <motion.li {...animation(0.5)} ><a href="#section2">Project</a></motion.li>
                        <motion.li {...animation(0.7)}><a  href="#section3">About</a></motion.li>
                        <motion.li {...animation(0.9)}><a  href="#section4">Contacts</a></motion.li>
                        <motion.li {...animation(1.1)}><label className="switch">
                            <input type="checkbox" onClick={darkmode}>
                            </input>

                          <span className="slider" ></span>
                        </label></motion.li>

                        {/*{isActive=== 'light' ?<l1>ss</l1>:<li>ha</li>}*/}

                    </ul>


                </div>

            </nav>

            </div>
        </>
    );


}
export default Navbar;