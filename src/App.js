import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
//import { Route } from 'react-router-dom';
import NoteMainList from './NoteMainList';




class App extends Component {
  // here is taking the state and adding an object with a store key giving it the value of this.props.store which
  // was named in the index.js file to be passed down the rest of the application
  state = {
    store: this.props.store,
  }

  render() {
    // 1) how can we log the data we want to work here 
    //console.log(this.props.store.notes); this won't work because i need to pull down from the store
    
    // 2) how can we get the data to the component we want and log it out there
    //console.log(this.state.store.notes) this is the data i want to access if i want the notes
    return(
      <div className="App">
        <main>
          <Header />
          {/* here in sidebar i will need to access the folders from the store */}
          <Sidebar folders={this.state.store.folders}/>
          {/* in notemainlist we access the notes by naming the prop and pulling it from the store */}
          <NoteMainList notes={this.state.store.notes}/>        
        </main>
      </div>
    )
  }
}

export default App;
