import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { LightingBlur, logo } from "../assets";
import { CanvasImages } from "../utils/statics";

gsap.registerPlugin(ScrollTrigger);

const Lighting = (props) => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const text1 = useRef(null);
  // const text2 = useRef(null);

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {

    if (!canvasRef.current || !sectionRef.current) return;

    document.body.style.overflow = "hidden";

    const canvas = canvasRef.current;
    const section = sectionRef.current;

    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });

    const imagesMap = import.meta.glob(
      '/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/*.jpg',
      { eager: true, as: 'url' }
    );

    const imagePaths = Object.entries(imagesMap)
      .sort(([a], [b]) => {
        const getIndex = str => parseInt(str.match(/\((\d+)\)/)?.[1] || 0, 10);
        return getIndex(a) - getIndex(b);
      })
      .map(([_, path]) => path);

    const frameCount = 150;
    const images = [];

    const imageSeq = {
      frame: 1
    }

    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages++;
      if (loadedImages === 11 - 1) {
        setIsLoading(false);
        document.body.style.overflow = "unset";
        ScrollTrigger.refresh();
      }
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = imagePaths[i];
      images.push(img);

      img.onload = handleImageLoad;
    }



    function ScaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }

    function render() {
      if (images[imageSeq.frame]) {
        ScaleImage(images[imageSeq.frame], context);
      }
    }

    images[1].onload = render;


    const ctx = gsap.context(() => {

      // gsap.set(text2.current, {
      //   opacity: 0,
      // });
      gsap.set(section, {
        opacity: 0,
      });

      const master = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          anticipatePin: false,
          start: "top top",
          end: "+=1500",
          scrub: 2,
          // onUpdate: (self) => {
          //   if (self.progress.toFixed(1) == '0.5' && self.direction == 1) {
          //     gsap.to(text1.current, {
          //       opacity: 0,
          //       duration: .7,
          //     });
          //     gsap.to(text2.current, {
          //       opacity: 1,
          //       duration: .7,
          //     });
          //   }
          //   else if (self.progress.toFixed(1) == '0.5' && self.direction == -1) {
          //     gsap.to(text1.current, {
          //       opacity: 1,
          //       duration: .7,
          //     });
          //     gsap.to(text2.current, {
          //       opacity: 0,
          //       duration: .7,
          //     });
          //   }
          // },
          onEnter: () => {
            gsap.to(section, {
              opacity: 1,
              duration: 0.4,
            });
          },
          onEnterBack: () => {
            gsap.to(section, {
              opacity: 1,
              duration: 0.4,
            });
          },
          onLeaveBack: () => {
            gsap.to(section, {
              opacity: 0,
              duration: 0.4,
            });
          }
        },
        onUpdate: render
      })

      master.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
      });

      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      setTimeout(() => {
        ScrollTrigger.refresh();
        requestAnimationFrame(() => ScrollTrigger.refresh());
      }, 100);

      return () => {
        window.removeEventListener('resize', handleResize);
      };

    });

    return () => {
      ctx.revert();
    };

  }, []);


  return (
    <>
      <div className={`preloader fixed h-[100dvh] w-full bg-[#01111F] top-0 left-0 flex items-center justify-center z-[9999] ${(isLoading) ? 'block' : 'hidden'}`}>
        <img src={logo} alt="logo" />
      </div>
      <div className="overflow-hidden">
        <section ref={sectionRef} className="overflow-hidden h-[100dvh] w-full relative bg-[#01111F] flex items-center justify-center">
          <div className="text text-center px-10 absolute top-1/2 left-1/2 -translate-1/2" ref={text1}>
            <h1>{(props.text1) ? (props.text1) : "It's time to rise above the ordinary"}</h1>
          </div>
          {/* <div className="text text-center px-10 absolute top-1/2 left-1/2 -translate-1/2" ref={text2}>
            <h1>{(props.text2) ? (props.text2) : "Another Text will appear here."} </h1>
          </div> */}
          <img src={LightingBlur} alt="image" className="absolute top-0 left-0 w-full h-[104%]" />
          <canvas id="" ref={canvasRef} className="w-[90%]"></canvas>
        </section>
      </div>
    </>
  );
};

export default Lighting;