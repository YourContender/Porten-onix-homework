import React      from "react";
import FooterView from "./FooterView";
import './Footer.sass';

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: ['часы', 'браслеты', 'ремни', 'ювелирные изделия', 'запонки']
        }
    }
    render() {
        return (
            <FooterView 
                category={this.state.category}
            />
        )
    }
}

export default Footer;