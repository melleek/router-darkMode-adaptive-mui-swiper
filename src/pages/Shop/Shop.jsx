import { Button } from '@mui/material'
import React from 'react'

function Shop() {
    return (
        <>
            {/* section 1 */}
            <section className='dark:bg-[#292727] lg:py-[120px] sm:p-[24px] lg:px-[144px]'>
                <div className='flex flex-col gap-[80px]'>
                    <main className='flex sm:flex-wrap justify-center lg:gap-[220px] items-center'>
                        {/* left */}
                        <aside>
                            <img src="src/assets/img/Frame (13).png"/>
                        </aside>

                        {/* rigth */}
                        <aside className='dark:text-white lg:w-[388px] flex flex-col gap-[23px]'>
                            <h1 className='font-[900] text-[24px]'>Gold & Black Pottery</h1>
                            <p className='text-[#6C6C6C]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.</p>
                            <p className='text-[14px] font-[900]'>View Details</p>
                        </aside>
                    </main>


                    <main className='flex flex-wrap justify-center lg:gap-[220px] items-center'>
                        <img src="src/assets/img/Frame (14).png" className="sm:block lg:hidden" />
                        {/* rigth */}
                        <aside className='dark:text-white lg:w-[388px] flex flex-col gap-[23px]'>
                            <h1 className='font-[900] text-[24px]'>Gold & Black Pottery</h1>
                            <p className='text-[#6C6C6C]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.</p>
                            <p className='text-[14px] font-[900]'>View Details</p>
                        </aside>

                        {/* left */}
                        <aside>
                            <img src="src/assets/img/Frame (14).png" className="lg:block sm:hidden" />
                        </aside>
                    </main>
                </div>
            </section>


            {/* section 2 */}
            <section className='lg:px-[144px] lg:py-[130px] sm:px-[5px] sm:py-[50px] bg-[#f5f2f2] dark:bg-[#292727] dark:text-white'>
                <div className='flex flex-col items-center sm:gap-[40px] lg:gap-[40px] '>
                    <img src="src/assets/IMAGE (42).png" alt="" />
                    <h2 className='text-[#D77474] uppercase font-[600] text-[14px] tracking-[2px]'>Latest news</h2>
                    <h1 className='lg:text-[48px] sm:text-[32px] font-[700] flex items-start gap-[10px]'>Latest news<img src="src/assets/img/&.png" className="lg:block sm:hidden" /> New updates </h1>
                </div>
                <div className='lg:py-[100px] sm:py-[50px]'>
                    <div className='flex items-center justify-center'>
                        <input type="text" className='p-[17px] w-[320px]' placeholder='Enter your email' />
                        <Button sx={{ bgcolor: "black", padding: "15px", color: "white" }}>SUBSCRIBE</Button>
                    </div>
                    <div className='flex items-center justify-center lg:py-[40px] gap-[14px] sm:py-[20px]'>
                        <img src="src/assets/Rectangle (2).png" />
                        <p>Sign up for our newsletter</p>
                    </div>
                </div>
            </section>

            <hr></hr>
        </>
    )
}

export default Shop