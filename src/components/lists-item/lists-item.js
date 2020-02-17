import React from 'react';
import { useHistory } from 'react-router-dom';
import './lists-item.css';

const editList = (item, click, history) => {
    click(item);
    history.push(process.env.PUBLIC_URL + '/new-list');
}

const ListsItem = ({ item, id, click }) => {
const history = useHistory();

    return (
        <div className="lists-item" name={id} onClick={() => editList(item, click, history)}>{item.listName}</div>
    );
}

export default ListsItem;