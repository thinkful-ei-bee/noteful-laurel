import React, { Component } from 'react';
import Main from './Main';
import Folder from './Folder';
import Note from './Note';
// import { runInContext } from 'vm';


class App extends Component {
  render() {
    return(
      <div>
        <Main />
        <Folder />
        <Note />
      </div>
    )
  }
}

export default App;
