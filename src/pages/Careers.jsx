import React, { useState } from "react";
import SectionHeading from "../components/common/SectionHeading";
import { BubbleButton } from "../components/common";
import { careerCardContent, careersBottomCardsContent } from "../utils/statics";
import Input from "../components/common/Input";
import TextArea from "../components/common/TextArea";
import Swal from "sweetalert2";
const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid File Type',
          text: 'Please upload a PDF, DOC, or DOCX file.',
          confirmButtonColor: '#01111f',
        });
        e.target.value = '';
        return;
      }
      
      // Check file size (2MB limit)
      if (file.size > 2 * 1024 * 1024) {
        Swal.fire({
          icon: 'error',
          title: 'File Too Large',
          text: 'Please upload a file smaller than 2MB.',
          confirmButtonColor: '#01111f',
        });
        e.target.value = '';
        return;
      }
      
      setResumeFile(file);
    }
  };

  const handleApplyNow = (position) => {
    setFormData(prev => ({
      ...prev,
      position: position
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!resumeFile) {
      Swal.fire({
        icon: 'error',
        title: 'Resume Required',
        text: 'Please upload your resume.',
        confirmButtonColor: '#01111f',
      });
      return;
    }

    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('position', formData.position);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('resume', resumeFile);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/careers', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Application Submitted!',
          text: data.message,
          confirmButtonColor: '#01111f',
        }).then(() => {
          // Reset form
          setFormData({
            name: "",
            email: "",
            position: "",
            message: "",
          });
          setResumeFile(null);
          const fileInput = document.getElementById('resume');
          if (fileInput) fileInput.value = '';
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Submission Failed',
          text: data.message || 'An error occurred while submitting your application.',
          confirmButtonColor: '#01111f',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Please check your internet connection and try again.',
        confirmButtonColor: '#01111f',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <section className="market-hours pt-[12rem] pb-[6rem]">
        <div className="container">
          <SectionHeading className="mb-[50px]" heading="Career" />
          <SectionHeading className="mb-[20px]" heading="Join Our Team" />
          <p className="text-white text-center max-w-[890px] mx-auto mb-[118px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea
          </p>
          <div className="flex-col flex xl:flex-row flex-wrap">
            <div className="xl:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
              {careerCardContent.map((content, index) => (
                <div className="career-card gradient-2 ">
                  <span className="block text-white text-[18px]">
                    {content.shiftTime}
                  </span>
                  <h3 className="mb-[11px] text-white font-medium text-[32px]">
                    {content.title}
                  </h3>
                  <p className="text-[#969696] font-light mb-[11px]">
                    {content.para}
                  </p>
                  <BubbleButton
                    onClick={() => handleApplyNow(content.title)}
                    className="my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block cursor-pointer"
                  >
                    {content.linkText}
                  </BubbleButton>
                </div>
              ))}
            </div>
            <div className="xl:w-2/6 mt-[20px] xl:mt-0">
              <BubbleButton
                Tag="Link"
                href="#"
                className="my-btn mb-[20px] justify-center w-full text-center !rounded-[10px]  text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block"
              >
                Join Our Team
              </BubbleButton>

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
                  label="Position Applying For"
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="Position"
                  required
                />
                <div className="mb-4">
                  <label className="block text-white text-sm font-medium mb-2">
                    Resume/CV *
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-gray-600 rounded-md bg-transparent text-white file:hidden"
                    required
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Accepted formats: PDF, DOC, DOCX (Max 2MB)
                  </p>
                </div>
                <TextArea
                  className="text-white"
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn bg-green-gradient primary-theme inline-block w-full !rounded-[10px] hover:opacity-[1] !p-[14px] !px-[32px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Send Application"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="careers-sec-2">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-[20px] mb-[80px] md:grid-cols-2">
            <div>
              <SectionHeading
                className="text-start careers-hd !mb-0"
                heading="Our Agency Has Been Present For Over 20 Years In Digital Agency!"
              />
            </div>
            <div>
              <p className="text-[#FCFCFC]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {careersBottomCardsContent.map((content, index) => (
            <div className="challange-box w-full md:max-w-[333px]" key={index}>
              <div className="border-1 border-[#002E55] rounded-[12px] py-4 px-5 bg-[#01111F]">
                <h6 className="text-white text-[18px] font-medium mb-2">
                                    {content.title}
                </h6>
                <p className="text-[#CCCCCC] text-[14px] font-extralight mb-1.5">
                  {content.para}
                </p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
