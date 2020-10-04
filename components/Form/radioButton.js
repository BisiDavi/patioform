import React, { useState } from "react";

const RadioButton = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="exampleRadios"
        id="exampleRadios1"
        value="option1"
      />
      <label className="form-check-label" for="exampleRadios1">
        Default radio
      </label>
    </div>
  );
};

export default RadioButton;
