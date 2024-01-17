
import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Switcher from '../components/Switcher'
import Card1 from '../components/Card1'


function Layout() {

    const { pathname } = useLocation()
    return (
        <>
            {/* header */}
            <header>
                <nav className='flex items-center lg:justify-between sm:gap-[150px] sm:justify-center sm:py-[24px] lg:px-[180px] lg:py-[30px] dark:bg-[#292727]'>
                    <img src="src/assets/img/Pompeo.png" />
                    <ul className='items-center lg:gap-[40px] flex text-[#6C6C6C] tracking-[2px] dark:text-white'>

                        <Link to="/">
                            <li className='uppercase sm:hidden lg:block' style={{ color: pathname  === "/" ? "#AC1313" : "green" }}>Home</li>
                        </Link>

                        <Link to="/about">
                            <li className="uppercase sm:hidden lg:block" style={{ color: pathname  === "/about" ? "#AC1313" : "green" }}>About</li>
                        </Link>

                        <Link to="/shop">
                            <li className="uppercase sm:hidden lg:block" style={{ color: pathname  === "/shop" ? "#AC1313" : "green" }}>Shop</li>
                        </Link>
                        <Link to="/notfound"></Link>
                        <div className='lg:flex items-center sm:hidden gap-[10px] text-[black]  dark:text-[white]'>
                            <img src="src/assets/Rectangle.png" className='dark:bg-[black]' />
                            <img src="src/assets/img/IMAGE (37).png" />
                            <p>Cart</p>
                        </div>
                        <Switcher />
                    </ul>
                </nav>
            </header >


            <main>
                <Outlet />
            </main>

            {/* footer */}
            <footer className='lg:py-[100px] lg:px-[120px] dark:bg-[#292727] dark:text-[white] sm:px-[24px] sm:py-[54px]'>
                <nav className=' text-center text-[#6C6C6C]'>
                    <img src="src/assets/img/Pompeo.png" className='block m-[auto] pb-[20px]' />
                    <p>I have always striven to fix beauty in wood, stone,</p>
                    <p>glass or pottery, that has been my creed.</p>
                </nav>

                {/* divs */}
                <main className='flex lg:justify-between sm:justify-center lg:px-[144px] lg:py-[80px] sm:flex-wrap sm:px-[20px] sm:py-[45px] sm:gap-[40px]'>
                    <Card1 img={"src/assets/card1/IMAGE (43).png"} h1={"EMAIL"} p={"pompeopotery@gmail.com"} />
                    <Card1 img={"src/assets/card1/IMAGE (44).png"} h1={"EMAIL"} p={"pompeopotery@gmail.com"} />
                    <Card1 img={"src/assets/card1/IMAGE (45).png"} h1={"EMAIL"} p={"pompeopotery@gmail.com"} />
                </main>
            </footer>
            <hr></hr>
            <main className='lg:p-[30px] flex justify-center gap-[40px] bg-[rgba(219, 219, 219, 0.10)] dark:bg-[#292727] dark:text-white sm:px-[54px] sm:py-[24px]'>
                <p> <span className='text-[#6C6C6C] font-normal'>Template design by</span> Dorian Hoxha Image License Info <span className='text-[#6C6C6C] font-normal'>Powered by</span> Webflow</p>
            </main>
        </>
    )
}

export default Layout