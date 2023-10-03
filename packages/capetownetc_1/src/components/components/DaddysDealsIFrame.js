import React from "react";

const DaddysDealsIFrame = ({ bgColor }) => {
  return (
    <div className="daddysdeals_iframe_parent_1" style={bgColor !== undefined ? { backgroundColor: "white" } : {}}>
      <iframe
        className="daddysdeals_iframe_container_1"
        src="https://daddysdeals.co.za/widget/index.php?getData=all&getCategory=restaurants"
      />
    </div>
  );
};

export default DaddysDealsIFrame;
