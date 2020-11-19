import React, { useEffect } from 'react';
import loaderGif from '../../assets/images/loader.gif';

function Loader(props) {
  const { loader } = props;

  useEffect(() => {
    if (loader) {
      document.getElementsByTagName('html')[0].classList.add('no-scroll');
    } else {
      document.getElementsByTagName('html')[0].classList.remove('no-scroll');
    }
  }, [loader]);
  return (
    <div className={`wrap-loader ${loader ? '' : 'd-none'}`}>
      <img src={loaderGif} />
    </div>
  );
}

export default React.memo(Loader);
