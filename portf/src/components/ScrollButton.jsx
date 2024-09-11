import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

const ScrollButton = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  // Show or hide scroll up button based on scroll position
  const checkScrollTop = () => {
    if (!showScrollUp && window.pageYOffset > 200) {
      setShowScrollUp(true);
    } else if (showScrollUp && window.pageYOffset <= 200) {
      setShowScrollUp(false);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScrollUp]);

  // Scroll to top function
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000, // Slower scroll to top
      smooth: "easeInOutQuart",
    });
  };

  // Scroll down a bit (500 pixels) function
  const scrollDown = () => {
    scroll.scrollMore(500, {
      duration: 1000, // Slower scroll down
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col space-y-2 z-50">
      {" "}
      {/* Using z-50 for higher z-index */}
      {/* Scroll Up Button (only visible when scrolled down) */}
      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="text-xl hover:opacity-70" // Simple styling, no colors
        >
          &#x25B2; {/* Up arrow symbol */}
        </button>
      )}
      {/* Scroll Down Button */}
      <button
        onClick={scrollDown}
        className="text-xl hover:opacity-70" // Simple styling, no colors
      >
        &#x25BC; {/* Down arrow symbol */}
      </button>
    </div>
  );
};

export default ScrollButton;
