"use client";
import React from "react";
import dynamic from "next/dynamic";
import "../allStyleFile/achievements.css"

// Dynamically import the AnimatedNumbers component
const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

// List of achievements
const achievementsList = [
  {
    metric: "Projects",
    value: "13",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,00",
  },
  {
    metric: "Awards",
    value: "1",
  },
  {
    metric: "Years",
    value: "1",
  },
];

// AchievementsSection component
const AchievementsSection = () => {
  return (
    <div className="achievements-section">
      <div className="achievements-container">
        {achievementsList.map((achievement, index) => (
          <div key={index} className="achievement-item">
            <h2 className="achievement-value">
              {achievement.prefix ? achievement.prefix : null}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value.replace(/,/g, ""))}
                locale="en-US"
                className="achievement-value"
                configs={(_, index) => ({
                  mass: 1,
                  friction: 100,
                  tension: 140 * (index + 1),
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="achievement-metric">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
