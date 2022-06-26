import React, { useState } from 'react';
import FooterView from './FooterView';
import './Footer.sass';

function Footer() {
  const [category] = useState(['часы', 'браслеты', 'ремни', 'ювелирные изделия', 'запонки']);  

  return (
    <FooterView 
      category={category}
    />
  );
}

export default Footer;
