import React from 'react';
import FooterView from './FooterView';
import './Footer.sass';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: ['часы', 'браслеты', 'ремни', 'ювелирные изделия', 'запонки']
    };
  }

  render() {
    const { category } = this.state;
    return (
      <FooterView 
        category={category}
      />
    );
  }
}

export default Footer;
