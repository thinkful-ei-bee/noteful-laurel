import React from 'react';


class NoteMainList extends React.Component {
    render() {

        const notes = this.props.notes.map((item) => {
            console.log(item);
            return (
                <div>
                <h3>{item.name}</h3>
                <button>Delete Note</button>
                </div>
            )
        })
        //console.log(this.props.notes);
        return(
            <div>
                {notes}
            {/* <div class="main-notes">
                 <p>Note 1</p>
                 <p>Delete Note</p>
             </div>
             <div class="main-notes">
                 <p>Note 1</p>
                 <p>Delete Note</p>
             </div>
             <div class="main-notes">
                 <p>Note 1</p>
                <p>Delete Note</p>
             </div>
             <div class="main-notes">
                 <p>Note 1</p>
                 <p>Delete Note</p>
             </div>
            <div class="main-notes">
                 <p>Add Note</p>
             </div> */}
            </div>
        )
    }
}

export default NoteMainList;