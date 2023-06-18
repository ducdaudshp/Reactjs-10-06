import {React, Component} from 'react';

class ClassCompDemo extends Component {
    render(){
        return(
            <>
                <h2>Class Component Demo</h2>
                <h5>Wellcome to {this.props.name}</h5>
                <h5>Address {this.props.address}</h5>
            </>
        )
    }
}

export default ClassCompDemo;