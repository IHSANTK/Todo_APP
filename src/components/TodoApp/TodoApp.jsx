import React, { Component } from 'react';
import './TodoApp.css';

export default class TodoApp extends Component {
  state = {
    input: '',
    items: [],
    editingIndex: null, // Track the index of the item being edited
    showModal: false, // Track whether to show the modal for editing
    editedItem: '' // Store the value of the item being edited
  };

  sortitems = (event) => {
    event.preventDefault();
    const { input } = this.state;

    this.setState({
      items: [...this.state.items, input],
      input: '',
    });
  };

  handlechange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  deleteitem = (key) => {
    this.setState({
      items: this.state.items.filter((data, index) => index !== key),
    });
  };

  handleEditTodo = (index) => {
    this.setState({
      editingIndex: index,
      showModal: true,
      editedItem: this.state.items[index] // Set the current value of the item being edited
    });
  };

  handleSaveEdit = () => {
    console.log("ooook");
    const { items, editingIndex, editedItem } = this.state;
    const updatedItems = [...items];
    updatedItems[editingIndex] = editedItem;

    this.setState({
      items: updatedItems,
      editingIndex: null, 
      showModal: false, 
      editedItem: '' 
    });
  };

  handleChange2 = (e) => {
    this.setState({ editedItem: e.target.value });
  };

  render() {
    const { input, items, showModal, editingIndex, editedItem } = this.state;

    return (
      <div className="todocontainer">
        <form className="inputsection" onSubmit={this.sortitems}>
          <h1>TodoApp</h1>
          <input
            type="text"
            value={input}
            onChange={this.handlechange}
            placeholder="Enter Items..."
          />
        </form>

        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {index === editingIndex && showModal ? (
                <>
                  <input
                  className='editinput'
                    type="text"
                    value={editedItem}
                    onChange={this.handleChange2}
                  />
                  <button className='me-2 savebtn' onClick={this.handleSaveEdit}>Save</button>
                </>
              ) : (
                <>
                  {data}
                  <div>
                    <i
                      className="fa-solid fa-pencil"
                      onClick={() => this.handleEditTodo(index)}
                    ></i>
                    <i
                      className="fa-solid fa-trash-can"
                      onClick={() => this.deleteitem(index)}
                    ></i>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
