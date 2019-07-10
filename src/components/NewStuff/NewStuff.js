import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

// import { Redirect } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

// import MyStuff from '../MyStuff/MyStuff';
import mystuffData from '../../helpers/data/mystuffData';

import './NewStuff.scss';

const defaultState = {
  name: '',
  description: '',
  imageUrl: '',
  price: '',
};

class NewStuff extends React.Component {
  state = {
    newItem: defaultState,
  }

  formFieldStringState = (name, e) => {
    const tempItem = { ...this.state.newItem };
    tempItem[name] = e.target.value;
    this.setState({ newItem: tempItem });
  };

  nameChange = e => this.formFieldStringState('name', e);

  descriptionChange = e => this.formFieldStringState('description', e);

  imageLinkChange = e => this.formFieldStringState('imageUrl', e);

  priceChange = e => this.formFieldStringState('price', e);

  formSubmit = (e) => {
    e.preventDefault();
    const saveMe = { ...this.state.newItem }; // makes a copy so you don't directly modify the state
    saveMe.uid = firebase.auth().currentUser.uid; // adds this key/value
    mystuffData.addNewStuff(saveMe)
      .then(() => {
        this.props.history.push('/stuff');
      }).catch(err => console.error('no scat saved', err));
  };

  render() {
    const { newItem } = this.state;
    return (
      <div className="NewStuff">
        <h1>New Stuff</h1>
          <Form id="newItemEntry" onSubmit={this.formSubmit}>
            <FormGroup>
              <Label for="itemNameInput">Name</Label>
              <Input
                type="text"
                name="itemName"
                id="itemNameInput"
                placeholder="Item name..."
                defaultValue={newItem.name}
                onChange={this.nameChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="itemDescription">Item Description</Label>
              <Input
                type="textarea"
                name="itemDescription"
                id="itemDescriptionInput"
                placeholder="Item description..."
                defaultValue={newItem.description}
                onChange={this.descriptionChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="itemImageUrl">Image Link</Label>
              <Input
                type="text"
                name="itemImageUrl"
                id="itemImageUrl"
                placeholder="Image Url..."
                defaultValue={newItem.imageUrl}
                onChange={this.imageLinkChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="itemPrice">Item Price</Label>
              <Input
                type="text"
                name="itemPrice"
                id="itemPrice"
                placeholder="$"
                defaultValue={newItem.price}
                onChange={this.priceChange}
              />
            </FormGroup>
            <Button id="newItemEntry">Save</Button>
          </Form>
      </div>
    );
  }
}

export default NewStuff;
