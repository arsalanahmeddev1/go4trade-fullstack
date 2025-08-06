import React, { useEffect } from 'react'
import SectionHeading from '../components/common/SectionHeading'
import { BubbleButton } from '../components/common'
import { GuideImg } from '../assets'
import DownloadSvg from '../components/common/DownloadSvg';
import { guideCardsContent } from '../utils/statics';

const Guide = () => {
    useEffect(() => {
        // Ensure Tally initializes embeds after component mounts
        if (window.Tally) {
            window.Tally.loadEmbeds();
        } else {
            // Wait and retry if script hasn’t fully loaded yet
            const interval = setInterval(() => {
                if (window.Tally) {
                    window.Tally.loadEmbeds();
                    clearInterval(interval);
                }
            }, 200);
        }
    }, []);
    return (
        <>
            <section className='guide-banner bg-white py-[5rem] pt-[12rem]'>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div>
                            <SectionHeading className="text-start" headingCLass="!text-(--base-color) !normal-case" paraClass="!text-(--base-color) font-light" heading="Your Complete <br /> Guide to Prop <br /> Trading" para="Your go-to resource for understanding how prop firms work, how to pass 
challenges, manage risk, and trade with confidence using firm capital. Whether you’re a beginner or scaling your 
strategies, these guides help you trade professionally without risking your own funds. 
" />
                        </div>
                        <div className='bg-[image:var(--light-purple-gradient)] rounded-[24px] p-[30px] md:p-[44px] border-1 border-[#684BD34D] flex flex-col justify-end'>
                            <form action="#" className='guide-form'>
                                <SectionHeading className="text-start !mb-6" headingCLass="!text-(--base-color) !normal-case !text-[24px] mb-6" paraClass="!text-(--base-color) font-light !text-[19px]" heading="Claim Your Free Copy of How to pass a Go4Trades Challenge" para="Fill in your e-mail below to get your download link!" />
                                <iframe
                                    data-tally-src="https://tally.so/embed/3j8AkE?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                                    loading="lazy"
                                    width="100%"
                                    height="200"
                                    frameBorder="0"
                                    marginHeight="0"
                                    marginWidth="0"
                                    title="Go4Trades Coaching Waitlist"
                                ></iframe>

                                {/* <div className="form-group">
                                    <label htmlFor="email" className='text-[18px] font-normal mb-2 inline-block'>Email Address <span>*</span></label>
                                    <input type="email" className='my-form-control mb-3' placeholder='Enter your email address' id='email' name='email' />
                                </div>
                                <BubbleButton className='my-btn text-white !font-normal bg-blue-gradient hover:opacity-60 transition inline-block !text-[16px] !py-2.5'>Download</BubbleButton> */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className='guide-grid bg-white py-[5rem]'>
                <div className="container">
                    <SectionHeading headingCLass="!text-(--base-color) !normal-case" heading="What You’ll Find in Our Complete Guide to Prop Trading" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {guideCardsContent.map((guide, index) => (
                            <div key={index} className="guide-box border-1 border-[#A0A0A0] rounded-[21px] overflow-hidden">
                                <div className="image h-[337px] w-full">
                                    <img src={guide.img} alt="image" className='w-full h-full object-cover' />
                                </div>
                                <div className="text p-6">
                                    <h6 className='text-(--base-color) min-h-[100px] text-[20px] md:text-[27px] font-medium mb-3'>{guide.title}</h6>
                                    <a download href={guide.link} className='text-[#684BD3] text-[16px] md:text-[18px] font-normal text-end inline-block w-full'>{guide.linkText} <DownloadSvg /></a>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Guide