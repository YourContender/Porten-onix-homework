import React, { useState } from 'react';
import FooterView from './FooterView';
import './Footer.sass';

function Footer() {
  // const [category] = useState(['часы', 'браслеты', 'ремни', 'ювелирные изделия', 'запонки']);  
  const [category] = useState(['watch', 'bracelets', 'belts', 'jewelry sets', 'cufflinks']);  

  return (
    <FooterView 
      category={category}
    />
  );
}

export default Footer;
