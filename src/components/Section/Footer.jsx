import React from 'react'
import Logo from '../../assets/img/logo_black.svg'

const Footer = () => {
    return (
        <div className='footer_wrap'>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div>
                <div className="info">
                    <div className="top">
                        <p>매장 안내</p>
                        <p>공지사항</p>
                        <p>FILA MEMBERSHIP</p>
                        <p>단체 판매</p>
                        <p>대리점 개설문의</p>
                        <p>FILA 입찰 참여 안내</p>
                    </div>
                    <div className="middle">
                        <p>
                            서울특별시 성북구 보문로 35 휠라코리아(주)  대표이사: 김지헌<br />
                            사업자등록번호 : 716-81-01573 <em>사업자정보확인</em> 통신판매업신고 : 제 2020-서울강동-0160 호<br />
                            개인정보 관리책임자 : 이학우<br />

                            본 사이트의 상품이미지 저작권은 휠라코리아(주)에 있으며, 내용의 무단 복제를 금합니다.<br />
                            콘텐츠산업진흥법에 의한 콘텐츠보호 안내<em>자세히 보기</em>
                        </p>
                    </div>
                    <div className="bottom">
                        <p>통합회원 이용약관</p>
                        <p>개인정보 처리방침</p>
                        <p>제보센터</p>
                    </div>
                </div>
                <div className="cs_center">
                    <div className="top">
                        <p>CS CENTER</p>
                    </div>
                    <div className="middle">
                        <p>
                            1577-3472<br />
                            filaonline@fila.com<br />
                            <em>평일 월 - 금 : 09시 - 18시(공휴일 제외)</em>
                        </p>
                    </div>
                    <div className="bottom">
                        <p>KOREA</p>
                        <p>FAMILY SITE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer