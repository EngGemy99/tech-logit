import React from "react";
const AppWrap = (Component) =>
  function HOC() {
    return (
      <div>
        {/* <SocialMedia /> */}
        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <p className="p-text">© 2023 Gemy</p>
            <p className="p-text">All right reserved</p>
          </div>
        </div>
        {/* <NavigationDonts active={idName} /> */}
      </div>
    );
  };

export default AppWrap;
