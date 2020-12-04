import { React } from "react";

class Menu extends React.component{

constructor(){
    super()
    this.state = {
        menu: "this is my footer ",
    };
    }

    componentDidMount(){
        this.state({menu: "Kamaal Mohammad"});
    }
    render() {
    return <div><p>this is menu</p></div>
    }
}

export default Menu;