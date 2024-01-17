import { Button } from '@mui/material'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation } from 'swiper/modules';
import Card1 from '../../components/Card1';
import Card from '../../components/Card';



const Home = () => {
    return (
        <>

            {/* <div className='dark:bg-[black] h-[100vh]'>
      <Switcher />
        <h1>jfh</h1>
        <div className='text-[white]'>sfjkn</div>
      </div> */}

            {/* header */}


            {/* section 1 */}
            <section className='sec1 dark:bg-[#292727] dark:bg-none'>
                <div className='flex justify-center lg:flex-nowrap sm:flex-wrap lg:gap-[0] sm:gap-[40px] lg:px-[114px] lg:py-[144px] items-center sm:px-[24px] sm:py-[44px]'>
                    {/* left */}
                    <aside className='dark:text-[white]'>
                        <h2 className='text-[#D77474] uppercase font-[600] text-[14px] tracking-[2px]'>Pompeo POttery</h2>
                        <h1 className='lg:text-[48px] sm:text-[32px] font-[900] flex items-start gap-[5px]'>Unique Porcelain <img src="src/assets/img/&.png" className="lg:block sm:hidden" /></h1>
                        <h1 className='lg:text-[48px] sm:text-[32px] font-[900] '>Stone Collection</h1>
                        <p className='text-[#6C6C6C] text-[16px]'>Unique & modern pottery made by our master in porcelain & stones</p>
                        <Button sx={{ marginTop: "50px", bgcolor: "#AC1313", padding: "15px", color: "white" }}>SHOP COLLECTION</Button>
                    </aside>

                    {/* right */}
                    <aside>
                        <img src="src/assets/img/image (34).png" alt="" />
                    </aside>
                </div>
            </section>

            {/* section 2 */}
            <section className='dark:bg-[#292727] '>
                <main className='lg:p-[120px] sm:p-[24px]'>
                    <div className='flex flex-col items-center gap-[20px]'>
                        <h2 className='text-[#D77474] uppercase font-[600] text-[14px] tracking-[2px]'>Product Categories</h2>
                        <div className='lg:flex items-start gap-[5px] sm:flex-wrap dark:text-white'>
                            <h1 className='lg:text-[48px] sm:text-[32px] font-[900]'>Porcelainimg</h1>
                            <img src="src/assets/img/&.png" alt="" />
                            <h1 className='lg:text-[48px] sm:text-[32px] font-[900]'>Pottery</h1>
                        </div>
                    </div>
                </main>

                <div className='flex justify-center lg:gap-[151px] sm:flex-wrap sm:gap-[50px]'>
                    <img src="src/assets/img/Frame (10).png" alt="" />
                    <img src="src/assets/img/Frame (11).png" alt="" />
                    <img src="src/assets/img/Frame (12).png" alt="" />
                </div>


                <div className='lg:py-[80px] sm:flex-wrap sm:py-[54px] lg:flex-nowrap sm:px-[24px] flex justify-center lg:px-[134px] sm:gap-[50px] lg:gap-[133px]'>
                    {/* left */}
                    <aside>
                        <h1 className='text-[29px] dark:text-[white] font-[900] pb-[20px]'>Hand Grafted <br></br><span>Pottery since 1990</span></h1>
                        <p className='dark:text-[white] text-[#6C6C6C]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
                    </aside>

                    {/* right */}
                    <aside>
                        <h1 className='text-[29px] dark:text-[white] font-[900] pb-[20px]'>We Provide Premium<br></br><span>Pottery Produts</span></h1>
                        <p className='dark:text-[white] text-[#6C6C6C]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
                    </aside>
                </div>

            </section>

            <hr></hr>

            {/* section 3 */}
            <section className='dark:bg-[#292727] lg:py-[120px] sm:p-[24px] lg:px-[144px]'>
                <div className='flex flex-col gap-[80px]'>
                    <main className='flex sm:flex-wrap justify-center lg:gap-[220px] items-center'>
                        {/* left */}
                        <aside>
                            <img src="src/assets/img/Frame (13).png" alt="" />
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

            <hr></hr>

            {/* section 4 */}
            <section className='dark:bg-[#292727] lg:py-[120px] sm:p-[35px] lg:px-[144px]'>
                <aside className='dark:text-[white] flex flex-col items-center'>
                    <h2 className='text-[#D77474] uppercase font-[600] text-[14px] tracking-[2px]'>Our online store</h2>
                    <h1 className='lg:text-[48px] sm:text-[32px] font-[900] flex items-start gap-[5px]'>Pottery Collection</h1>
                </aside>
            </section>

            {/* section 5*/}
            <section className='dark:bg-[#292727]'>
                <div className='dark:bg-[#292727]'>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide ><Card img={'src/assets/card/IMAGE (40).png'} p={"Decor Plate"} h1={"$ 65.00 USD"} str={"src/assets/card/Rectangle (1).png"} /></SwiperSlide>
                        <SwiperSlide><Card img={'src/assets/card/Frame (15).png'} p={"Decor Plate"} h1={"$ 65.00 USD"} str={"src/assets/card/Rectangle (1).png"} /></SwiperSlide>
                        <SwiperSlide><Card img={'src/assets/card/Frame (16).png'} p={"Decor Plate"} h1={"$ 65.00 USD"} str={"src/assets/card/Rectangle (1).png"} /></SwiperSlide>
                        <SwiperSlide><Card img={'src/assets/card/Frame (17).png'} p={"Decor Plate"} h1={"$ 65.00 USD"} str={"src/assets/card/Rectangle (1).png"} /></SwiperSlide>
                        <SwiperSlide><Card img={'src/assets/card/Frame (18).png'} p={"Decor Plate"} h1={"$ 65.00 USD"} str={"src/assets/card/Rectangle (1).png"} /></SwiperSlide>
                        <SwiperSlide><Card img={'src/assets/card/Frame (19).png'} p={"Decor Plate"} h1={"$ 65.00 USD"} str={"src/assets/card/Rectangle (1).png"} /></SwiperSlide>
                    </Swiper>
                </div>
                <div className='flex justify-center lg:py-[80px] sm:py-[15px] dark:bg-[#292727]'>
                    <Button sx={{ marginTop: "50px", bgcolor: "#AC1313", padding: "15px", color: "white" }}>VIEW ALL PRODUCTS</Button>
                </div>
            </section>

            {/* section 6 */}
            <section className='sec2 dark:bg-none dark:bg-[#292727]'>
                <aside className='dark:text-[white] lg:px-[144px] lg:py-[120px] sm:px-[24px] sm:py-[50px]'>
                    <h2 className='text-[#D77474] uppercase font-[600] text-[14px] tracking-[2px]'>Pompeo POttery</h2>
                    <h1 className='lg:text-[48px] sm:text-[32px] font-[900] flex items-start gap-[5px]'>Ready to start shopping?</h1>
                    <p className='text-[#6C6C6C] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit . Suspendisse varius enim in eros elementum.</p>
                    <Button sx={{ marginTop: "50px", bgcolor: "#AC1313", padding: "15px", color: "white" }}>NEW COLLECTION</Button>
                </aside>
            </section>

            {/* section 7 */}
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
                        <img src="src/assets/Rectangle (2).png" alt="" />
                        <p>Sign up for our newsletter</p>
                    </div>
                </div>

            </section>

            <hr></hr>
        </>
    )
}

export default Home