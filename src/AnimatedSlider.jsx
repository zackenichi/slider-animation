import { Slider } from '@mui/material';
import React, { useEffect } from 'react';

const AnimatedSlider = ({ minLabel, maxLabel, demo }) => {
  const [value, setValue] = React.useState(0);
  const targetValue = 50;

  const marks = [
    {
      value: 0,
      label: minLabel,
    },
    {
      value: 100,
      label: maxLabel,
    },
  ];

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  //   React.useEffect(() => {
  //     if (value < targetValue) {
  //       setValue(value + 1);
  //     }
  //   }, [value]);

  useEffect(() => {
    if (demo) {
      const animationTimeout = setTimeout(() => {
        setValue(targetValue);
      }, 100); // Adjust the delay as needed

      return () => {
        clearTimeout(animationTimeout);
      };
    }
  }, [demo]); // Empty dependency array to run this effect only once

  return (
    <Slider
      aria-label="Volume"
      value={value}
      onChange={handleChange}
      marks={marks}
      min={0}
      max={100}
      sx={{
        '& .MuiSlider-markLabel': {
          fontSize: '10px',
          color: 'gray',
        },
      }}
    />
  );
};

export default AnimatedSlider;
