import React, { useState, useRef, useEffect } from "react";
import SectionHeading from "../components/common/SectionHeading";
import { FooterSocials } from "../utils/statics";
import { Link } from "react-router-dom";
import Input from "../components/common/Input";
import TextArea from "../components/common/TextArea";
import { BubbleButton } from "../components/common";
import { ProTip1, TradingHours } from "../assets";
import callIcon from "../assets/images/call-icon.svg";
import Swal from 'sweetalert2';

const Contact = () => {
  const TabBtns = ["Dubai", "Germany"];
  const [activeIndex, setActiveIndex] = useState(0);
  const span = useRef(null);
  const container = useRef(null);
  useEffect(() => {
    var clickedBtn = container.current.querySelector(`#button-${activeIndex}`);
    if (clickedBtn && span.current) {
      span.current.style.left = `${clickedBtn.offsetLeft}px`;
      span.current.style.width = `${clickedBtn.offsetWidth}px`;
    }
  }, [activeIndex]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Show loading state
    Swal.fire({
      title: 'Submitting...',
      text: 'Please wait while we submit your message',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const response = await fetch('http://localhost:8000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Success
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: result.message || 'Your message has been submitted successfully!',
          confirmButtonColor: '#004986',
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        // Error
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: result.message || 'Something went wrong. Please try again.',
          confirmButtonColor: '#00FFFF',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Network error. Please check your connection and try again.',
        confirmButtonColor: '#00FFFF',
      });
    }
  };
  return (
    <>
      <section className="market-hours pt-[12rem] pb-[6rem]">
        <div className="container">
          <SectionHeading className="mb-[135px]" heading="Contact Us" />
          <div className="grid grid-cols-2">
            <div className="max-w-[80%]">
              <SectionHeading
                className="text-start"
                heading="We're here to help Contact Us"
              />
              <p className="text-white mb-[20px]">
                If you have any question and need our assistance, kindly submit
                the form. One of our support agent will get back to you soon!
                For customer support, please use the chat widget at the bottom
                right of your screen or visit our Help center.
              </p>
              <p className="text-white mb-[80px]">
                For customer support, please use the chat widget at the bottom
                right of your screen or visit our{" "}
                <Link to="" className="text-[#80DBB4]">
                  Help center.
                </Link>
              </p>
              <ul className="flex flex-wrap gap-3 items-center cs-social-links-wrapper">
                {FooterSocials.map((item, index) => (
                  <li key={index}>
                    <a target="_blank" href={item.link}>
                      <img src={item.img} alt="image" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full Name"
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
                <Input
                  label="Subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Your Subject"
                />
                <TextArea
                  className="text-white placeholder:text-[#969696]"
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  required
                />
                <BubbleButton 
                  type="submit"
                  className="my-btn contact-submit text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block"
                >
                  Submit
                </BubbleButton>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="located-sec" ref={container}>
        <div className="container">
          <SectionHeading heading="We're located" />
          <div className="package-navs max-w-[523px] justify-center w-full mx-auto mb-20 flex overflow-x-auto">
            <ul className="flex items-center max-w-[260px]  justify-center relative min-w-max w-full shrink-0 z-[2] border-1 border-[#004986] rounded-full">
              {TabBtns.map((item, index) => (
                <li key={index} className="w-full max-w-[137px]">
                  <button
                    id={`button-${index}`}
                    onClick={() => setActiveIndex(index)}
                    type="button"
                    className={`text-[18px] text-[#FFFFFF] font-normal cursor-pointer rounded-full w-full py-3 px-4 whitespace-nowrap transition ${
                      activeIndex === index ? "active" : ""
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
              <span ref={span} className="bg-border"></span>
            </ul>
          </div>
          <div className="content">
            <div className={activeIndex == 0 ? null : "hidden"}>
              <div className="grid grid-cols-2">
                <div>
                  <p className="text-white text-[20px] mb-[50px]">
                    Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai,
                    United Arab Emirates
                  </p>
                  <p className="text-white text-[20px] mb-[20px]">
                    Reach out to us on
                  </p>
                  <div className="flex items-center gap-[20px] mb-[20px]">
                    <div className="md-circle">
                      <img src={callIcon} alt="" />
                    </div>
                    <div className="">
                      <a
                        href="tel:+971 2 818 6000"
                        className="block text-white text-[20px]"
                      >
                        +971 2 818 6000
                      </a>
                      <a
                        href="tel:+971 2 818 6000"
                        className="text-white text-[20px]"
                      >
                        +971 2 818 6000
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <div className="md-circle">
                      <img src={callIcon} alt="" />
                    </div>
                    <div>
                      <a
                        href="mail:info@go4trades.com"
                        className="text-white text-[20px]"
                      >
                        info@go4trades.com
                      </a>
                    </div>
                  </div>
                </div>
                <div style={{ width: "100%", height: "400px" }}>
                  <iframe
                    title="Google Map"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "30px" }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1806.2488267923634!2d55.3760994!3d25.1188608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6570d49d452f%3A0x5993cfcf524af8a7!2sIFZA%20DDP%20Building%20A2!5e0!3m2!1sen!2s!4v1722253039255!5m2!1sen!2s"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className={activeIndex == 1 ? null : "hidden"}>
              <div className="grid grid-cols-2">
                <div>
                  <p className="text-white text-[20px] mb-[50px]">
                    Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai,
                    United Arab Emirates
                  </p>
                  <p className="text-white text-[20px] mb-[20px]">
                    Reach out to us on
                  </p>
                  <div className="flex items-center gap-[20px] mb-[20px]">
                    <div className="md-circle">
                      <img src={callIcon} alt="" />
                    </div>
                    <div className="">
                      <a
                        href="tel:+971 2 818 6000"
                        className="block text-white text-[20px]"
                      >
                        +971 2 818 6000
                      </a>
                      <a
                        href="tel:+971 2 818 6000"
                        className="text-white text-[20px]"
                      >
                        +971 2 818 6000
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <div className="md-circle">
                      <img src={callIcon} alt="" />
                    </div>
                    <div>
                      <a
                        href="mail:info@go4trades.com"
                        className="text-white text-[20px]"
                      >
                        info@go4trades.com
                      </a>
                    </div>
                  </div>
                </div>
                <div style={{ width: "100%", height: "400px" }}>
                  <iframe
                    title="Google Map"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "30px" }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1806.2488267923634!2d55.3760994!3d25.1188608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6570d49d452f%3A0x5993cfcf524af8a7!2sIFZA%20DDP%20Building%20A2!5e0!3m2!1sen!2s!4v1722253039255!5m2!1sen!2s"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
