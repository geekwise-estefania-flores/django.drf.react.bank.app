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
      branchItem: this.props.branchItem
    };
  }
  // handleChange = e => {
  //   let { name, value } = e.target;
  //   if (e.target.type === "checkbox") {
  //     value = e.target.checked;
  //   }
  //   const activeItem = { ...this.state.activeItem, [name]: value };
  //   this.setState({ activeItem });
  // };
  render() {
    const { toggle, onSave } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Branch </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Branch Name</Label>
              <Input
                type="text"
                // name="name"
                value={this.state.branchItem.name}
                onChange={this.handleChange}
                placeholder="Enter Branch Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                type="text"
                name="address"
                value={this.state.branchItem.address}
                onChange={this.handleChange}
                placeholder="123 Fake Street 93291"
              />
            </FormGroup>
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