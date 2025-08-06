import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { countrySlider } from '../utils/statics';
import FlagImg from '../assets/images/flag.png';
import '@splidejs/react-splide/css';


const CountrySlider = () => {
    return (
        <Splide className="countryslider"
            options={{
                type: 'loop',
                rewind: true,
                arrows: false,
                pagination: false,
                perPage: 5,
                gap: '1rem',
                autoScroll: {
                    speed: 1,
                },
                breakpoints: {
                    1024: {
                        perPage: 3,
                    },
                    500: {
                        perPage: 2,
                    },
                    400: {
                        perPage: 1,
                        padding: '20%',
                    },
                }
            }}
            extensions={{ AutoScroll }}
            aria-label="country slider">
            1{countrySlider.map((item, index) => (
                <SplideSlide key={index}>
                    <div className="box bg-primary-theme rounded-[12px] px-[20px] py-[15px]">
                        <img src={item.img} alt={`${item.name} flag`} />
                        <p className='text-[14px] font-normal text-[#FCFCFC] mt-1.5 mb-0'>{item.name}</p>
                    </div>
                </SplideSlide>
            ))}

        </Splide>
    )
}

export default CountrySlider;