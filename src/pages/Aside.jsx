import React from 'react'
import Header from './Header'
import Nav from './Nav'

const Aside = () => {
  return (
    <aside>
       <Header /> 
       <p className="title-desc d-none d-md-block mt-0 mt-md-3 text-center">
         Java 백엔드 풀스택 개발자 <br/>
         "가치있는 개발자가 목표"
       </p>
       <Nav />
    </aside>
  )
}

export default Aside