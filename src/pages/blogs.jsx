import React, { useEffect, useState } from "react";
import SectionHeading from "../components/common/SectionHeading";
import { defaultMd } from "../assets";
import DownloadSvg from "../components/common/DownloadSvg";
import BubbleButton from "../components/common/BubbleButton";
import { Link } from "react-router-dom";

const blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  function extractTextSummary(html, limit = 200) {
    // Remove images and lists
    const cleaned = html
      .replace(/<img[^>]*>/gi, "")
      .replace(/<(ul|ol|li)[^>]*>.*?<\/\1>/gis, "");

    // Remove all HTML tags, keep only text
    const textOnly = cleaned.replace(/<[^>]+>/g, "");

    // Trim and return limited text
    return textOnly.trim().slice(0, limit);
  }
  function extractFirstImage(html) {
    const imgTag = html.match(/<img[^>]+src="([^">]+)"/i);
    return imgTag ? imgTag[1] : null;
  }
  useEffect(() => {
    fetch("http://localhost:8000/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch(() => {
        setError(true);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });

      
  }, []);
  return (
    <section className="market-hours pt-[12rem]">
      <div className="container">
        <SectionHeading heading="Blogs" />
        {loading ? (
          <div className="loader-wrapper flex justify-center">
          <div className="loader"></div>
          </div>
        ) : error || blogs.length === 0 ? (
          <div className="text-white text-center mt-8 text-lg">Blogs No Found.</div>
          ) :  (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="guide-box border-1 border-[#A0A0A0] rounded-[21px] overflow-hidden"
              >
                <div className="image h-[255px] w-full">
                  <img
                    src={extractFirstImage(blog.content) || defaultMd}
                    alt="blog"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text p-6">
                  <div className="flex justify-between items-center mb-[20px]">
                    <h6 className="text-[#fff] capitalize text-[30px] font-medium">
                      {blog.title}
                    </h6>
                    {/* <span className="text-[#80DBB4] text-[14px]  font-medium  block">{blog.created_at}</span> */}
                  </div>
                  <p className="line-clamp-2 text-[#fff] text-[14px] mb-4 md:text-[20px]">
                    {extractTextSummary(blog.content)}
                  </p>
                  <Link to={`/blogs/${blog.slug}`}>
                    <BubbleButton className="my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block">
                      Read More
                    </BubbleButton>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default blogs;
