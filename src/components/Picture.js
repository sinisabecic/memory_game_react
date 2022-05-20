import React from "react";
import Image from "react-bootstrap/Image";
import "hover.css";

function Picture({ item, onImageClick }) {
  const facingDownImageUrl =
    "https://cdn-icons-png.flaticon.com/512/6829/6829746.png";

  return (
    <div className="col-4">
      <Image
        className="hvr-grow-rotate rounded-circle"
        width={"150"}
        height={"130"}
        src={item.facingUp ? item.url : facingDownImageUrl}
        onClick={() => onImageClick(item.id)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default Picture;
