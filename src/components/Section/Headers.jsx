import React from 'react'
import Nav from './Nav'
import Logo from '../../assets/img/logo.svg'
import Map from '../../assets/img/map.svg'
import Search from '../../assets/img/search.svg'
import Mypage from '../../assets/img/mypage.svg'
import Mybag from '../../assets/img/mybag.svg'

const Headers = () => {
    return (
        <div className='header_wrap'>
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <Nav />
            <div className="btn_wrap">
                <img className='Map' src={Map} alt="Map" />
                <img className='Search' src={Search} alt="Search" />
                <img className='Mypage' src={Mypage} alt="Mypage" />
                <img className='Mybag' src={Mybag} alt="Mybag" />
            </div>
        </div>
    )
}

export default Headers