import { React } from "react";

class Header extends React.component{

constructor(){
    super()
    this.state = {
        header: "this is header ",
    };
    }

    componentDidMount(){
        this.state({header: "Kamaal Mohammad"});
    }
    render() {
    return <div> <p>this is header</p></div>
    }
}





export default Header;
