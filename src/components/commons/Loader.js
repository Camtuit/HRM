import React, { useEffect } from 'react';

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
      <i className="fa fa-spinner fa-spin"></i>
    </div>
  );
}

export default React.memo(Loader);
