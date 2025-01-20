import React from 'react'
import About from '../Nav/About'
import Skill from '../Nav/Skill'
import Contact from '../Nav/Contact'
import Project from '../Nav/Project'
import Story from '../Nav/Story'

const Contents = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth'});
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  };

  return (
    <div>
      <div className="scroll_top" onClick={scrollTop}>
       <span class="material-symbols-outlined">arrow_drop_up</span>
      </div>
    <div className="contents">
      <div className="about_top">
      <img src={process.env.PUBLIC_URL + "/images/development.webp"} alt="Development" className="about_img"/>
      <div className="about_ment">
        <h1>항상 노력하는 풀스텍 신입 개발자 류제욱 입니다.</h1>
        <p>이젠(EZEN) 컴퓨터 아카데미에서 6개월 동안 JAVA (서블릿, 스프링, 스프링부트) 기반의 풀스택 과정을 공부하면서 백엔드 코딩의 전반적인 과정을 수료하였습니다.</p>
      </div>
     </div>
        <div className="about_btn" onClick={() => scrollToSection('about')}>
          <p>더 알아보기 <span class="material-symbols-outlined">south</span></p>
        </div>
        <div id="about_page">
        <About/>
        </div>
        <Skill/>
        <Story/>
        <Project/>
        <Contact/>

    </div>
    </div>
 
 
  )
}

export default Contents