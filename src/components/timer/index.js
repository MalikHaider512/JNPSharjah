import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";

export default function Timer({ date }) {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date(date).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance > 0) {
        const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor(
          (distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
        );
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          months,
          days,
          hours,
          minutes,
          seconds,
        });
      } else {
        clearInterval(interval);
        setTimeLeft({
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.counterView}>
      <Text style={styles.labelText}>Remaining Time:</Text>
      <Text style={styles.valueText}>
        {timeLeft.months} M {timeLeft.days} D {timeLeft.hours} H{" "}
        {timeLeft.minutes} Min {timeLeft.seconds}Sec
      </Text>
    </View>
  );
}
