import React, { Component } from "react";

class Todo extends Component {
  state = {
    todoarr: [],
    name: "",
  };
  handleEdit = (ind) => {
    let { todoarr } = this.state;
    todoarr.splice(ind, 1);
    console.log(todoarr);
    this.setState({ todoarr });
  };
  handleChange = (e) => {
    let { currentTarget: input } = e;
    let { name } = this.state;
    name = input.value;
    this.setState({ name });
  };
  handleSubmit = (e) => {
    console.log("jackd");
    if (e.keyCode === 13 && e.shiftKey === false) {
      let { name, todoarr } = this.state;
      e.preventDefault();
      todoarr.push(name);
      console.log(todoarr);
      this.setState({ todoarr, name: "" });
    }
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="text-center">To Do App</h4>
          </div>
        </div>
        <div className="form-group">
          <label
            htmlFor="name"
            className="form-control-label "
            style={{ fontSize: "18px" }}
          >
            Todo({this.state.todoarr.length})
          </label>
          <input
            type="text"
            name="name"
            onKeyDown={this.handleSubmit}
            onChange={this.handleChange}
            value={this.state.name}
            className="form-control"
          ></input>
        </div>
        {this.state.todoarr.length > 0 ? <h5>To Do List </h5> : "List is Empty"}
        {this.state.todoarr.length > 0
          ? this.state.todoarr.map((vl, ind) => (
              <div className="form-group">
                <button
                  className="btn btn-outline-success col-2 text-center"
                  style={{
                    borderRadius: "20px",
                    border: "dotted",
                    height: "50px",
                  }}
                  onClick={() => this.handleEdit(ind)}
                >
                  {vl}
                </button>
              </div>
            ))
          : ""}
      </div>
    );
  }
}

export default Todo;
