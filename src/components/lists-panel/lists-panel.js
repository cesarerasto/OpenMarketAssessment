import React from 'react';
import ListsItem from '../lists-item/lists-item'
import './lists-panel.css';

const ListsPanel = ({ lists, editListHandler }) => {
    const listsItems = lists.map((item, index) => (<ListsItem key={index} item={item} id={item.id} click={editListHandler}/>));

    return (
        <div>
            <div className="panel-section">
                {listsItems}
            </div>
        </div>
    );
}

export default ListsPanel;