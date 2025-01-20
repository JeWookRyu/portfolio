import React, { useState } from 'react';
import { FcIdea } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Spring_board",
    description: "spring과 mysql을 사용한 게시판제작"
                +"로그인과 회원관리, 페이징, 게시판 사이트에 기본적인 기능 수행이 가능합니다.",
    link: "https://github.com/JeWookRyu/spring_board",
    image: process.env.PUBLIC_URL + "/images/spboard.png"
  },
  {
    title: "Team_University",
    description: "5인 팀프로젝트로 대학교홈페이지를 제작했습니다. 학생관리 및 관심과목을 담아서 저장할 수 있는 기능을 구현했습니다.",
    link: "https://github.com/JeWookRyu/Team_University",
    image: process.env.PUBLIC_URL + "/images/university.png"
  },
  {
    title: "React_web1",
    description: "리액트로 작업한 쇼핑몰 메인입니다. 리액트를 사용함으로써 기존의 웹디자인과정이 수월해짐을 느꼈습니다.",
    link: "https://github.com/JeWookRyu/react_web1_shop?tab=readme-ov-file",
    image: process.env.PUBLIC_URL + "/images/react_shop.png"
  },
  {
    title: "LH_web",
    description: "VScode를 사용하여 LH홈페이지를 만들어 기초적인 웹제작과정을 이해 했습니다.",
    link: "https://github.com/JeWookRyu/LH_web?tab=readme-ov-file",
    image: process.env.PUBLIC_URL + "/images/lh.png"
  },
  {
    title: "ski_web",
    description: "HTML과 CSS를 활용하여 스키관련 블로그를 제작했습니다.",
    link: "https://github.com/JeWookRyu/ski_web",
    image: process.env.PUBLIC_URL + "/images/ski.png"
  },
  {
    title: "Rsp_game",
    description: "javascript를 이용하여 랜덤으로 가위바위보를 내는 컴퓨터와 게임을 할 수 있습니다.",
    link: "https://github.com/JeWookRyu/rsp_game",
    image: process.env.PUBLIC_URL + "/images/rsp.png"
  },
  {
    title: "clock",
    description: "javascript로 시계를 만들었고 색상변경 기능이 있습니다.",
    link: "https://github.com/JeWookRyu/clock?tab=readme-ov-file",
    image: process.env.PUBLIC_URL + "/images/clock.png"
  },
  {
    title: "Wedding_blog",
    description: "HTML과 CSS 활용한 웨딩관련 블로그 입니다.",
    link: "https://github.com/JeWookRyu/Wedding_web?tab=readme-ov-file",
    image:  process.env.PUBLIC_URL + "/images/wedding.png"
  },
  {
    title: "JSP_board",
    description: "JSP및 Servlet으로 만든 게시판작업입니다. MYSQL을 활용하여 회원관리 및 게시글 관리등의 기능을 구현했습니다.",
    link: "https://github.com/JeWookRyu/JSP_BOARD?tab=readme-ov-file",
    image: process.env.PUBLIC_URL + "/images/jspboard.png"
  },
  {
    title: "MYSHOP",
    description: "javascript를 활용하여 쇼핑몰화면의 변화와 장바구니 기능을 구현했습니다.",
    link: "https://github.com/JeWookRyu/myshop/blob/main/README.md",
    image:  process.env.PUBLIC_URL + "/images/myshop.png"
  },
  {
    title: "parking_game",
    description: "javascript를 이용해 간단한 자동자 주차게임을 만들었습니다.",
    link: "https://github.com/JeWookRyu/parking_game",
    image: process.env.PUBLIC_URL + "/images/parkingcar.png"
  },
];

const Project = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div id="project" className="project">
      <h1><FcIdea /> Project </h1> 
      <a href="https://github.com/JeWookRyu" className="github_link" target="_blank" rel="noopener noreferrer"><p>github 이동 <FaGithub /></p></a>
      <div className="project_list">
        {projects.slice(0, showMore ? projects.length : 6).map((project, index) => (
          <div className="project_box" key={index} style={{ backgroundImage: `url(${project.image})` }}>
            <h5>{project.title}</h5>
            <div className="project_content">
    
              <p>
                {project.description.split('\n').map((line, index) => (  /**줄바꿈 */
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project <FaGithub />
              </a>
            </div>
          </div>
        ))}
   
   <button className="project_btn" onClick={handleShowMore}>
     {showMore ? "접기" : "더보기"}
   </button>

      </div>
   
    </div>
  );
};

export default Project;
