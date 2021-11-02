import { useLocation } from "react-router-dom";
import React  from "react";
function NoMatch() {
  const location = useLocation();

  return (
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  );
}

export default NoMatch