import React, { useState } from "react";

import Picture from "./Picture";

import data from "../data.js";
import Score from "./Score";

function Board(props) {
  const [pictures, setPictures] = useState(
    data.map((object) => ({ ...object }))
  );
  const [round, setRound] = useState(0);
  const [hitted, setHitted] = useState(0);

  const handleImageClick = (id) => {
    let pictureDuplicate = [...pictures];
    let item = pictureDuplicate.find((x) => x.id === id);

    if (checkIsGameOver()) return;

    if (checkIsItemAlreadyHit(item)) return;
    if (checkIsAlreadyFacingUp(item)) return;

    let facingUpButNotHit = getFacingUpButNotHit(pictureDuplicate);

    if (facingUpButNotHit !== undefined) {
      if (facingUpButNotHit.length === 2) {
        let item1 = pictureDuplicate.find(
          (x) => x.id === facingUpButNotHit[0].id
        );
        let item2 = pictureDuplicate.find(
          (x) => x.id === facingUpButNotHit[1].id
        );

        pictureDuplicate[pictureDuplicate.indexOf(item1)].facingUp = false;
        pictureDuplicate[pictureDuplicate.indexOf(item2)].facingUp = false;
      } else if (facingUpButNotHit.length === 1) {
        let item1 = pictureDuplicate.find(
          (x) => x.id === facingUpButNotHit[0].id
        );
        if (item1.pairWith === item.id) {
          setHitted((prevState) => prevState + 1);
          pictureDuplicate[pictureDuplicate.indexOf(item)].facingUp = true;
          pictureDuplicate[pictureDuplicate.indexOf(item)].hit = true;
          pictureDuplicate[pictureDuplicate.indexOf(item1)].facingUp = true;
          pictureDuplicate[pictureDuplicate.indexOf(item1)].hit = true;
        } else {
          setRound((prevState) => prevState + 1);
        }
      }
    }

    pictureDuplicate[pictureDuplicate.indexOf(item)].facingUp = true;

    setPictures(pictureDuplicate);
  };

  const checkIsGameOver = () => {
    return round > 4 || hitted === 6;
  };

  const checkIsAlreadyFacingUp = (item) => {
    return item.facingUp;
  };
  const checkIsItemAlreadyHit = (item) => {
    return item.hit === true;
  };
  const getFacingUpButNotHit = (items) => {
    return items.filter((x) => x.facingUp === true && x.hit === false);
  };

  return (
    <div className="container">
      <div className="row">
        <Score
          rounds={round}
          hitted={hitted}
          playAgain={() => {
            setPictures(data.map((object) => ({ ...object })));
            setHitted(0);
            setRound(0);
          }}
        ></Score>
        {pictures.map((x) => (
          <Picture
            key={x.id}
            item={{ url: x.url, id: x.id, facingUp: x.facingUp }}
            onImageClick={handleImageClick}
          ></Picture>
        ))}
      </div>
    </div>
  );
}

export default Board;
