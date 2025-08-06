import React, { useEffect, useState, useRef } from "react";
import SectionHeading from "../components/common/SectionHeading";
import Input from "../components/common/Input";
import searchIcon from "../assets/images/search-icon.png";
import { Link } from "react-router-dom";
import BubbleButton from "../components/common/BubbleButton";

const Faq = () => {
  const [categories, setCategories] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [faqs, setFaqs] = useState([]);
  const [allFaqs, setAllFaqs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState([]);
  const span = useRef(null);
  const container = useRef(null);

  // ✅ Fetch all categories and all FAQs
  useEffect(() => {
    fetch("http://localhost:8000/api/faq-categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
        if (data.length > 0) {
          fetchFaqsByCategory(data[0].id); // Default load first category
        }
      })
      .catch((err) => {
        setError(true);
        setTimeout(() => {
          setLoading(false);
        }, 500);
        console.error("Failed to fetch categories", err);
      });

    // Fetch all FAQs for the "All FAQs" tab
    fetch("http://localhost:8000/api/faqs")
      .then((res) => res.json())
      .then((data) => {
        setAllFaqs(data);
      })
      .catch((err) => console.error("Failed to fetch all FAQs", err));
  }, []);

  // ✅ Set General tab as active when categories are loaded
  useEffect(() => {
    if (categories.length > 0) {
      const generalCategory = categories.find(cat => cat.name === 'General');
      if (generalCategory) {
        const generalIndex = categories.findIndex(cat => cat.name === 'General') + 1;
        setActiveIndex(generalIndex);
        fetchFaqsByCategory(generalCategory.id);
      }
    }
  }, [categories]);

  // ✅ Search functionality
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

  // ✅ Fetch FAQs based on selected category
  const fetchFaqsByCategory = (categoryId) => {
    fetch(`http://localhost:8000/api/faq-categories/${categoryId}`)
      .then((res) => res.json())
      .then((data) => {
        setFaqs(data.faq || []);
        setFilteredFaqs(data.faq || []); // Initialize filtered FAQs
      })
      .catch((err) => console.error("Failed to fetch FAQs", err));
  };

  // ✅ Handle tab click
  const handleTabClick = (index, categoryId = null) => {
    setActiveIndex(index);
    setSearchTerm(""); // Clear search when switching tabs
    if (categoryId) {
      fetchFaqsByCategory(categoryId);
    } else {
      // Show all FAQs
      setFaqs(allFaqs);
      setFilteredFaqs(allFaqs);
    }
  };

  // ✅ Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // ✅ Animate tab underline
  useEffect(() => {
    const clickedBtn = container.current?.querySelector(
      `#button-${activeIndex}`
    );
    if (clickedBtn && span.current) {
      span.current.style.left = `${clickedBtn.offsetLeft}px`;
      span.current.style.width = `${clickedBtn.offsetWidth}px`;
    }
  }, [activeIndex]);

  return (
    <section className="market-hours pt-[12rem] pb-[6rem]" ref={container}>
      <div className="container">
        <SectionHeading
          className="mb-[50px] max-w-[400px] mx-auto"
          heading="Frequently Asked Questions"
        />

        <Input
          type="search"
          className="pl-[50px]"
          icon={<img src={searchIcon} className="w-5 h-5" />}
          placeholder="Search About Trading..."
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <h3 className="text-white text-center text-[20px] mb-[30px]">
          Got a specific question?{" "}
          <Link className="underline" to="/contact-us">
            Contact us
          </Link>
        </h3>

        <div className="package-navs justify-center w-full mx-auto mb-20 flex overflow-x-auto">
          <ul className="flex items-center justify-center relative min-w-max w-full shrink-0 z-[2] border-1 border-[#004986] rounded-full">
            {/* All FAQs Tab */}
            <li className="w-full">
              <button
                id="button-0"
                onClick={() => handleTabClick(0)}
                type="button"
                className={`text-[18px] text-[#FFFFFF] font-normal cursor-pointer rounded-full w-full py-3 px-4 whitespace-nowrap transition ${
                  activeIndex === 0 ? "active" : ""
                }`}
              >
                All FAQs
              </button>
            </li>
            {/* Category Tabs */}
            {categories.map((category, index) => (
              <li key={category.id} className="w-full">
                <button
                  id={`button-${index + 1}`}
                  onClick={() => handleTabClick(index + 1, category.id)}
                  type="button"
                  className={`text-[18px] text-[#FFFFFF] font-normal cursor-pointer rounded-full w-full py-3 px-4 whitespace-nowrap transition ${
                    activeIndex === index + 1 ? "active" : ""
                  }`}
                >
                  {category.name}
                </button>
              </li>
            ))}
            <span ref={span} className="bg-border"></span>
          </ul>
        </div>

        <div className="content">
          <div>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loading ? (
                <div className="loader-wrapper flex justify-center col-span-full">
                  <div className="loader"></div>
                </div>
              ) : filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="guide-box border-1 border-[#A0A0A0] rounded-[21px] overflow-hidden"
                  >
                    <div className="text px-6 py-12">
                      <h6 className="text-[#fff] capitalize text-[14px] md:text-[24px] font-medium mb-3">
                        {faq.question}
                      </h6>
                      <p className="text-[#fff] line-clamp-2 text-[14px] md:text-[16px] mb-[30px]">
                        {faq.answer}
                      </p>
                      <BubbleButton
                        href={`/faqs/${faq.slug}`}
                        Tag="Link"
                        className="my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition inline-block"
                      >
                        Read More
                      </BubbleButton>
                    </div>
                  </div>
                ))
              ) : searchTerm.trim() !== "" ? (
                <div className="col-span-full text-center py-8">
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
                <p className="text-white col-span-full text-center">
                  No FAQs found for this category.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
