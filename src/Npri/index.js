import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

import Icon from '../Icon';

const Npri = ({ value, onChange }) => {
  return (
    <tr data-testid={'npri-' + value.id}>
      <td>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon2">
              <Icon syle={{ paddingRight: '20px' }} icon="indent" />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            data-testid={'npri-' + value.id + '.owner'}
            name="owner"
            placeholder="Owner"
            aria-label="Owner"
            aria-describedby="basic-addon1"
            value={value.owner}
            onChange={onChange}
          />
        </InputGroup>
      </td>
      <td></td>
      <td>
        <InputGroup className="mb-3">
          <FormControl
            data-testid={'npri-' + value.id + '.interest'}
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
        <Button
          data-testid={'npri-' + value.id + '.remove'}
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

export default Npri;
