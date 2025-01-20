import React from 'react'
import { FcFilmReel } from "react-icons/fc";

const Story = () => {
  return (
    <div id="story" className="story">
      <h1><FcFilmReel />Story</h1>
          <h3>주요 경력</h3> 
          <div className="history-box">
      <h4>2023/12 ~ 2024/06 <span>김포 이젠아카데미 자바백엔드풀스택 과정 수료</span> </h4>
          <p><span className="dot1">●</span>총 6개월 Full stack 개발자 과정</p>
          <p><span className="dot1">●</span>javascript / 데이터베이스 / React.js / html/css / node.js 등 풀스택 개발환경 구성</p>
          <p><span className="dot1">●</span>팀프로젝트 위주의 개발에 집중하여 협업능력 강화</p>
      </div>
      <div className="history-box">
      <h4>2021/12 ~ 2023/11 <span>(주)마리디앤씨(주거용 건물 개발 및 공급업) / 개발부 사원</span> </h4>
          <p><span className="dot1">●</span>안양 디오르나인 오피스텔 분양관련 업무</p>
          <p><span className="dot1">●</span>부평 오피스텔부지 PF관련 업무</p>
          <p><span className="dot1">●</span>신규 사업지 개발 및 타당성 분석작성 및 보고업무</p>
      </div>
      <div className="history-box">
      <h4>2021/06 ~ 2021/12 <span>(주)진호실업(배관 및 소방설비 공사업)  / 기사</span></h4>
         <p><span className="dot1">●</span> 현장안전관리 및 공무업무</p>
         <p><span className="dot1">●</span> 지인의 이직 제안으로 인한 퇴사</p>
      </div>
      <div className="history-box">
      <h4>2019/08 ~ 2021./04 <span>키유 컴퍼니(수입주방용품 유통/판매) / 대리</span></h4>
          <p><span className="dot1">●</span> 행사진행 업무 및 영업</p>
          <p><span className="dot1">●</span> 이마트 행사 계약을 따내어 회사에 기여</p>
          <p><span className="dot1">●</span> 회사차량 지원 및 대리승급</p>
          <p><span className="dot1">●</span> 코로나 기간 행사축소로 인해 회사 제정악화로 인한 퇴사</p>
      </div>
      <div className="history-box">
      <h4>2017/07 ~ 2019/03 <span>군 복무 기간 / 육군만기전역</span></h4>
          <p><span className="dot1">●</span> 25사단 최전방 GOP근무 / 분대장</p>
      </div>
      <div className="history-box">
      <h4>2016/10 ~ 2017/05 <span>키유컴퍼니(수입주방용품 유통/판매) / 주임</span></h4>
      <p><span className="dot1">●</span> 고객응대 및 판매업무</p>
          <p><span className="dot1">●</span> 행사입점, 철수 지원업무</p>
          <p><span className="dot1">●</span> 꼼꼼한 고객응대로 회사 내 가장 높은 매출달성기여를 하여 좋은평을 받음</p>
          <p><span className="dot1">●</span> 군입대로 인한 퇴사</p>
      </div>
    </div>
  )
}

export default Story