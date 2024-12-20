import Link from "next/link"

import { FaGithub } from "react-icons/fa"
import { FaN } from "react-icons/fa6";


const socials = [
    {icon: <FaGithub />, path: "https://github.com/St-Demon"},
    {icon: <FaN />, path: "https://blog.naver.com/ttong_ji"},

]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=> {
            return (
            <Link 
            key={index} 
            href={item.path} 
            className={iconStyles}
            >
                {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Socials