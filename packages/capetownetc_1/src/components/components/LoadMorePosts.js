import React from "react"; 
import { Spinner } from "react-bootstrap";

const LoadMorePosts = ({
  changeParentPageNumber, 
  isLoadingNewPosts,
}) => {
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  return (
    <div> 
      {!isLoadingNewPosts ? (
        <button
          className="load_more_button_1"
          onClick={() => {
            changeParentPageNumber();
          }}
        >
          LOAD MORE
        </button>
      ) : (
        <div className="spinner_parent_0 load_more_button_1">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default LoadMorePosts;
