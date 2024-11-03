import Link from "next/link"
import { Button } from "./ui/button"

// components
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="py-8 xl:py12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* 로고 */}
            <Link href="/">
            <h1 className="text-4xl font-semibold">
                임동진 <span className="text-accent">.</span>
            </h1>
            </Link>

            {/* 상단 메뉴바 */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">
                <MobileNav />
            </div>


        </div>
    
    </header>
  )
}

export default Header