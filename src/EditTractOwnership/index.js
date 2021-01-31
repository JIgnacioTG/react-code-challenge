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

  onChange = (indexMi, indexNp, v) => (event) => {
    let newMineralInterest = [...mineralInterests];
    if (indexMi != null) {
      if (indexNp == null) {
        if (event.target.name === 'remove') {
          newMineralInterest = mineralInterests.filter(
            (value, index) => index !== indexMi
          );
        } else if (event.target.name === 'add') {
          if (newMineralInterest[indexMi].npris != null) {
            newMineralInterest[indexMi].npris = [
              ...newMineralInterest[indexMi].npris,
              {
                id: uuidv4(),
                owner: '',
                interest: 0,
              },
            ];
          } else {
            newMineralInterest[indexMi].npris = [
              {
                id: uuidv4(),
                owner: '',
                interest: 0,
              },
            ];
          }
        } else {
          if (event.target.name === 'owner') {
            newMineralInterest[indexMi].owner = event.target.value;
          } else if (event.target.name === 'interest') {
            newMineralInterest[indexMi].interest = event.target.value;
          } else {
            newMineralInterest[indexMi].lease = event.target.value;
          }
          // newMineralInterest[indexMi].[event.target.name] = event.target.value;
        }
      } else {
        if (event.target.name === 'remove') {
          let newNpris = newMineralInterest[indexMi].npris.filter(
            (value, index) => index !== indexNp
          );
          newMineralInterest[indexMi].npris = newNpris;
        } else {
          if (event.target.name === 'owner') {
            newMineralInterest[indexMi].npris[indexNp].owner =
              event.target.value;
          } else {
            newMineralInterest[indexMi].npris[indexNp].lease =
              event.target.value;
          }
          // newMineralInterest[indexMi].npris[indexNp].[event.target.name] = event.target.value;
        }
      }
    } else {
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
              onChange={onChange(indexMi)}
            />
            {mineralInterest.npris != null
              ? mineralInterest.npris.map((npri, indexNp) => (
                  <Npri
                    key={npri.id}
                    value={npri}
                    onChange={onChange(indexMi, indexNp)}
                  />
                ))
              : null}
            <tr>
              <td style={{ textAlign: 'right' }}>
                <Button name="add" variant="light" onClick={onChange(indexMi)}>
                  <Icon icon="add" /> Add NPRI
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
        <tbody>
          <tr>
            <td style={{ textAlign: 'right' }}>
              <Button name="add" variant="light" onClick={onChange()}>
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
