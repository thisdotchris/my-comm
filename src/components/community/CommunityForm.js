import React, { Component } from "react";

export default class CommunityForm extends Component {
  state = {
    _id: "",
    id: "",
    title: "",
    name: "",
    description: "",
  };

  componentDidMount() {
    this.setState({
      id: this.props.id ? this.props.id : "communityForm",
      title: this.props.title ? this.props.title : "",
      _id: this.props._id,
      name: this.props.name,
      description: this.props.description,
    });
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.id !== prevProps.id ||
      this.props.title !== prevProps.title ||
      this.props._id !== prevProps._id
    ) {
      this.setState({
        id: this.props.id,
        title: this.props.title,
        _id: this.props._id,
        name: this.props.name,
        description: this.props.description,
      });
    }
  }

  onSubmit = () => {
    var data = {
      _id: this.state._id,
      name: this.state.name,
      description: this.state.description,
    };
    if (this.state.title === "Edit") {
      if (this.props.onEdit) this.props.onEdit(data);
    } else if (this.state.title === "Create") {
      if (this.props.onAdd) this.props.onAdd(data);
    } else {
      alert("Unknown type on submit...");
    }
  };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <div className="modal" id={this.state.id}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{this.state.title}</h4>
            </div>
            <div className="modal-body">
              <form className="form-group">
                <label htmlFor="name">Name: </label>
                <input
                  name="name"
                  className="form-control"
                  type="test"
                  defaultValue={this.state.name}
                  onChange={this.onChange}
                />
                <label htmlFor="description">Description: </label>
                <textarea
                  className="form-control"
                  rows="5"
                  name="description"
                  defaultValue={this.state.description}
                  onChange={this.onChange}
                ></textarea>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={this.onSubmit}
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
