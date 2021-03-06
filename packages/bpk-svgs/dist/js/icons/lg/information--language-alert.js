function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
export default ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{
    width: "1.5rem",
    height: "1.5rem"
  }} {...props}><path d="M20.7 7.5l-.3-1.7c-.2-1.1-1.1-2-2.2-2.3-1.5-.3-2.9-.5-4.4-.5h-3.6c-1.5 0-2.9.2-4.4.5-1.1.3-2 1.2-2.2 2.3l-.3 1.7c-.4 2-.4 4 0 5.9l.3 1.7c.2 1.1 1.1 2 2.2 2.3.7.2 1.4.3 2.2.4v2.6c0 .4.3.6.6.6h.1c1.6-.6 3-1.6 4-3h1.1c1.5 0 2.9-.2 4.4-.5 1.1-.3 2-1.2 2.2-2.3l.3-1.7c.4-2 .4-4 0-6zM13 6l-.2 6.2h-1.5L11 6h2zm-.3 8.7c-.4.4-1 .4-1.4 0-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7.2-.2.5-.3.7-.3.3 0 .5.1.7.3.4.5.4 1.1 0 1.4z" /></svg>;
});