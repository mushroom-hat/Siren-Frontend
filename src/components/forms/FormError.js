import React from 'react';

const FormError = React.forwardRef(({ errMsg, ariaLive }, errRef) => {
  return (
    <>
      <div
        ref={errRef}
        className={`${
          errMsg ? 'errmsg bg-red-100 p-6 rounded-s' : 'offscreen'
        } `}
        aria-live={ariaLive}
      >
        {errMsg}
      </div>
    </>
  );
});

export default FormError;