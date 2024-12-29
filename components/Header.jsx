"use client"

import Link from "next/link"

const Header = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    
    <header className="py-8 xl:py12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* 로고 */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    동진&apos;s portfolio<span className="text-accent"></span>
                </h1>
            </Link>

            {/* 네비게이션 메뉴 */}
            <nav className="hidden lg:flex gap-8">
                <a 
                    href="#socials" 
                    onClick={(e) => handleScroll(e, 'socials')}
                    className="text-[15px] hover:text-accent transition-all duration-300"
                >
                    Socials
                </a>
                <a 
                    href="#history" 
                    onClick={(e) => handleScroll(e, 'history')}
                    className="text-[15px] hover:text-accent transition-all duration-300"
                >
                    History
                </a>
                <a 
                    href="#aboutme" 
                    onClick={(e) => handleScroll(e, 'aboutme')}
                    className="text-[15px] hover:text-accent transition-all duration-300"
                >
                    About Me
                </a>
                <a 
                    href="#projects" 
                    onClick={(e) => handleScroll(e, 'projects')}
                    className="text-[15px] hover:text-accent transition-all duration-300"
                >
                    Projects
                </a>
            </nav>
        </div>
    </header>
  )
}

export default Header