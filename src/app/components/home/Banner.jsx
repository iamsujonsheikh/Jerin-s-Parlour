import Image from 'next/image'
import React from 'react'
import BeautiQueen from "../../../assets/images/banner-queen.png";
import Lottie from "lottie-react";
import Parlour from "../../../assets/animate/banner.json";
import MaxWidthWrapper from '@/app/lib/MaxWidthWrapper';

const Banner = () => {
    return (
        <main className='w-full'>
            <MaxWidthWrapper>
                <div className='md:flex px-2 justify-around my-4 md:my-32 items-center bg-slate-100 space-y-2'>
                    <div className='space-y-4'>
                        <h1 className='text-3xl md:text-5xl font-bold md:leading-tight'>
                            BEAUTY SALON <br />
                            FOR EVERY <span className='text-blue-300'>WOMEN</span>
                        </h1>

                        <p className='text-medium text-slate-500'>
                            Unleash your beauty at our salon. Tailored treatments, <br /> expert care—because every woman deserves to feel stunning. <br /> Elevate your confidence and embrace the allure. <br /> Beauty redefined, just for you.
                        </p><br />

                        <button className='bg-pink-500 rounded px-4 py-2 text-slate-100 my-2'>Get on Appoinment</button>
                    </div>

                    <div className='md:w-[400px]'>
                        <Image
                            src={BeautiQueen}
                            alt='Banner image'
                            className='rounded'
                        />
                        {/* <Lottie
                    animationData={Banner}
                    height={500}
                    width={500}
                    loop={true}
                /> */}
                    </div>
                </div>
            </MaxWidthWrapper>
        </main>
    )
}

export default Banner