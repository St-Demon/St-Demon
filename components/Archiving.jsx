import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { SiNaver } from "react-icons/si"

const socials = [
    {
        icon: <FaGithub className="text-3xl" />,
        path: "https://github.com/St-Demon",
        title: "GitHub",
        description: "소스 코드 저장소"
    },
    {
        icon: <SiNaver className="text-3xl" />,
        path: "https://blog.naver.com/ttong_ji",
        title: "임동진의 블로그",
        description: "공부 및 지식 공유 목적의 블로그"
    },
];

const Socials = () => {
  return (
    <div className="flex flex-col items-center p-5 rounded-lg">
      <h2 className="flex items-center text-5xl font-bold text-white mb-8">
        Archiving
      </h2>
      <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
        {socials.map((item, index) => {
            return (
                <Link 
                    key={index} 
                    href={item.path} 
                    className="flex flex-col items-center text-center bg-white p-5 rounded-lg shadow-lg transform transition-transform hover:scale-105 text-lg space-y-4"
                >
                    <div className="flex items-center">
                        <span className="text-black">
                            {item.icon}
                        </span>
                        <div className="font-bold mt-2 text-black ml-2">{item.title}</div>
                    </div>
                    <span className="text-blue-500 mt-1">
                        {new URL(item.path).hostname}
                    </span>
                    <div className="text-gray-600 mt-1">{item.description}</div>
                </Link>
            )
        })}
      </div>
    </div>
  )
}

export default Socials