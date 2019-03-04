import React from "react";

const Like = props => {
  const { liked, onLikeClicked }  = props ;
  let classes = "fa fa-heart-o";
  classes = liked ? 'fa fa-heart' : 'fa fa-heart-o' ;
  return (
    <i
    className = {classes}
    style={{ cursor: "pointer" }}
    onClick={
        onLikeClicked
    }
    />
  );
};

export default Like;
