import React from 'react';
import { Image } from 'react-native';

const Logo = () => {
  return (
    <Image
      source={require('./wfp_logo.png')} // Replace with the path to your logo image
      style={{ width: 300, height:420 }} // Adjust the width and height as per your logo dimensions
      resizeMode="contain" // You can use 'contain', 'cover', 'stretch', etc. to adjust the image size
    />
  );
};

export default Logo;
