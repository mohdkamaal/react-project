import { React } from "react";

class Footer extends React.component{

constructor(){
    super()
    this.state = {
        footer: "this is my footer ",
    };
    }

    componentDidMount(){
        this.state({footer: "Kamaal Mohammad"});
    }
    render() {
    return <div><p>this footer</p></div>
    }
}

export default Footer;