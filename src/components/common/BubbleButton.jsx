import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
const BubbleButton = ({
  Tag = "button",
  href = "",
  target = "",
  children = "Button",
  bubbleColor = "#fff",
  className = "",
  bubbleSpeed = 5000,
  maxBubbles = 20, // Maximum bubbles allowed at any time
  parent_Class = "",
  onClick,
  type,
  ...props
}) => {
  const [bubbles, setBubbles] = useState([]);
  const bubblesInterval = useRef(null);
  const buttonRef = useRef(null);
  const isActive = useRef(false);
  const bubbleCount = useRef(0); // Track active bubbles

  const sArray = [2, 4]; // Bubble sizes

  const randomValue = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const startBubbles = () => {
    if (isActive.current) return;
    isActive.current = true;
    
    const buttonWidth = buttonRef.current.offsetWidth;
    const bArray = Array.from(
      { length: buttonWidth - 30 },
      (_, i) => i + 15
    );

    bubblesInterval.current = setInterval(() => {
      if (bubbleCount.current < maxBubbles) {
        const size = randomValue(sArray);
        const left = randomValue(bArray);

        const newBubble = {
          id: Date.now() + Math.random(),
          left,
          size,
        };

        setBubbles((prev) => {
          const newBubbles = [...prev, newBubble];
          // Enforce maximum bubbles by removing oldest if needed
          return newBubbles.length > maxBubbles 
            ? newBubbles.slice(1) 
            : newBubbles;
        });

        bubbleCount.current += 1;
        
        // Auto-remove after animation completes
        setTimeout(() => {
          setBubbles((prev) => prev.filter(b => b.id !== newBubble.id));
          bubbleCount.current -= 1;
        }, 2000);
      }
    }, 120);
  };

  const stopBubbles = () => {
    isActive.current = false;
    clearInterval(bubblesInterval.current);
    bubblesInterval.current = null;
  };

  useEffect(() => {
    return () => {
      clearInterval(bubblesInterval.current);
    };
  }, []);
  const Component = Tag === "Link" ? Link : Tag;

  return (
    <div className={`relative ${parent_Class}`}>
      <Component
  {...(Tag === "a" && href ? { href } : {})}
  {...(Tag === "Link" && href ? { to: href } : {})}
  ref={buttonRef}
  className={`btn relative overflow-hidden ${className}`}
  target={target}
  onMouseEnter={startBubbles}
  onMouseLeave={stopBubbles}
  onClick={onClick}
  type={type}
  {...props}
>
  {children}
  {bubbles.map((bubble) => (
    <span
      key={bubble.id}
      className="absolute rounded-full opacity-70 animate-bubble"
      style={{
        backgroundColor: bubbleColor,
        left: `${bubble.left}px`,
        width: `${bubble.size}px`,
        height: `${bubble.size}px`,
        bottom: "0",
        animationDuration: `${bubbleSpeed}ms`,
      }}
    />
  ))}
</Component>

    </div>
  );
};

export default BubbleButton;