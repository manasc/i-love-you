import React from "react";
import daniela from "./daniela.png";
import manas from "./manas.png";
import heart from "./heart.png";
import plane from "./airplane.png";

const DigitBox = ({ number, label }) => (
  <div className="px-2">
    <div className="w-12 flex flex-col items-center">
      <div className="font-mono font-light mb-2">{number}</div>
      <div className="text-xs uppercase text-gray-500">{label}</div>
    </div>
  </div>
);

function App() {
  const [showTogether, setShowTogether] = React.useState(true);
  const [showMessage, setShowMessage] = React.useState(false);
  const [difference, setDifference] = React.useState(new Date());

  const [currentDate, setCurrentDate] = React.useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
  });

  const displayDate = () => {
    const future = new Date(2021, 2, 24, 12); // month is index
    const current = new Date();

    const diff = new Date(future - current);
    setDifference(diff);

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    setCurrentDate({ seconds, minutes, hours, days });
  };

  setTimeout(() => {
    displayDate();
  }, 1000);

  React.useEffect(() => {
      displayDate();
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center pb-10">
      {showTogether ? (
        <div className="relative mb-1 flex">
          <div className="px-1 z-40">
            <img alt="daniela" src={daniela} width={40} height={"auto"} />
          </div>
          <div className="px-1 relative flex items-center justify-center z-0">
            <div className="animate-ping-heart absolute inline-flex h-9 w-9 rounded-full bg-red-500 opacity-75"></div>
            <div className="animate-ping-heart absolute inline-flex h-7 w-7 rounded-full bg-red-500 opacity-50"></div>
            <div className="animate-ping-heart absolute inline-flex h-5 w-5 rounded-full bg-red-500 opacity-50"></div>
            <div className="relative transform translate-y-px">
              <img src={heart} alt="heart" width={20} height={"auto"} />
            </div>
          </div>
          <div className="px-1 z-40">
            <img alt="manas" src={manas} width={40} height={"auto"} />
          </div>
        </div>
      ) : (
        <>
          <div className="text-2xl relative flex items-center justify-center mb-10">
            <div className="animate-ping-heart absolute inline-flex h-16 w-16 rounded-full bg-red-500 opacity-75"></div>
            <div className="animate-ping-heart absolute inline-flex h-11 w-11 rounded-full bg-red-500 opacity-75"></div>
            <div className="animate-ping-heart absolute inline-flex h-9 w-9 rounded-full bg-red-500 opacity-75"></div>
            <div className="animate-ping-heart absolute inline-flex h-7 w-7 rounded-full bg-red-500 opacity-50"></div>
            <div className="animate-ping-heart absolute inline-flex h-5 w-5 rounded-full bg-red-500 opacity-50"></div>
            <div className="relative transform translate-y-px">
              <img src={heart} alt="heart" width={20} height={"auto"} />
            </div>
          </div>
          <div className="text-white">{difference.getTime()}</div>
          <div className="text-white text-4xl">
            <div className="flex items-center">
              <DigitBox number={currentDate.days} label="d" />
              <DigitBox number={currentDate.hours} label="h" />
              <DigitBox number={currentDate.minutes} label="m" />
              <DigitBox number={currentDate.seconds} label="s" />
            </div>
          </div>
          <div className="h-10 py-10 text-white text-sm">
            {showMessage && (
              <div className="flex items-center">
                <div className="relative mr-2">
                  <img src={plane} alt="plane" width={20} height={"auto"} />
                </div>
                <span>On my way, cutie!</span>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
