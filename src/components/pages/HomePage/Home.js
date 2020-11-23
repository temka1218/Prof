import React from 'react'
import Choose from '../../Choose'
import HeroSection from '../HeroSection'
import {homeObjOne} from './Data'

function Home() {
    return (
        <>
        <HeroSection {...homeObjOne}/>
        <Choose/>

            
        </>
    )
}
export default Home
