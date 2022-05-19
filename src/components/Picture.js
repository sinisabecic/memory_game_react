import React from "react";
import Image from "react-bootstrap/Image";

function Picture({ item, onImageClick }) {
  const facingDownImageUrl =
    "https://media.istockphoto.com/photos/question-mark-3d-red-interrogation-point-asking-sign-punctuation-mark-picture-id1023347350?k=20&m=1023347350&s=612x612&w=0&h=VogcQy0SJJYgV_TItvoIRowOCR93tuCmO9o3AY-_mCg=";

  return (
    <div className="col-4">
      <Image
        width={"150"}
        height={"130"}
        src={item.facingUp ? item.url : facingDownImageUrl}
        onClick={() => onImageClick(item.id)}
      />
    </div>
  );
}

export default Picture;
