import React from 'react';

// function Greet() {
//     return <h1>Hello Philip</h1>
// }

// Use regular props
// const Greet = (props) => {
//     console.log(props);
//     return <h1>Hello { props.name }</h1>
// }

// Use destructuring props
const Greet = ({ name, heroName }) => {
    return <h1>Hello {name} a.k.a {heroName}</h1>
}

export default Greet;