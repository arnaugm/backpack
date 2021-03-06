function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
export default ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
    width: "1.125rem",
    height: "1.125rem"
  }} {...props}><path d="M16.4 6.2l4.1-4.1.7.7L2.8 21.2l-.7-.7 2.3-2.3c-.2-.3-.4-.7-.4-1 0-2.3 1.8-1.7 2-4 .5-5.5 1-7.7 4.4-8.9C11.6 3.8 11 3 12 3s.4.8 1.6 1.3c1.3.4 2.2 1 2.8 1.9zm-7.2 10l8.1-8.1c.4 1.3.5 2.9.7 5.1.2 2.3 2 1.7 2 4 0 1.7-3.5 3.8-8 3.8-2.5 0-4.7-.6-6.1-1.5l.7-.7c1.1.6 3 1.2 5.4 1.2 3.9 0 6.5-1.7 6.5-2.1 0-.7-2-2-6.5-1.9-1.1 0-2 .1-2.8.2zm.3 1c.7-.1 1.6-.2 2.5-.2s1.8.1 2.5.2c-.6 1.2-1.4 1.8-2.5 1.8s-2-.6-2.5-1.8z" /></svg>;
});