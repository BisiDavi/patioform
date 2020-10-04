import React, { useState } from "react";

const FormImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="formImage">
      <div className="patioImage">
        <div className="door">
          <h4>Door 1</h4>
        </div>
      </div>
      <div className="patioImage">
        <div className="door">
          <h4>Door 2</h4>
        </div>
      </div>
      <div className="patioImage">
        <div className="door">
          <h4>Door 3</h4>
        </div>
      </div>
      <div className="patioImage">
        <div className="door">
          <h4>Door 4</h4>
        </div>
      </div>
      <div className="patioImage">
        <div className="door">
          <h4>Door 5</h4>
        </div>
      </div>
      <div className="patioImage">
        <div className="door">
          <h4>Door 6</h4>
        </div>
      </div>
      <div className="patioImage">
        <div className="door">
          <h4>Door 7</h4>
        </div>
      </div>
      <div className="patioImage">
        <div className="door">
          <h4>Door 8</h4>
        </div>
      </div>
    </div>
  );
};

export default FormImage;
