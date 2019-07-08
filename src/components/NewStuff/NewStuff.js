import React from 'react';
// import { Redirect } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

import MyStuff from '../MyStuff/MyStuff';
import mystuffData from '../../helpers/data/mystuffData';

import './NewStuff.scss';

class NewStuff extends React.Component {
  state = {
    redirectToReferrer: false,
    newItem: {}, // just added this
  }

  render() {
    const saveNewItem = (e) => {
      e.preventDefault();
      const newItem = {
        name: document.getElementById('itemNameInput').value,
        description: document.getElementById('itemDescriptionInput').value,
        imageUrl: document.getElementById('itemImageUrl').value,
        price: document.getElementById('itemPrice').value,
      };
      this.setState({
        redirectToReferrer: !this.state.redirectToReferrer,
        newItem: this.newItem,
      });
      mystuffData.addNewStuff(newItem).then((resp) => {
        // clears form
        document.getElementById('itemNameInput').value = '';
        document.getElementById('itemDescriptionInput').value = '';
        document.getElementById('itemImageUrl').value = '';
        document.getElementById('itemPrice').value = '';
      }).catch(err => console.error('no new item added', err));
    };
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer === true) {
      // this.props.history.push will fix this
      return <MyStuff to="/stuff" newItem = { this.state.item }/>;
    }
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
