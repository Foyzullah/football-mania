import React from "react";

const Header = (props) => {
  const { banner, badge, homeBanner } = props;
  let bannerImage;
  if (homeBanner) {
    bannerImage = homeBanner;
  }
  if (banner) {
    bannerImage = banner;
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="banner-area">
            <img src={bannerImage} alt="" />
            <img className="league-badge" src={badge} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
