import { useRef, useEffect } from "react"

const Getimage = () => {
    const append = useRef(null);

    useEffect(() => {
        var arr = [];
        let a = "/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(";
        let b = ").jpg"
        for (let i = 1; i <= 300; i++) {
           arr.push(a + i + b); 
        }

        append.current.innerHTML = arr.join("<br>");
    }, [])

    return (
        <div ref={append}><img src="/src/assets/videos/b6067b334642251abe22df21005877d2135ff056_000/(1).jpg" alt="" /></div>
    )
}

export default Getimage