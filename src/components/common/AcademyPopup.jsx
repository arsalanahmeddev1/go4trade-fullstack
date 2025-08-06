import { useEffect } from 'react';

const AcademyPopup = ({ isOpen, onClose, selectedLevel }) => {

    // Handle Escape key to close popup
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscapeKey);
            // Prevent body scroll when popup is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    // Load Tally embeds when popup opens
    useEffect(() => {
        if (isOpen) {
            // Load Tally script if not already loaded
            const loadTallyScript = () => {
                if (!document.querySelector('script[src*="tally.so/widgets/embed.js"]')) {
                    const script = document.createElement('script');
                    script.src = 'https://tally.so/widgets/embed.js';
                    script.async = true;
                    script.onload = () => {
                        console.log('Tally script loaded');
                        if (window.Tally) {
                            setTimeout(() => window.Tally.loadEmbeds(), 100);
                        }
                    };
                    document.head.appendChild(script);
                } else if (window.Tally) {
                    // Script already loaded, just load embeds
                    setTimeout(() => window.Tally.loadEmbeds(), 100);
                }
            };

            // Small delay to ensure iframe is rendered
            setTimeout(loadTallyScript, 200);
        }
    }, [isOpen]);

    const getLevelDisplayName = (level) => {
        switch(level) {
            case 'basics': return 'Chart the Basics (Beginner Level)';
            case 'strategy': return 'Set the Strategy (Intermediate)';
            case 'advanced': return 'Secure the Bag (Advanced)';
            default: return 'Academy Standard';
        }
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0  z-[9999] transition-all duration-300 ease-in-out ${
                    isOpen ? 'bg-opacity-60 visible' : 'bg-opacity-0 invisible'
                }`}
                onClick={onClose}
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
            ></div>

            {/* Popup Modal */}
            <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] max-h-[90vh] bg-white z-[10000] rounded-[20px] shadow-2xl transition-all duration-300 ease-in-out ${
                isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
                style={{
                    backgroundColor: 'white',
                    border: '2px solid #80DBB4'
                }}
            >
                <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <div>
                            <h3 className="text-[#01111F] text-[24px] font-bold mb-1">Go4Trades Academy Waitlist</h3>
                            <p className="text-[#80DBB4] text-[16px] font-medium">
                                {getLevelDisplayName(selectedLevel)}
                            </p>
                        </div>
                        <button 
                            onClick={onClose}
                            className="text-[#01111F] hover:text-[#BE1320] transition-all duration-300 text-[28px] font-bold hover:rotate-90 hover:scale-110 w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100"
                            aria-label="Close popup"
                            title="Close popup"
                        >
                            ×
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-6">
                        {/* Selected Course Info */}
                        {selectedLevel && (
                            <div className="mb-6 p-4 rounded-[12px] border border-[#80DBB4] bg-[#80DBB4] bg-opacity-10">
                                <h4 className="text-[#01111F] text-[18px] font-medium mb-2 flex items-center">
                                    <span className="w-2 h-2 bg-[#80DBB4] rounded-full mr-2"></span>
                                    Selected Course:
                                </h4>
                                <p className="text-[#01111F] text-[16px] font-medium">{getLevelDisplayName(selectedLevel)}</p>
                            </div>
                        )}

                        {/* Academy Waitlist Form */}
                        <div className="tally-form-container">
                            <div className="mb-6 p-4 bg-[#80DBB4] bg-opacity-10 rounded-lg text-center">
                                <p className="text-[#01111F] text-[18px] font-medium mb-2">🎓 Join the Go4Trades Academy Waitlist</p>
                                <p className="text-[#666] text-[14px]">Be the first to know when our structured trading courses launch!</p>
                            </div>

                            {/* Simple Contact Form (Temporary) */}
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-[#01111F] text-[14px] font-medium mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#80DBB4] focus:ring-1 focus:ring-[#80DBB4]"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[#01111F] text-[14px] font-medium mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#80DBB4] focus:ring-1 focus:ring-[#80DBB4]"
                                            placeholder="Enter your email address"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[#01111F] text-[14px] font-medium mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#80DBB4] focus:ring-1 focus:ring-[#80DBB4]"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[#01111F] text-[14px] font-medium mb-2">
                                            Trading Experience Level
                                        </label>
                                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#80DBB4] focus:ring-1 focus:ring-[#80DBB4]">
                                            <option value="">Select your level</option>
                                            <option value="beginner">Beginner (0-1 years)</option>
                                            <option value="intermediate">Intermediate (1-3 years)</option>
                                            <option value="advanced">Advanced (3+ years)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-[#01111F] text-[14px] font-medium mb-2">
                                            What interests you most?
                                        </label>
                                        <textarea
                                            rows="3"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#80DBB4] focus:ring-1 focus:ring-[#80DBB4]"
                                            placeholder="Tell us about your trading goals and interests..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-[#80DBB4] to-[#044985] text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity"
                                    >
                                        Join Academy Waitlist
                                    </button>
                                </form>
                            </div>

                            {/* Alternative: Try Tally Form */}
                            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                                <p className="text-[#666] text-[14px] mb-3 text-center">
                                    <strong>Alternative:</strong> Use our Tally form
                                </p>
                                <div className="text-center">
                                    <a
                                        href="https://tally.so/r/3q85E9"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-6 py-3 bg-[#80DBB4] text-white rounded-lg hover:opacity-80 transition-opacity"
                                    >
                                        Open Tally Form in New Tab
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-6 p-4 rounded-[12px] bg-[#044985] bg-opacity-10 border border-[#044985] border-opacity-20">
                            <p className="text-[#01111F] text-[14px] leading-relaxed">
                                <span className="font-medium">🎯 What you'll get:</span><br/>
                                • Early access to structured trading courses<br/>
                                • Personalized guidance from expert coaches<br/>
                                • Exclusive trading strategies and insights<br/>
                                • Community access with fellow traders
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default AcademyPopup;
