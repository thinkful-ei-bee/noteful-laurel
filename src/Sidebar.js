import React from 'react';
import Header from './Header';



class Sidebar extends React.Component {
    render() {
        return(
            <div> 
               
            <aside id="sidebar">
                <section id="f1">Folder 1</section>
                <section id="f2">Folder 2</section>
                <section id="f3">Folder 3</section>
                <section id="add">Add folder</section>
            </aside>
            </div>
        )
    }
}

export default Sidebar;