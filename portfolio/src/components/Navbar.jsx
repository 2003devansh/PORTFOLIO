import { useState } from "react";
import {motion, spring} from "framer-motion"

const navItems = ["The Signal", "Alter Ego", "Blueprints", "Encrypted" ];

export default function Navbar(){
    const [hovered,setHovered] = useState(null) ;
    return (
        <nav className="fixed top-0 left-0 w-full flex justify-center items-center h-20 bg-black/90 backdrop-blur-md z-50">
            <ul className="flex gap-12 text-lg text-gray-300">
                {navItems.map((items,index)=>{
                    return <motion.li
                    key={index}
                    className="relative cursor-pointer uppercase"
                    onMouseEnter={()=> setHovered(index)}
                    onMouseLeave={()=> setHovered(null)}
                    initial ={{opacity: 0}}
                    animate ={{opacity: 1}}
                    transition={{duration: 0.8}}
                    >
                        <motion.span
                        className="relative"
                        animate ={hovered == index ? {scale: 1.1 , textShadow:"0px 0px 8px rgba(255, 0, 0, 0.8)"} : {scale: 1}}
                        transition={{type: "spring", stiffness: 300}}
                        >
                            {items}
                        </motion.span>
                        <motion.div
                        className="absolute left-0 w-full h-[2px] bg-red-600"
                        initial ={{width: 0}}
                        animate ={hovered === index ? {width: "100%"} : {width : 0}}
                        transition={{duration: 0.3}}
                        />
                    </motion.li>
                })}
            </ul>
        </nav>
    )
}