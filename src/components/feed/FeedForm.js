import React, { Component } from "react";

export default class FeedForm extends Component {
  state = {
    id: "feedForm",
    title: "",
    description: "",
  };

  componentDidUpdate(prevProps) {
    if (this.props.id && this.props.id !== prevProps.id) {
      this.setState({ id: this.props.id });
    }
    if (this.props.title && this.props.title !== prevProps.title) {
      this.setState({ title: this.props.title });
    }
    if (
      this.props.description &&
      this.props.description !== prevProps.description
    ) {
      this.setState({ description: this.props.description });
    }
  }

  onAdd = () => {
    this.props.onAdd({
      title: this.state.title,
      description: this.state.description,
    });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="modal" id={this.state.id}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <form className="form-group">
                <label htmlFor="titile">Title: </label>
                <input
                  name="title"
                  className="form-control"
                  onChange={this.onChange}
                  defaultValue={this.state.title}
                />

                <label htmlFor="description">Description: </label>
                <textarea
                  name="description"
                  className="form-control"
                  rows="5"
                  onChange={this.onChange}
                  defaultValue={this.state.description}
                />
              </form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
                onClick={this.onAdd}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
