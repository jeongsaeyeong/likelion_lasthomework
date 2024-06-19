import React from 'react'
import IMG01 from '../../assets/img/section03_1.png'
import IMG02 from '../../assets/img/section03_2.png'
import { Link } from 'react-router-dom'

const Section03 = () => {
    return (
        <div className='section03_wrap'>
            <h2>기획전</h2>
            <div className="main">
                <div>
                    <img src={IMG01} alt="" />
                    <h2>FILA CUSTOM STUDIO</h2>
                    <p>최상의 플레이를 위한 맞춤형 테니스화</p>
                    <Link to='/'>자세히 보기</Link>
                </div>
                <div>
                    <img src={IMG02} alt="" />
                    <h2>Pertex LIfe</h2>
                    <p>휠라 퍼텍스 시리즈와 함께하는 퍼텍스 라이프</p>
                    <Link to='/'>자세히 보기</Link>
                </div>
            </div>
        </div>
    )
}

export default Section03