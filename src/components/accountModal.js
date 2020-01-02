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
        <ModalHeader toggle={toggle}> Branch </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Account Name</Label>
              <Input
                type="text"
                // name="name"
                value={this.state.accountItem.name}
                onChange={this.handleChange}
                placeholder="Enter Account Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="balance">Balance</Label>
              <Input
                type="text"
                // name="name"
                value={this.state.accountItem.balance}
                onChange={this.handleChange}
                placeholder="name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="holder">Holder</Label>
              <Input
                type="text"
                name="holder"
                value={this.state.accountItem.holder}
                onChange={this.handleChange}
                placeholder="holder"
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