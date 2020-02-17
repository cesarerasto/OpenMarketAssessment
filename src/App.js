import React from 'react';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import Home from './components/home/home'
import NewList from './components/new-list/new-list'
import EditLists from './components/edit-lists/edit-lists'
import logo from './logo.svg';
import './App.css';

function App() {
  const { useState } = React;
  const [lists, setLists] = useState(
    [
      {
        id: "1",
        listName: "computadoras",
        listItems:[
          "toshiba",
          "vaio",
          "hp",
          "lenovo",
          "mac"
        ]
      },
      {
        id: "2",
        listName: "carros",
        listItems: [
          "mazda",
          "honda",
          "chevrolet",
          "ford",
          "kia",
          "bmw"
        ]
      }
    ]);
  const [listItems, setListItems] = useState([]);
  const [listName, setListName] = useState('');
  const [listId, setListId] = useState('');
  const [listItemName, setListItemName] = useState('');

  const onChangeItemNameHandler = e => {
    setListItemName(e.target.value);
  }

  const onChangeListNameHandler = e => {
      setListName(e.target.value);
  }

  const onClickAddItemHandler = e => {
    if(listItemName){
      setListItems([...listItems, listItemName]);
      setListItemName("");
    }
    else {
      alert("Please specify the name of the item.");
    }
  }

  const onClickDeleteListItemHandler = (index) => {
      listItems.splice(index,1);
      setListItems([...listItems]);
  }

  const onClickAddToLists = (list) => {
    if(listName){
      let existingItem = lists.find(item => item.id === listId);
    
      if(existingItem){
        const editedListObject = {
          "id": listId,
          "listName": listName,
          "listItems": [...list]
        }
        lists.splice(lists.indexOf(existingItem), 1, editedListObject);
        setLists([...lists]);
        setListItemName("");
        setListName("");
        setListId("");
        setListItems([]);
      }
      else {
        console.log(listName);
        const newListObject = {
          "id": Math.random(),
          "listName": listName,
          "listItems": [...list]
        }
        setLists([...lists, newListObject]);
        setListItemName("");
        setListName("");
        setListId("");
        setListItems([]);
      }
    }
    else{
      alert("Please specify the name of the list.");
    }
  }

  const onClickEditList = (item) => {
      setListItemName("");
      setListId(item.id);
      setListName(item.listName);
      setListItems([...item.listItems]);
  }

  const clearToAddNew = () => {
      setListItemName("");
      setListName("");
      setListId("");
      setListItems([]);
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul className="App-nav-list">
            <li>
              <NavLink exact to={process.env.PUBLIC_URL + "/"}>Home</NavLink>
            </li>
            <li onClick={clearToAddNew}>
              <NavLink to={process.env.PUBLIC_URL + "/new-list"}>New List</NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/lists"}>Edit Lists</NavLink>
            </li>
          </ul>
        </header>
        <section className="pages-content">
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/new-list"}
              render={props => (<NewList {...props} listItems={listItems} listName={listName} listItemName={listItemName} itemNameHdl={onChangeItemNameHandler} listNameHdl={onChangeListNameHandler} addItemClk={onClickAddItemHandler} deleteItemClk={onClickDeleteListItemHandler} addToListsClk={onClickAddToLists}/>)}
            />
            <Route exact path={process.env.PUBLIC_URL + "/lists"} render={props => (<EditLists {...props} lists={lists} editListsClk={onClickEditList}/>)}/>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
