import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import BubbleButton from "../components/common/BubbleButton";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8000/api/blogs/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog:", error);
        setLoading(false);
      });
  }, [slug]);

  function extractFirstImage(html) {
    const imgTag = html.match(/<img[^>]+src="([^">]+)"/i);
    return imgTag ? imgTag[1] : null;
  }

  function truncateText(text, maxWords = 25) {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "...";
  }

  if (loading) {
    return (
      <div className="blog-detail pt-[10rem] pb-[5rem]">
        <div className="container">
          <div className="text-center text-white text-xl">Loading...</div>
        </div>
      </div>
    );
  }

  if (!blogData || !blogData.blog) {
    return (
      <div className="blog-detail pt-[10rem] pb-[5rem]">
        <div className="container">
          <div className="text-center text-white text-xl">Blog not found</div>
        </div>
      </div>
    );
  }

  const { blog, related_blogs } = blogData;

  return (
    <section className="blog-detail pt-[10rem] pb-[5rem]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Main Blog Content */}
          <div className="lg:col-span-8">
            {/* <h1 className="text-[40px] font-bold text-white mb-6">{blog.title}</h1> */}
            
            {/* Blog Image */}
            
            
            {/* Blog Content */}
            <div
              className="content blog-detail-content text-white text-[18px] leading-8"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></div>
            
            {/* Back Button */}
            <div className="mt-10">
              <Link to="/blogs">
                <BubbleButton className="my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block">
                  Back to Blogs
                </BubbleButton>
              </Link>
            </div>
          </div>

          {/* Right Column - Related Blogs */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold text-white mb-6">Related Blogs</h3>
              
              {related_blogs && related_blogs.length > 0 ? (
                <div className="space-y-6">
                  {related_blogs.map((relatedBlog) => (
                    <div key={relatedBlog.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                      {/* Related Blog Image */}
                      <div className="w-full h-32 mb-3 rounded-lg overflow-hidden">
                        <img
                          src={extractFirstImage(relatedBlog.content)}
                          alt={relatedBlog.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Related Blog Title */}
                      <h4 className="text-white font-semibold text-lg mb-2 line-clamp-2">
                        {relatedBlog.title}
                      </h4>
                      
                      {/* Related Blog Summary */}
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {truncateText(relatedBlog.summary || relatedBlog.content.replace(/<[^>]*>/g, ''), 25)}
                      </p>
                      
                      {/* Read More Button */}
                      <Link 
                        to={`/blogs/${relatedBlog.slug}`}
                        className="inline-block bg-blue-gradient text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-80 transition-opacity"
                      >
                        Read More
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-gray-400 text-lg mb-2">No related blogs</div>
                  <p className="text-gray-500 text-sm">Check back later for related content</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
