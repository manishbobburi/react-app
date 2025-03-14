import React from "react";

function Comp1({userName = "User"}) {
  return (
    <>
      <div className="flex flex-col items-center p-7 rounded-2xl">
        <div>
          <img className="size-48 shadow-xl rounded-md"
            alt=""
            src="data:image/jpeg;base64,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"
          />
        </div>
        <div className="flex">
          <span className="text-2xl font-medium">Class Warfare</span>
          <span>The Anti-Patterns</span>
          <span className="flex">
            <span> { userName } </span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </>
  );
}
export default Comp1;
