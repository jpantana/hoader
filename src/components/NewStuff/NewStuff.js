import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

import mystuffData from '../../helpers/data/mystuffData';

import './NewStuff.scss';

class NewStuff extends React.Component {
  state = {
    name: '',
    description: '',
    imageUrl: '',
    price: 0,
  }

  render() {
    const saveNewItem = (e) => {
      e.preventDefault();
      // this.setState({
      //   name: document.getElementById('itemNameInput').value,
      //   description: document.getElementById('itemDescriptionInput').value,
      //   imageUrl: document.getElementById('itemImageUrl').value,
      //   price: document.getElementById('itemPrice').value,
      // });
      // const newItem = {
      //   name: this.state.name,
      //   description: this.state.description,
      //   imageUrl: this.state.imageUrl,
      //   price: this.state.price,
      // };
      const newItem = {
        name: document.getElementById('itemNameInput').value,
        description: document.getElementById('itemDescriptionInput').value,
        imageUrl: document.getElementById('itemImageUrl').value,
        price: document.getElementById('itemPrice').value,
      };
      mystuffData.addNewStuff(newItem).then((resp) => {
        console.error(resp);
        // change path of url to /stuff
      }).catch(err => console.error('no new item added', err));
    };
    return (
      <div className="NewStuff">
        <h1>New Stuff</h1>
          <Form id="newItemEntry">
            <FormGroup>
              <Label for="itemName">Name</Label>
              <Input type="text" name="itemName" id="itemNameInput" placeholder="Item name..." />
            </FormGroup>
            <FormGroup>
              <Label for="itemDescription">Item Description</Label>
              <Input type="textarea" name="itemDescription" id="itemDescriptionInput" placeholder="Item description..." />
            </FormGroup>
            <FormGroup>
              <Label for="itemImageUrl">Item Description</Label>
              <Input type="text" name="itemImageUrl" id="itemImageUrl" placeholder="Image Url..." />
            </FormGroup>
            <FormGroup>
              <Label for="itemPrice">Item Description</Label>
              <Input type="text" name="itemPrice" id="itemPrice" placeholder="$" />
            </FormGroup>
            <Button id="newItemEntry" onClick={ saveNewItem }>Save</Button>
          </Form>
      </div>
    );
  }
}

export default NewStuff;
