import React, { useRef, useState, useEffect } from "react";
import SectionHeading from "../components/common/SectionHeading";
import searchIcon from "../assets/images/search-icon.png";
import Input from "../components/common/Input";
import { Link, useParams } from "react-router-dom";
import BubbleButton from "../components/common/BubbleButton";

const FaqsDetails = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState([]);
  const [selectedFaq, setSelectedFaq] = useState(null);
  const container = useRef(null);
  const { slug } = useParams();

  // Fetch specific FAQ if slug is provided
  useEffect(() => {
    if (slug) {
      fetch(`http://localhost:8000/api/faqs/${slug}`)
        .then((res) => res.json())
        .then((data) => {
          if (data && data.id) {
            setSelectedFaq(data);
          }
        })
        .catch((err) => {
          console.error("Failed to fetch specific FAQ", err);
        });
    }
  }, [slug]);

  // Fetch categories and FAQs
  useEffect(() => {
    fetch("http://localhost:8000/api/faq-categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        if (data.length > 0) {
          fetchFaqsByCategory(data[0].id);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch categories", err);
        setLoading(false);
      });
  }, []);

  // Search functionality
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredFaqs(faqs);
    } else {
      const filtered = faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredFaqs(filtered);
    }
  }, [searchTerm, faqs]);

  // Fetch FAQs by category
  const fetchFaqsByCategory = (categoryId) => {
    fetch(`http://localhost:8000/api/faq-categories/${categoryId}`)
      .then((res) => res.json())
      .then((data) => {
        setFaqs(data.faq || []);
        setFilteredFaqs(data.faq || []);
      })
      .catch((err) => console.error("Failed to fetch FAQs", err));
  };

  // Handle tab click
  const handleTabClick = (index, categoryId = null) => {
    setActiveIndex(index);
    setSearchTerm(""); // Clear search when switching tabs
    setSelectedFaq(null); // Clear selected FAQ
    if (categoryId) {
      fetchFaqsByCategory(categoryId);
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle FAQ selection
  const handleFaqSelect = (faq) => {
    setSelectedFaq(faq);
  };

  // Handle back to list
  const handleBackToList = () => {
    setSelectedFaq(null);
  };

  return (
    <section className="market-hours pt-[12rem] pb-[6rem]" ref={container}>
      <div className="container">
        <div className="grid grid-cols-[500px_1fr] gap-8">
          <div className="">
            <SectionHeading
              className="mb-[30px] text-4xl text-start max-w-[400px]"
              heading="All Faqs"
            />
            <Input
              type="search"
              className="pl-[50px] max-w-[500px]"
              icon={<img src={searchIcon} className="w-5 h-5" />}
              placeholder="Search About Trading..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <h5 className="text-white mb-[20px]">
              Got a specific question?{" "}
              <Link to="/contact-us" className="text-[#80DBB4] hover:underline">
                Contact us
              </Link>
            </h5>
            <div className="package-navs justify-center w-full mx-auto mb-20 flex overflow-x-auto">
              <ul className="relative min-w-max w-full shrink-0 z-[2]">
                <li className="w-full">
                  <Link
                    to="/faqs"
                    className="text-[18px] flex justify-center items-center text-center text-[#FFFFFF] font-normal my-btn cursor-pointer mb-[20px] !rounded-[10px] w-full max-w-[500px] py-3 px-4 whitespace-nowrap transition"
                  >
                    All FAQs
                  </Link>
                </li>
                {categories.map((category, index) => (
                  <li key={category.id} className="w-full ">
                    <button
                      id={`button-${index}`}
                      onClick={() => handleTabClick(index, category.id)}
                      type="button"
                      className={`text-[18px] text-[#FFFFFF] font-normal my-btn cursor-pointer mb-[20px] !rounded-[10px] w-full max-w-[500px] py-3 px-4 whitespace-nowrap transition ${
                        activeIndex === index ? "active  bg-blue-gradient" : ""
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="">
            {loading ? (
              <div className="text-center py-8">
                <div className="loader"></div>
              </div>
            ) : selectedFaq ? (
              // Individual FAQ Detail View
              <div className="space-y-6">
                <div className="guide-box border-1 mb-[30px] border-[#A0A0A0] rounded-[21px] overflow-hidden">
                  <div className="text px-6 py-12">
                    <div className="flex justify-between items-start mb-4">
                      <h6 className="text-[#fff] capitalize text-[14px] md:text-[40px] font-medium">
                        {selectedFaq.question}
                      </h6>
                      <button
                        onClick={handleBackToList}
                        className="text-blue-400 hover:text-blue-300 text-sm underline"
                      >
                        ← Back to list
                      </button>
                    </div>
                    <div className="text-[#fff] text-[14px] md:text-[18px] leading-relaxed">
                      {selectedFaq.answer}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-600">
                      <span className="text-gray-400 text-sm">
                        Category: {selectedFaq.category?.name || 'General'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Recommended questions section */}
                <SectionHeading
                  className="mb-[30px] recom-hd text-start"
                  heading="Recommended questions"
                />

                <div className="content">
                  {filteredFaqs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                      {filteredFaqs.map((faq, index) => (
                        <div
                          key={faq.id}
                          className="guide-box border-1 border-[#A0A0A0] rounded-[21px] overflow-hidden"
                        >
                          <div className="text px-6 py-12">
                            <h6 className="text-[#fff] capitalize text-[14px] md:text-[40px] font-medium mb-3">
                              {faq.question}
                            </h6>
                            <p className="text-[#fff] line-clamp-2 text-[14px] md:text-[20px] mb-[60px]">
                              {faq.answer}
                            </p>
                            <BubbleButton
                              onClick={() => handleFaqSelect(faq)}
                              className="my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block cursor-pointer"
                            >
                              Read More
                            </BubbleButton>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : searchTerm.trim() !== "" ? (
                    <div className="text-center py-8">
                      <div className="text-gray-400 text-lg mb-2">No search results found</div>
                      <p className="text-gray-500 text-sm">
                        No FAQs match your search for "{searchTerm}"
                      </p>
                      <button 
                        onClick={() => setSearchTerm("")}
                        className="mt-4 text-blue-400 hover:text-blue-300 underline"
                      >
                        Clear search
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="text-gray-400 text-lg mb-2">No FAQs found</div>
                      <p className="text-gray-500 text-sm">No FAQs available for this category.</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              // FAQ List View
              <>
                <div className="guide-box border-1 mb-[30px] border-[#A0A0A0] rounded-[21px] overflow-hidden">
                  <div className="text px-6 py-12">
                    <h6 className="text-[#fff] capitalize text-[14px] md:text-[40px] font-medium mb-3">
                      {categories[activeIndex]?.name || "Category"}
                    </h6>
                    <p className="text-[#fff] line-clamp-2 text-[14px] md:text-[20px] mb-[60px]">
                      Frequently asked questions about {categories[activeIndex]?.name?.toLowerCase() || "this category"}.
                    </p>
                  </div>
                </div>

                {/* Search Results Info */}
                {searchTerm.trim() !== "" && (
                  <div className="mb-6 text-center">
                    <p className="text-white text-lg">
                      Search results for: <span className="text-blue-400 font-semibold">"{searchTerm}"</span>
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                )}

                <SectionHeading
                  className="mb-[30px] recom-hd text-start"
                  heading="Recommended questions"
                />

                <div className="content">
                  {filteredFaqs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                      {filteredFaqs.map((faq, index) => (
                        <div
                          key={faq.id}
                          className="guide-box border-1 border-[#A0A0A0] rounded-[21px] overflow-hidden"
                        >
                          <div className="text px-6 py-12">
                            <h6 className="text-[#fff] capitalize text-[14px] md:text-[40px] font-medium mb-3">
                              {faq.question}
                            </h6>
                            <p className="text-[#fff] line-clamp-2 text-[14px] md:text-[20px] mb-[60px]">
                              {faq.answer}
                            </p>
                            <BubbleButton
                              onClick={() => handleFaqSelect(faq)}
                              className="my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block cursor-pointer"
                            >
                              Read More
                            </BubbleButton>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : searchTerm.trim() !== "" ? (
                    <div className="text-center py-8">
                      <div className="text-gray-400 text-lg mb-2">No search results found</div>
                      <p className="text-gray-500 text-sm">
                        No FAQs match your search for "{searchTerm}"
                      </p>
                      <button 
                        onClick={() => setSearchTerm("")}
                        className="mt-4 text-blue-400 hover:text-blue-300 underline"
                      >
                        Clear search
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="text-gray-400 text-lg mb-2">No FAQs found</div>
                      <p className="text-gray-500 text-sm">No FAQs available for this category.</p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqsDetails;
