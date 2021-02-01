import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

import Icon from '../Icon';

const MineralInterest = ({ value, onChange, indexMi }) => {
  return (
    <tr data-testid={'mineralInterest-' + value.id}>
      <td>
        <input
          id={'mineralInterest-' + indexMi + '-owner'}
          data-testid={'mineralInterest-' + value.id + '.owner'}
          name="owner"
          type="text"
          className="form-control"
          placeholder="Owner"
          aria-label="Owner"
          aria-describedby="basic-addon1"
          value={value.owner}
          onChange={onChange}
        />
      </td>
      <td>
        <InputGroup className="mb-3">
          <FormControl
            id={'mineralInterest-' + indexMi + '-interest'}
            data-testid={'mineralInterest-' + value.id + '.interest'}
            name="interest"
            placeholder="0"
            aria-label="0"
            aria-describedby="basic-addon2"
            value={value.interest}
            onChange={onChange}
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </td>
      <td></td>
      <td>
        <input
          id={'mineralInterest-' + indexMi + '-lease'}
          data-testid={'mineralInterest-' + value.id + '.lease'}
          name="lease"
          type="text"
          className="form-control"
          placeholder="Lease"
          aria-label="Lease"
          aria-describedby="basic-addon1"
          value={value.lease}
          onChange={onChange}
        />
      </td>
      <td>
        <Button
          id={'mineralInterest-' + indexMi + '-remove'}
          data-testid={'mineralInterest-' + value.id + '.remove'}
          name="remove"
          variant="light"
          onClick={onChange}
        >
          <Icon icon="remove" />
        </Button>
      </td>
    </tr>
  );
};

export default MineralInterest;
