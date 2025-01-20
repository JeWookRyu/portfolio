import React from 'react'
import { FcMindMap } from "react-icons/fc";
import { FaRegAddressCard } from "react-icons/fa6";
import { FaEarthAmericas } from "react-icons/fa6";
import { BiPhoneCall } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import emailjs from 'emailjs-com';

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q0dn6dm', 'template_urybz5a', e.target, '2KsH595RRMVJPZ7r1')
      .then((result) => {
        console.log(result.text);
        alert("메일이 성공적으로 전송되었습니다!");
      }, (error) => {
        console.log(error.text);
        alert("메일 전송에 실패했습니다.");
      });
  }

  return (
    <div id="contact" className="contact">
      <h1><FcMindMap />Contact</h1>
      <div className="contact_content">
        <div className="contact_box1">
          <span>
            <div className="contact_img">
              <FaRegAddressCard />
            </div>
            <p>wpdnr002@naver.com</p>
          </span>
          <span>
            <div className="contact_img">
              <FaEarthAmericas />
            </div>
            <p>서울특별시 광진구 구의동</p>
          </span>
          <span>
            <div className="contact_img">
              <BiPhoneCall />
            </div>
            <p>010 - 5222 - 9654</p>
          </span>
          <span>
            <div className="contact_img">
            <FaInstagram />
            </div>
            <a href="https://www.instagram.com/w_o.ok97/">instagram</a>
          </span>
        </div>

      <form className="contact_box2" onSubmit={sendEmail}>
        <input type="text" name="email_user_name" placeholder='성함' required />
        <input type="email" name="email_from" placeholder='회신 받을 E-Mail' required />
        <input type="text" name="email_title" placeholder='제목' required />
        <textarea name="message" placeholder='내용' required />
        <button type="submit" className="btn btn-primary" id="SubmitBtn">메일 전송</button>
      </form>

      </div>
    </div>
  )
}

export default Contact
