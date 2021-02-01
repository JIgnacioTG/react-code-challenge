import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import 'bootstrap/dist/css/bootstrap.css';

// Components
import ManualInterest from '../MineralInterest';
import Npri from '../Npri';
import Icon from '../Icon';

function EditTractOwnership({ value = [], onChange = () => {} }) {
  const [mineralInterests, setMineralInterests] = useState(value);

  onChange = (event) => {
    // We need to recover actual state copying it
    let newMineralInterest = [...mineralInterests];
    // First we need the event target id
    const eventId = event.currentTarget.id;
    // And the value
    const eventValue = event.currentTarget.value;
    // In the id we have "objectType-indexMi-indexNp-field", First we need to split it with "-"
    let eventArray = eventId.split('-');
    // Now, we check if the event is for a mineralInterest
    if (eventArray[0] === 'mineralInterest') {
      // We need to check the size of the array
      if (eventArray.length === 2) {
        // The operation is add, we only have to add an empty element
        newMineralInterest = [
          ...mineralInterests,
          {
            id: uuidv4(),
            owner: '',
            interest: 0,
            lease: '',
          },
        ];
      }
      // In another case
      else {
        // We use the 2nd element for index and 3rd for operation
        switch (eventArray[2]) {
          // First case can be remove
          case 'remove': {
            // In this case, we create a new object filtering the index of the element
            newMineralInterest = mineralInterests.filter(
              (value, index) => index !== parseInt(eventArray[1])
            );
            break;
          }
          // The second case can be the field owner
          case 'owner': {
            // We only change the value of the field
            newMineralInterest[eventArray[1]].owner = eventValue;
            break;
          }
          // The third case can be the field interest
          case 'interest': {
            // We only change the value of the field
            newMineralInterest[eventArray[1]].interest = eventValue;
            break;
          }
          // The fourth and final case can be the field lease
          case 'lease': {
            // We only change the value of the field
            newMineralInterest[eventArray[1]].lease = eventValue;
            break;
          }
          // And for other case, we do nothing
          default:
            break;
        }
      }
    }
    // But if the event is a npri
    else {
      // We need to check the size of the array
      if (eventArray.length === 3) {
        // The operation is add, we only have to add an empty element of npri
        // But the array can not be initialized
        if (newMineralInterest[eventArray[1]].npris == null) {
          // In this case, we initialized the array with an empty element
          newMineralInterest[eventArray[1]].npris = [
            {
              id: uuidv4(),
              owner: '',
              interest: 0,
            },
          ];
        }
        // In another case
        else {
          // We only add an empty element to the array
          newMineralInterest[eventArray[1]].npris = [
            ...newMineralInterest[eventArray[1]].npris,
            {
              id: uuidv4(),
              owner: '',
              interest: 0,
            },
          ];
        }
      }
      // In another case
      else {
        // We use the 2nd element for index of mineralInterest, 3rd element for index of npri and 4th for operation
        switch (eventArray[3]) {
          // First case can be remove
          case 'remove': {
            // In this case, we create a new object filtering the index of the element
            let newNpris = newMineralInterest[eventArray[1]].npris.filter(
              (value, index) => index !== parseInt(eventArray[2])
            );
            newMineralInterest[eventArray[1]].npris = newNpris;
            break;
          }
          // The second case can be the field owner
          case 'owner': {
            // We only change the value of the field
            newMineralInterest[eventArray[1]].npris[
              eventArray[2]
            ].owner = eventValue;
            break;
          }
          // The third case can be the field interest
          case 'interest': {
            // We only change the value of the field
            newMineralInterest[eventArray[1]].npris[
              eventArray[2]
            ].interest = eventValue;
            break;
          }
          // And for other case, we do nothing
          default:
            break;
        }
      }
    }
    // Now with all operations, we only set the new state
    setMineralInterests(newMineralInterest);
    return newMineralInterest;
  };

  return (
    <div>
      <Table responsive borderless>
        <thead>
          <tr>
            <th scope="col">Owner</th>
            <th scope="col">Mineral Interest</th>
            <th scope="col">NPRI</th>
            <th scope="col">Lease</th>
            <th></th>
          </tr>
        </thead>
        {mineralInterests.map((mineralInterest, indexMi) => (
          <tbody key={mineralInterest.id}>
            <ManualInterest
              key={mineralInterest.id}
              value={mineralInterest}
              indexMi={indexMi}
              onChange={onChange}
            />
            {mineralInterest.npris != null
              ? mineralInterest.npris.map((npri, indexNp) => (
                  <Npri
                    key={npri.id}
                    value={npri}
                    indexMi={indexMi}
                    indexNp={indexNp}
                    onChange={onChange}
                  />
                ))
              : null}
            <tr>
              <td style={{ textAlign: 'right' }}>
                <Button
                  id={'npri-' + indexMi + '-add'}
                  name="add"
                  variant="light"
                  onClick={onChange}
                >
                  <Icon icon="add" /> Add NPRI
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
        <tbody>
          <tr>
            <td style={{ textAlign: 'right' }}>
              <Button
                id="mineralInterest-add"
                name="add"
                variant="light"
                onClick={onChange}
              >
                <Icon icon="add" /> Add Mineral Interest
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default EditTractOwnership;
