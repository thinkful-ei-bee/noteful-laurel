import React from 'react';
//import Header from './Header';



class Sidebar extends React.Component {
    render() {
//create an array of folders (3 from the store)
//for each folder we want one div
        const folders = this.props.folders.map((folder) => {
            console.log(folder);
            return (
                <section>
                    <h3>{folder.name}</h3>
                </section>
            )
        })
        return(
            <div>
              
                <div>
                    <aside id="sidebar">
                        {folders} 
                        {/* <section id="f1">Folder 1</section>
                        <section id="f2">Folder 2</section>
                        <section id="f3">Folder 3</section> */}
                    </aside>
                </div>
            <button>Add Folder</button> 
            
            </div>
        )
    }
}

export default Sidebar;