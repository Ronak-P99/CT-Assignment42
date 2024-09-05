// What is state?
// What is a stateful vs stateless component?



// Class Example and stylesheet example:

import { Component, PropTypes } from 'react';
import { string } from 'prop-types'
import './styles.css'

class ClassGreeting extends Component {
// Added props into state example!:
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.initialName
        }
        this.changeName = this.changeName.bind(this)
    }

    changeName() {
        this.setState({name: "Jane Doe"})
    }

    render() {

        const name = this.state.name;

        return (
            <div>
                <p className='greeting'>Hello, {name}! This is a class-based greeting!</p>

                <button onClick={this.changeName}>Change Name</button>
            </div>
        )
        //return <p className='greeting'>This is a class-based greeting!</p>
    }
}

// Continued to initialize props:
ClassGreeting.propTypes = {
    initialName: string

}

export default ClassGreeting