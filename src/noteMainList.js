import React from 'react';


class NoteMainList extends React.Component {
    render() {
        //map iterates over each item in the array and returns an array
        const notes = this.props.notes.map((item) => {
            //console.log(item); this was to see what (item) was accessing
            return (
                // this returns a div with every item name and a delete button after each
                <div>
                {/* item.name is saying that i only want the name to return from the store */}
                <h3>{item.name}</h3>
                <button>Delete Note</button>
                </div>
            )
        })
        //console.log(this.props.notes); this logs to see the data we are getting from the store from the prop that was named in App.js and that is why it is this.props.notes instead of this.store.notes
        return(
            <div>
                {/* {notes} is rendering the array we mapped through to the computer because that is the value we set out variable to */}
                {notes}
            </div>
        )
    }
}

export default NoteMainList;