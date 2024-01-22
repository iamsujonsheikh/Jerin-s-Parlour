import React from 'react'
import NavBar from './components/shared/Navbar'
import Banner from './components/home/Banner'
import Services from './components/home/Services'
import Profession from './components/home/Profession'
import Testimonials from './components/home/Testimonials'
import Message from './components/home/Message'
import Footer from './components/shared/Footer'

const Home = () => {
    return (
        <main className='bg-slate-100'>
            <Banner />
            <Services />
            <Profession />
            <Testimonials />
            <Message />
        </main >
    )
}

export default Home