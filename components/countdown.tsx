import { useState, useEffect } from "react";

const oneMinute = 60 * 1000;

interface CountDownProps {
  targetTime: `${number}-${number}-${number}`;
}

export function CountDown({ targetTime }: CountDownProps) {
  const target = new Date(`${targetTime}T00:00:00`).getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(target));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(target));
    }, 1000);

    if (timeLeft.seconds < 0) {
      setTimeLeft({ seconds: 0, minutes: 0, hours: 0 });
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [target]);

  function calculateTimeLeft(targetTime: number) {
    const now = new Date().getTime();
    const difference = targetTime - now;

    const totalMinutes = Math.floor(difference / oneMinute);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const seconds = Math.floor((difference % oneMinute) / 1000);

    return { hours, minutes, seconds };
  }

  return (
    <div className="flex gap-5 justify-center lg:justify-normal mt-8 lg:mt-14 font-unica-one text-5xl">
      <h1>
        {timeLeft.hours.toString().padStart(2, "0")}
        <span className="font-montserrat uppercase text-sm">h</span>
      </h1>
      <h1>
        {timeLeft.minutes.toString().padStart(2, "0")}
        <span className="font-montserrat uppercase text-sm">m</span>
      </h1>
      <h1>
        {timeLeft.seconds.toString().padStart(2, "0")}
        <span className="font-montserrat uppercase text-sm">s</span>
      </h1>
    </div>
  );
}
