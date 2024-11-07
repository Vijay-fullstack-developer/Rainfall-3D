import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const rainContainer = document.querySelector('.rain-container');

    function createRainDrop() {
      const drop = document.createElement('div');
      drop.classList.add('drop');

      const randomPositionX = Math.random() * window.innerWidth;
      const randomDelay = Math.random() * 2;
      const randomDuration = Math.random() * 2 + 1;
      const randomSize = Math.random() * 3 + 2;

      drop.style.left = `${randomPositionX}px`;
      drop.style.animationDuration = `${randomDuration}s`;
      drop.style.animationDelay = `${randomDelay}s`;
      drop.style.width = `${randomSize}px`;
      drop.style.height = `${randomSize * 5}px`;

      rainContainer.appendChild(drop);

      setTimeout(() => {
        drop.remove();
      }, (randomDuration + randomDelay) * 1000);
    }

    const rainInterval = setInterval(createRainDrop, 100);

    return () => {
      clearInterval(rainInterval); // Clean up interval on component unmount
    };
  }, []);

  return (
    <>
      <div className="rain-container">
        <div className="sun"></div>
        <div className="tv-container tv-small tv-top">
          <img src="./Assert/Image/Problem-solution.jpg" alt="Problem Solving" />
        </div>
        <div className="tv-container tv-small tv-bottom">
          <img src="./Assert/Image/Data-structure.jpg" alt="Algorithm" />
        </div>
        <div className="tv-container tv-small tv-left">
          <img src="./Assert/Image/focus.png" alt="Focus" />
        </div>
        <div className="tv-container tv-small tv-right">
          <img src="./Assert/Image/learning.jpg" alt="Learning" />
        </div>

        <div className="cube">
          <div className="face face1"></div>
          <div className="face face2"></div>
          <div className="face face3"></div>
          <div className="face face4"></div>
          <div className="face face5"></div>
          <div className="face face6"></div>
        </div>
      </div>
    </>
  );
}
