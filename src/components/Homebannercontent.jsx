import React from 'react';

function Homebannercontent ({bannerTitle, buttonText, activeIndex, idx, HomeBannerStyle}) {

    return (
      <>
        <h1 className={activeIndex === idx ? HomeBannerStyle.fadeIn : HomeBannerStyle.fadeOut}>{bannerTitle}</h1>
        <button className={activeIndex === idx ? HomeBannerStyle.buttonFadeIn : HomeBannerStyle.buttonFadeOut}> {buttonText} </button>
      </>
    );

}

export default Homebannercontent;