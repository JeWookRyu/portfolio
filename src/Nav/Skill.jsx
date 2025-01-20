import React from 'react'
import { FcApproval } from "react-icons/fc";
import { FaJava,FaReact,FaGithub } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { BsFiletypeHtml, BsFiletypeCss } from "react-icons/bs";
import { RiJavascriptFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";



const skill = () => {
  return (
    <div id="skill" className="skill">
        <h1><FcApproval />Skill</h1>
        <div className="Skill_content">
            <div className="Skill_text">
                <p></p>
            </div>
            <ul className="Skill_list">
            <li className="skill_java">
                    <span>
                    <FaJava />
                    <h4>Java</h4>
                    </span>
                    <div className="progress">
                        <div className="progress-bar w-75 color-java" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <span>65%</span>
                        </div>
                    </div>
                    <p className="skill_text">객체 지향 프로그래밍의 핵심 개념을 익히고, 다양한 프로젝트에서 활용했습니다.</p>
                </li>
                <li>
                    <span>
                    <SiSpring />
                    <h4>Spring</h4>
                    </span>
                    <div className="progress">
                        <div className="progress-bar w-55 color-spring" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                        <span>55%</span>
                        </div>
                    </div>
                    <p className="skill_text">Spring Framework로 웹 애플리케이션을 개발하며, 설계와 구현 경험을 쌓았습니다.</p>
                </li>
                <li>
                    <span>
                    <BsFiletypeHtml />
                    <h4>HTML</h4>
                    </span>
                    <div className="progress">
                        <div className="progress-bar w-60 color-html" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                        <span>60%</span>
                        </div>
                    </div>
                    <p className="skill_text">웹 개발의 기초 언어로, 시맨틱 구조를 고려한 마크업 작업을 학습했습니다.</p>
                </li>
                <li>
                    <span>
                    <BsFiletypeCss />
                    <h4>CSS</h4>
                    </span>
                    <div className="progress">
                        <div className="progress-bar w-60 color-css" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                        <span>60%</span>
                        </div>
                    </div>
                    <p className="skill_text">CSS를 활용해 다양한 스타일링과 레이아웃 디자인을 구현했습니다.</p>
                </li>
                <li>
                    <span>
                    <RiJavascriptFill />
                    <h4>JavaScript</h4>
                    </span>
                    <div className="progress">
                        <div className="progress-bar w-80 color-javascript" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                        <span>80%</span>
                        </div>
                    </div>
                    <p className="skill_text">동적인 웹 페이지 개발과 조작을 통해 JavaScript의 실력을 키웠습니다.</p>
                </li>
                <li>
                    <span>
                    <GrMysql />
                    <h4>MySQL</h4>
                    </span>
                    <div className="progress">
                        <div className="progress-bar w-40 " role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                        <span>40%</span>
                        </div>
                    </div>
                    <p className="skill_text">MySQL을 사용해 데이터베이스 설계와 작업을 수행하며 데이터 처리 능력을 향상시켰습니다.</p>
                </li>
                <li>
                    <span><FaReact />
                    <h4>REACT</h4></span>
                    <div className="progress">
                        <div className="progress-bar w-50 color-react" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                        <span>50%</span>
                        </div>
                    </div>
                    <p className="skill_text">React로 컴포넌트 기반의 프론트엔드 개발을 익히며, 상태 관리와 라우팅을 구현했습니다.</p>
                </li>
                <li>
                    <span><FaGithub />
                    <h4>GitHub</h4></span>
                    <div className="progress">
                        <div className="progress-bar w-50 color-github" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                        <span>50%</span>
                        </div>
                    </div>
                    <p className="skill_text">GitHub를 활용해 버전 관리를 체계적으로 진행하며, 협업 능력을 키웠습니다.</p>
                </li>
            </ul>
        </div>
  </div>
  )
}

export default skill
