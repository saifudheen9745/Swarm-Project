import React, { useState } from 'react';

const ColorPicker = ({ color, onChange }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleClick = () => {
    setShowPicker(!showPicker);
  };

  const handleClose = () => {
    setShowPicker(false);
  };

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative">
      <div
        className="w-16 h-8  cursor-pointer border border-gray-400"
        style={{ backgroundColor: color }}
        onClick={handleClick}
      />
      {showPicker && (
        <div className="absolute z-10 top-8">
          <div className="flex items-center justify-center">
            <input
              type="color"
              value={color}
              onChange={handleChange}
              onBlur={handleClose}
              className="w-16 h-8 appearance-none rounded-md border border-gray-400"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;