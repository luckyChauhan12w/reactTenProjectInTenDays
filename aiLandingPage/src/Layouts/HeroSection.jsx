import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/NavBar'
import Squares from '../AnimationLogic/Squares'

const HeroSection = () => {
    return (
        <section className='bg-black h-screen relative text-white'>
            <Squares
                speed={0.4}
                squareSize={40}
                direction='diagonal' // up, down, left, right, diagonal
                borderColor='#c47cf7'
                hoverFillColor='#222'
                className="absolute"
            />
            <div className='absolute top-0 w-full h-screen'>
                <Navbar />
                <Hero />
            </div>
        </section>
    )
}

export default HeroSection