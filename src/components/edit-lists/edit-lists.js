import React from 'react';
import ListsPanel from '../lists-panel/lists-panel';
import './edit-lists.css';

const EditLists = ({ lists, editListsClk }) => {

  
  return (
    <section className="edit-list-section">
      <div className="edit-list-container">
        <p>Click over the name of the list if you want to view/edit.</p>
        <ListsPanel lists={lists} editListHandler={editListsClk}/>
      </div>
    </section>
  );
}

export default EditLists;