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
                <img src={Map} alt="Map" />
                <img src={Search} alt="Search" />
                <img src={Mypage} alt="Mypage" />
                <img src={Mybag} alt="Mybag" />
            </div>
        </div>
    )
}

export default Headers