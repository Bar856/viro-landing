"use client";
import { useState, useEffect, useCallback } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate?: Date;
}

const Countdown: React.FC<CountdownProps> = ({
  targetDate = new Date("2025-07-31T17:30:00"),
}) => {
  // ✅ Memoize the function so it doesn’t recreate on every render
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]); // ✅ Depend on `calculateTimeLeft` instead of recreating the function

  return (
    <div
      dir="ltr"
      className="flex flex-row gap-2 justify-center rounded-sm text-center text-2xl">
      <TimeBox label="ימים" value={timeLeft.days} />
      <TimeBox label="שעות" value={timeLeft.hours} />
      <TimeBox label="דקות" value={timeLeft.minutes} />
      <TimeBox label="שניות" value={timeLeft.seconds} />
    </div>
  );
};

interface TimeBoxProps {
  label: string;
  value: number;
}

const TimeBox: React.FC<TimeBoxProps> = ({ label, value }) => {
  return (
    <div className="p-2 w-20 bg-yellow-600 rounded-md text-center shadow-md">
      <div className="text-4xl font-bold border-2 border-white">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-sm">{label}</div>
    </div>
  );
};

export default Countdown;
