import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerItem: this.props.customerItem
    };
  }
  
  handleChange = e => {
    let { name, value } = e.target;
    if (e.target.name === "name") {
      this.setState({customerItem: e.target.value})
      value = e.target.value;
    }
    const customerItem = { ...this.state.customerItem, [name]: value };
    this.setState({ customerItem });
  };

  render() {
    const { toggle, onSave } = this.props;
    console.log("Customer: " + this.state.customerItem)
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Customer </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.customerItem.name}
                onChange={this.handleChange}
                placeholder="Enter Customer Name"
              />
            </FormGroup>
            {/* <FormGroup>
              <Label for="address">Address</Label>
              <Input
                type="text"
                name="address"
                value={this.state.branchItem.address}
                onChange={this.handleChange}
                placeholder="123 Fake Street 93291"
              />
            </FormGroup> */}
            {/* <FormGroup check>
              <Label for="completed">
                <Input
                  type="checkbox"
                  name="completed"
                  checked={this.state.activeItem.completed}
                  onChange={this.handleChange}
                />
                Completed
              </Label>
            </FormGroup> */}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => onSave(this.state.branchItem)}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}