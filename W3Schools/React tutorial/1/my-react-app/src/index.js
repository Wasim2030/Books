import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./Components/Button";
// import PlayButtton from "./Components/PlayButtton";
// import UploadButton from "./Components/UploadButton";

function ToolBar() {
  return (
    <div>
      <h1>Passing handler from parent to child</h1>
      <Button></Button>
      {/* <PlayButtton></PlayButtton> */}
      {/* <UploadButton></UploadButton> */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ToolBar />);
