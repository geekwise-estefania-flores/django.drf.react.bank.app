import React, { Component } from "react";
import Modal from "./components/branchModal";
import Modal from "./components/accountModal";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // viewCompleted: false,
      branchItem: {
        name: "",
        address: "",
        // completed: false
      },
      branchList: [],

      accountItem: {
      name: "",
      balance: "",
      holder: "",
    },
    accountList: [],
  }
};
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("https://django-drf-react-bank-project.herokuapp.com/api/branches/")
      .then(res => this.setState({ branchList: res.data.results }))
      .catch(err => console.log(err));
  };
  displayCompleted = status => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
  };
  renderTabList = () => {
    return (
      <div className="my-5 tab-list">
        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? "active" : ""}
        >
          Accounts
        </span>
        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? "" : "active"}
        >
          Branches
        </span>
        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? "active" : ""}
        >
          Customers
        </span>
        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? "active" : ""}
        >
          Products
        </span>
      </div>
    );
  };
  renderItems = () => {
    // const { viewCompleted } = this.state;
    const newItems = this.state.branchList
    console.log(newItems)
    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${
            this.state.viewCompleted ? "completed-todo" : ""
          }`}
          title={item.name}
        >
          {item.name}
        </span>
        <span>
          <button
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"
          >
            {" "}
            Edit{" "}
          </button>
          <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger"
          >
            Delete{" "}
          </button>
        </span>
      </li>
    ));
  };
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  handleSubmit = item => {
    this.toggle();
    if (item.id) {
      axios
        .put(`https://django-drf-react-bank-project.herokuapp.com/api/branches/${item.id}/`, item)
        .then(res => this.refreshList());
      return;
    }
    axios
      .post("https://django-drf-react-bank-project.herokuapp.com/api/branches/", item)
      .then(res => this.refreshList());
  };
  handleDelete = item => {
    axios
      .delete(`https://django-drf-react-bank-project.herokuapp.com/api/branches/${item.id}`)
      .then(res => this.refreshList());
  };
  createItem = () => {
    const item = { name: "", address: "123 Fake Street 93291"};
    this.setState({ branchItem: item, modal: !this.state.modal });
  };
  editItem = item => {
    this.setState({ branchItem: item, modal: !this.state.modal });
  };
  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Bank of Stef</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button onClick={this.createItem} className="btn btn-primary">
                  Add task
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            branchItem={this.state.branchItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}
export default App;