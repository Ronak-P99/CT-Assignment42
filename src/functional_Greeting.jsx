// Functional state example + hooks:
import { useState } from "react";
import styles from './Greeting.module.css'



// Functional and inline styling examples:
// Module styling example below:
// import styles from './Greeting.module.css'
// <p className={styles.greeting} > => how you implement module styling in your code

const Greeting = (props) => {
    
    // const greetingStyle = {
    //     color: 'green',
    //     fontSize: '18px'
    // }
//props in functional ex:
    const [name, setName] = useState(props.initialName);
//        [<value>, <function to change that value>] = useState()

//conditional Rendering example:
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    //      false,      true or false


// List Rendering example:

    const[users, setUsers] = useState(["Alice", "Bob", "Charlie", "John"])

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
        setName(props.initialName)
    }


    // const changeName = () => {
    //     setName('Jane Doe')
    // }
    
    return (
        <div>
            {/* List Rendering: */}
            <p className={styles.greeting}>
                {props.customUserMessage}
            </p>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>



            {/* conditional rendering: */}
            <p className={styles.greeting}>
                {/* <true> ? <true> : <false> */}
                {isLoggedIn ? `Hello, ${name}! Welcome back!`: props.customMessage}
            </p>
            {/* expression is false ? <ask to login> : <ask to logout> */}
            {!isLoggedIn ? (
                <button onClick={handleLoginClick}>Log in</button>
            ) : (
                <button onClick={handleLogoutClick}>Log out</button>
            )
            
            }


            {/* prop drilling example: */}
            {/* <p className={styles.greeting}>{props.customMessage}, {name}</p> */}
            {/* <p className={styles.greeting}>Welcome, {name} to the world of React!</p> */}
            {/* <button onClick={changeName}>Change Name</button> */}
        </div>
    )
    // return <p style={greetingStyle}>Welcome to the world of React!</p>
}
// Default props example (you can do this same exact thing for the class setting):
Greeting.defaultProps = {
    initialName: 'Johnn Doe'
}

export default Greeting;