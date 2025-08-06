import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const SidebarPopup = ({ isOpen, onClose, selectedLevel, selectedLevelImage }) => {
    console.log('SidebarPopup rendered with props:', { isOpen, selectedLevel });

    // Handle close
    const handleClose = () => {
        onClose();
    };

    // Handle Escape key to close sidebar
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape' && isOpen) {
                handleClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscapeKey);
            // Prevent body scroll when sidebar is open and ensure proper positioning
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        };
    }, [isOpen, handleClose]);



    const getLevelDisplayName = (level) => {
        switch (level) {
            case 'basics': return 'Chart the Basics';
            case 'strategy': return 'Set the Strategy';
            case 'advanced': return 'Secure the Bag';
            case 'get-started': return 'Get Started with Trading';
            default: return level;
        }
    };

    // Always render but control visibility with CSS
    // if (!isOpen) return null;

    return createPortal(
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0  z-[100] transition-all duration-500 ease-in-out ${isOpen ? 'bg-opacity-50 visible' : 'bg-opacity-0 invisible'
                    }`}
                onClick={handleClose}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: '100vw',
                    height: '100vh'
                }}
            ></div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-screen overflow-y-auto w-full max-w-[500px] sm:max-w-[450px] md:max-w-[500px] bg-white z-[101] shadow-2xl transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                    }`}
                style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    height: '100vh',
                    maxHeight: '100vh',
                    width: '100%',
                    maxWidth: '500px',
                    zIndex: 101
                }}
            >
                <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className={`flex items-center justify-between p-6 pb-0 transition-all duration-700 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                        }`} style={{ transitionDelay: isOpen ? '200ms' : '0ms' }}>
                        <div>
                            <img src={selectedLevelImage} alt="image" className='mb-3.5' />
                            <h3 className="text-(--base-color) text-[24px] font-medium mb-1">{getLevelDisplayName(selectedLevel)}</h3>
                        </div>
                        <button
                            onClick={handleClose}
                            className="text-(--base-color) hover:text-[#fff] transition-all duration-300 text-[24px] font-bold hover:rotate-90 hover:scale-110 w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#78c9a6] hover:bg-opacity-20 border border-transparent hover:border-[#BE1320] group"
                            aria-label="Close sidebar and deselect course"
                            title="Close and deselect course"
                        >
                            <span className="group-hover:animate-pulse">✕</span>
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-6 pt-1">
                        <div className={`transition-all duration-700 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                            }`} style={{ transitionDelay: isOpen ? '400ms' : '0ms' }}>
                            <p className='text-(--base-color) text-[16px] md:text-[22px] font-medium mb-5'>New to trading? </p>
                            <ul className="list-disc pl-5 mb-6 text-(--base-color) text-[15px] font-light">
                                <li>Learn how forex, commodities, crypto, and stocks work</li>
                                <li>Read candlestick charts and simple technical indicators</li>
                                <li>Master the basics of trading psychology</li>
                                <li>Practice with a free demo trading account (prop-style)/Try everything on a demo account — zero risk</li>
                                <li>Use beginner-friendly, tested trading strategies</li>
                                <li>Join our private Discord for new traders</li>
                                <li>Flex your KHDA-approved certificate when you’re done</li>
                            </ul>

                            <p className='text-(--base-color) text-[16px] md:text-[18px] font-light mb-5'>“Built for beginners. Powered by real-world trading.
                                Let’s turn “I’m curious” into “I’ve got this.” </p>

                            <h5 className='text-(--base-color) text-[20px] md:text-[25px] lg:text-[29px] font-medium'>Book your first class today!</h5>
                            <h5 className='text-(--base-color) text-[18px] md:text-[20px] lg:text-[24px] font-medium mb-6'>Its time to level up</h5>
                        </div>
                        {/* Tally Form */}
                        <div className={`transition-all duration-700 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                            }`} style={{ transitionDelay: isOpen ? '400ms' : '0ms' }}>
                            <div className="bg-white rounded-[12px] p-4 border border-[#004986] tally-form-wrapper">
                                <iframe
                                    src="https://tally.so/embed/3q85E9?hideTitle=1&transparentBackground=1&dynamicHeight=1"
                                    width="100%"
                                    height="100vh"
                                    title="Go4Trades Academy Waitlist"
                                    style={{
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        margin: 0,
                                        minHeight: '400px',
                                        maxHeight: '100vh'
                                    }}
                                    onLoad={() => console.log('✅ Tally form loaded in sidebar')}
                                    onError={() => console.log('❌ Tally form failed to load in sidebar')}
                                ></iframe>
                            </div>

                            {/* Alternative access */}
                            {/* <div className="mt-4 text-center">
                                <p className="text-[#CCCCCC] text-[14px] mb-2">Form not loading?</p>
                                <a
                                    href="https://tally.so/r/3q85E9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-4 py-2 bg-[#80DBB4] text-white rounded-lg hover:opacity-80 transition-opacity text-[14px]"
                                >
                                    Open in New Tab
                                </a>
                            </div> */}

                            {/* Close Button */}
                            {/* <div className="mt-4">
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="w-full py-3 px-4 text-[#CCCCCC] hover:text-white border border-[#004986] hover:border-[#BE1320] rounded-[12px] transition-all duration-300 hover:bg-[#BE1320] hover:bg-opacity-10 text-[14px] font-medium"
                                >
                                    Close Form
                                </button>
                            </div> */}
                        </div>

                        {/* Additional Info */}
                        {/* <div className="mt-6 space-y-4">
                            <div className="p-4 rounded-[12px] bg-[#044985] bg-opacity-20">
                                <p className="text-[#CCCCCC] text-[14px] leading-relaxed">
                                    By registering, you'll get access to structured courses and personalized guidance from our expert coaches.
                                </p>
                            </div>

                            {/* Close Info */}
                        {/* <div className="p-3 rounded-[8px] bg-[#BE1320] bg-opacity-10 border border-[#BE1320] border-opacity-30">
                                <p className="text-[#CCCCCC] text-[12px] leading-relaxed flex items-center">
                                    <span className="text-[#BE1320] mr-2">ℹ️</span>
                                    Closing this popup will deselect your chosen course. You can select again anytime.
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>,
        document.body
    );
};

export default SidebarPopup;
