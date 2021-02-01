import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

import Icon from '../Icon';

const Npri = ({ value, onChange, indexMi, indexNp }) => {
  return (
    <tr data-testid={'npri-' + value.id}>
      <td>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon2">
              <Icon icon="indent" />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id={'npri-' + indexMi + '-' + indexNp + '-owner'}
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
            id={'npri-' + indexMi + '-' + indexNp + '-interest'}
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
          id={'npri-' + indexMi + '-' + indexNp + '-remove'}
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
