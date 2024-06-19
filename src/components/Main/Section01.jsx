import React from 'react'
import Img01 from '../../assets/img/section01_1.png'
import { Link } from 'react-router-dom'

const Section01 = () => {
    return (
        <div className='section01_wrap'>
            <div className="slide" style={{ backgroundImage: `url(${Img01})` }}>
                <div className="text">
                    <h2>24 NEW 인터런</h2>
                    <Link to='/'>자세히 보기</Link>
                </div>
            </div>
        </div>
    )
}

export default Section01