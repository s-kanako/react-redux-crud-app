import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1>HELOOOO</h1>
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  return (
      <div>
        <Cat />
        <Cat />
        <Cat />
        <Cat />

      </div>
  )
}
const Cat = () => {
  return <div>Meow!!</div>
}

export default App;
