import React from 'react'
import PropTypes from 'prop-types'

const BlurBlob = ({ position,size}) => {
  //Destructure position and size
  const { top, left } = position
  const {width, height } = size
  return (
    <div className='absolute'
    // The style={{ ... }} inline object sets custom positioning and size dynamically based on props.
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)',
      }}>
        
      <div className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob"></div>
    </div>
  )
}

//Define prop types
BlurBlob.propTypes = {  //PropTypes → is the library/tool you're importing and propTypes → is the React component's static property where you define rules
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob
