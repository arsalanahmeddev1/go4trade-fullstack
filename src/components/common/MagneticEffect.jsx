import gsap from 'gsap';

export default function MagneticEffect(power) {

    const handleMouseMove = (e) => {

        const box = e.currentTarget;
        const img = box.querySelector('.magnet-element');
        if (!img) return;

        const bounds = box.getBoundingClientRect();
        const move = e.clientX - bounds.left - bounds.width / 2;
        const moveY = e.clientY - bounds.top - bounds.width / 2;


        gsap.to(img, {
            x: move * power,
            y: moveY * power,
            duration: 0.8,
            ease: "power3.out",
        });
    };

    const handleMouseLeave = (e) => {

        const box = e.currentTarget;
        const img = box.querySelector('.magnet-element');
        if (!img) return;

        gsap.killTweensOf(img);

        gsap.to(img, {
            x: 0,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
        });
    };

    var boxes = gsap.utils.toArray('.magnet-box');

    boxes.forEach((box) => {
        box.addEventListener("mousemove", handleMouseMove);
        box.addEventListener("pointerleave", handleMouseLeave);
    });


    return null;
}
