import { useEffect } from 'react';

const useScroll = (callback: () => void) => {
  useEffect(() => {
    const handleScroll = () => {
      // Calculate the total height of the document, including the invisible part due to scrolling
      const totalHeight = document.documentElement.scrollHeight;

      // Calculate the current scroll position and the height of the visible part of the document
      const { scrollTop, clientHeight } = document.documentElement;

      // Check if the user has reached the bottom of the page (considering a small offset)
      const isAtBottom = scrollTop + clientHeight >= totalHeight - 20;
      if (isAtBottom) {
        // Perform your action when the user scrolls to the bottom of the page
        callback();
        // Perform additional actions or fetch more data
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup: remove the scroll event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [callback]); // Empty dependency array ensures this effect runs only once on component mount
};

export default useScroll;
