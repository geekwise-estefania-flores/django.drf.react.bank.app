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
      accountItem: this.props.accountItem
    };
  }
  render() {
    const { toggle, onSave } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Customer </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Customer Name</Label>
              <Input
                type="text"
                // name="name"
                value={this.state.accountItem.name}
                onChange={this.handleChange}
                placeholder="Enter Customer Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="branch">Branch</Label>
              <Input
                type="text"
                // name="name"
                value={this.state.accountItem.balance}
                onChange={this.handleChange}
                placeholder="branch name"
              />
            </FormGroup>
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