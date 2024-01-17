import React from 'react'
import Card from '../../components/Card'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation } from 'swiper/modules';
import { Button } from '@mui/material';

function About() {
    return (
        <>
            {/* section 1*/}
            <section className='dark:bg-[#292727] lg:py-[120px]'>
                <div className='dark:bg-[#292727]'>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper dark:bg-[#292727]">
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

            {/* section 2 */}
            <section className='sec2 dark:bg-none dark:bg-[#292727]'>
                <aside className='dark:text-[white] lg:px-[144px] lg:py-[120px] sm:px-[24px] sm:py-[50px]'>
                    <h2 className='text-[#D77474] uppercase font-[600] text-[14px] tracking-[2px]'>Pompeo POttery</h2>
                    <h1 className='lg:text-[48px] sm:text-[32px] font-[900] flex items-start gap-[5px]'>Ready to start shopping?</h1>
                    <p className='text-[#6C6C6C] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit . Suspendisse varius enim in eros elementum.</p>
                    <Button sx={{ marginTop: "50px", bgcolor: "#AC1313", padding: "15px", color: "white" }}>NEW COLLECTION</Button>
                </aside>
            </section>
        </>
    )
}

export default About