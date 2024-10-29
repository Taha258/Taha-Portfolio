declare module "react-animated-numbers" {
  import React from "react";

  // Naya type banayein
  interface Config {
    mass: number;
    friction: number;
    tension: number; 
  }

  interface AnimatedNumbersProps {
    animateToNumber: number;
    includeComma?: boolean;
    locale?: string;
    className?: string;
    configs?: (value: number, index: number) => Config; 
  }

  const AnimatedNumbers: React.FC<AnimatedNumbersProps>;
  export default AnimatedNumbers;
}
