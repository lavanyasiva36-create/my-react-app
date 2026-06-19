import { useState } from "react";

const ConditionalDisplay = () => {

  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <h1>Student Details</h1>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      <br />
      <br />

      {showDetails && (
        <div>
          <h2>Name: Lavanya</h2>
          <h2>Course: React JS</h2>
        </div>
      )}
    </>
  );
};

export default ConditionalDisplay;