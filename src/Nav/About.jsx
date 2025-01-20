import React, { useState, useContext } from 'react';
import { FcDebt } from "react-icons/fc";
import { Container, Row, Col, Image } from 'react-bootstrap';
import { DataContext } from '../context/DataProvider';

const About = () => {
  const { about } = useContext(DataContext);
  const [showCertificate, setShowCertificate] = useState(false); //수료증 보이기 상태 추가

  // 데이터 로드 확인
  if (!about) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }

  const handleinfo = () => {
    setShowCertificate(!showCertificate); //상태 토글
  };

  return (
    <Container id="about">
      <h1><FcDebt /> About</h1>
      <Row className="border-bottom">
        <Col md={8}>
          <div className="about-container">
            <div className="myself">
      
              <div className="myself_box">  
                <span className="material-symbols-outlined">person</span>
                <h3>이름</h3>
                <p>류제욱</p>
              </div>
              <div className="myself_box">  
                <span className="material-symbols-outlined">calendar_month</span>
                <h3>생년월일</h3>
                <p>1997.06.12</p>
              </div>
              <div className="myself_box">  
                <span className="material-symbols-outlined">home_pin</span>
                <h3>주소</h3>
                <p>서울시 광진구 구의동</p>
              </div>
              <div className="myself_box">  
                <span className="material-symbols-outlined">school</span>
                <h3>학력</h3>
                <p>한양사이버대학교<br/>(재학中)</p>
              </div>

            </div>
            <div className="about-header">
              <h2>INTJ <h5>(전략가형)</h5></h2>
              <p>
                비전공자 풀스택 신입 개발자를 희망하고 있습니다. <br/> 
                끈기있게 탐구하고 연구하고 발견해내는 것에 큰 매력을 느껴 도전했습니다!
              </p>
            </div>
            <div className="about-grid">
              <div className="about-box">
                <h3>
                <span className="material-symbols-outlined">sentiment_very_satisfied</span>90%
                </h3>
                <p>협업능력 함께 일하는 동료들을 지치지 않고 즐겁게 일하는 협업능력을 가지고 있습니다.</p>
              </div>
              <div className="about-box">
                <h3>
                <span className="material-symbols-outlined">fact_check</span>75%
                </h3>
                <p>
                  문서를 작성하여 새로운 것을 발견하면 모든 것을 기록하기 좋아합니다. 핸드폰 캘린더 / 엑셀 등
                  개괄적으로 정리합니다!
                </p>
              </div>
              <div className="about-box">
                <h3>
                <span className="material-symbols-outlined">schedule</span>24h
                </h3>
                <p>
                  계획형 인간 시간 단위로 할 일을 정리해서 일하고 시간을 효율적으로 사용합니다.
                </p>
              </div>
              <div className="about-box">
                <h3>
                <span className="material-symbols-outlined">lightbulb</span>80%
                </h3>
                <p>
                  아이디어를 일할 때 명쾌하게 여러 효율적으로 일할 수 있는 방안을 생각하며 일하며, 기한 내에 일을
                  마무리할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4} className="profile">
          <Image src={process.env.PUBLIC_URL + "/images/me.png"} alt="about_icon"  className="about_icon" fluid />
          <Image src={process.env.PUBLIC_URL + "/images/jewook.jpg"} alt="about_profile"  className="about_profile" fluid />
          <div className="profile_write">
          <div className="profile_write_box">
              <h3>청년 지원내역</h3>
              <p className="date">2024.12 - 2025.12 내에 취업</p>
              <p className="details">
                사업주가 지원 대상 근로자 고용 후 6개월마다 <br/>2회(즉, 1년) 간 기업에 지원금 지급
              </p>
            </div>
            <div className="profile_write_box">
              <h3>과정 수료내역</h3>
              <p className="date">2023.12 - 2024.06 김포 이젠아카데미</p>
              <p className="details">
                JAVA(JSP, Spring, Spring-boot), React, Node.js, Javascript, Bootstrap, HTML,
                CSS, Git, AWS, VSCode, Figma 과정을 거쳐 수료했습니다.
              </p>
              <p className="more-info" onClick={handleinfo}>수료증 확인</p>
            </div>
            {showCertificate && (
            <img src={process.env.PUBLIC_URL + "/images/ezen.png"} alt="ezen" className="ezen"/>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
