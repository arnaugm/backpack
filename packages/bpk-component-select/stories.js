/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2018 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import BpkSelect from './index';

class SelectWithImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  getItemByValue = () => {
    const { options } = this.props;
    return val => options.filter(o => o.value === val);
  };

  getItem = this.getItemByValue();

  handleChange = e => {
    const [item] = this.getItem(e.target.value);

    if (!item) return;

    this.setState({
      selected: item.key,
    });
  };

  render() {
    const { options, ...rest } = this.props;
    return (
      <BpkSelect
        value={options[this.state.selected].value}
        {...rest}
        image={options[this.state.selected].image}
        onChange={this.handleChange}
      >
        {options.map(o => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </BpkSelect>
    );
  }
}

SelectWithImage.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const options = [
  {
    key: 0,
    value: 'apple',
    label: 'Apple',
    image: 'http://via.placeholder.com/250x50/ff5452/000000',
  },
  {
    key: 1,
    value: 'oranges',
    label: 'Oranges',
    image: 'http://via.placeholder.com/250x50/ffbb00/000000',
  },
  {
    key: 2,
    value: 'pear',
    label: 'Pear',
    image: 'http://via.placeholder.com/250x50/00d775/000000',
  },
];
storiesOf('bpk-component-select', module)
  .add('Example', () => (
    <BpkSelect
      id="fruits"
      name="fruits"
      value="oranges"
      wrapperProps={{ 'aria-label': 'wrappingDiv', 'aria-hidden': true }}
      imageProps={{ 'aria-label': 'image', 'aria-hidden': false }}
      onChange={action('select changed')}
    >
      <option value="apples">Apples</option>
      <option value="oranges">Oranges</option>
      <option value="pears">Pears</option>
      <option value="tomato" disabled>
        Tomato
      </option>
    </BpkSelect>
  ))
  .add('Invalid', () => (
    <BpkSelect
      id="invalid"
      name="invalid"
      value=""
      onChange={action('select changed')}
      valid={false}
    >
      <option value="" hidden>
        Please select...
      </option>
      <option value="apples">Apples</option>
      <option value="oranges">Oranges</option>
      <option value="pears">Pears</option>
      <option value="tomato" disabled>
        Tomato
      </option>
    </BpkSelect>
  ))
  .add('Disabled', () => (
    <BpkSelect
      id="disabled"
      name="disabled"
      value=""
      onChange={action('select changed')}
      disabled
    >
      <option value="apples">Apples</option>
      <option value="oranges">Oranges</option>
      <option value="pears">Pears</option>
      <option value="tomato" disabled>
        Tomato
      </option>
    </BpkSelect>
  ))
  .add('Large', () => (
    <BpkSelect
      id="large"
      name="large"
      value="oranges"
      onChange={action('select changed')}
      large
    >
      <option value="apples">Apples</option>
      <option value="oranges">Oranges</option>
      <option value="pears">Pears</option>
      <option value="tomato" disabled>
        Tomato
      </option>
    </BpkSelect>
  ))
  .add('Docked', () => (
    <div style={{ display: 'flex' }}>
      <BpkSelect
        id="large"
        name="large"
        value="oranges"
        onChange={action('select changed')}
        large
        docked
      >
        <option value="apples">Apples</option>
        <option value="oranges">Oranges</option>
        <option value="pears">Pears</option>
        <option value="tomato" disabled>
          Tomato
        </option>
      </BpkSelect>
      <BpkSelect
        id="large"
        name="large"
        value="oranges"
        onChange={action('select changed')}
        large
        docked
      >
        <option value="apples">Apples</option>
        <option value="oranges">Oranges</option>
        <option value="pears">Pears</option>
        <option value="tomato" disabled>
          Tomato
        </option>
      </BpkSelect>
      <BpkSelect
        id="large"
        name="large"
        value="oranges"
        onChange={action('select changed')}
        large
        valid={false}
        docked
      >
        <option value="apples">Apples</option>
        <option value="oranges">Oranges</option>
        <option value="pears">Pears</option>
        <option value="tomato" disabled>
          Tomato
        </option>
      </BpkSelect>
      <BpkSelect
        id="large"
        name="large"
        value="oranges"
        onChange={action('select changed')}
        large
        docked
      >
        <option value="apples">Apples</option>
        <option value="oranges">Oranges</option>
        <option value="pears">Pears</option>
        <option value="tomato" disabled>
          Tomato
        </option>
      </BpkSelect>
    </div>
  ))
  .add('Manually docked', () => (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '100%' }}>
        <BpkSelect
          id="large"
          name="large"
          value="oranges"
          onChange={action('select changed')}
          large
          dockedFirst
        >
          <option value="apples">Apples</option>
          <option value="oranges">Oranges</option>
          <option value="pears">Pears</option>
          <option value="tomato" disabled>
            Tomato
          </option>
        </BpkSelect>
      </div>
      <div style={{ width: '100%' }}>
        <BpkSelect
          id="large"
          name="large"
          value="oranges"
          onChange={action('select changed')}
          large
          dockedMiddle
        >
          <option value="apples">Apples</option>
          <option value="oranges">Oranges</option>
          <option value="pears">Pears</option>
          <option value="tomato" disabled>
            Tomato
          </option>
        </BpkSelect>
      </div>
      <div style={{ width: '100%' }}>
        <BpkSelect
          id="large"
          name="large"
          value="oranges"
          onChange={action('select changed')}
          large
          valid={false}
          dockedMiddle
        >
          <option value="apples">Apples</option>
          <option value="oranges">Oranges</option>
          <option value="pears">Pears</option>
          <option value="tomato" disabled>
            Tomato
          </option>
        </BpkSelect>
      </div>
      <div style={{ width: '100%' }}>
        <BpkSelect
          id="large"
          name="large"
          value="oranges"
          onChange={action('select changed')}
          large
          dockedLast
        >
          <option value="apples">Apples</option>
          <option value="oranges">Oranges</option>
          <option value="pears">Pears</option>
          <option value="tomato" disabled>
            Tomato
          </option>
        </BpkSelect>
      </div>
    </div>
  ))
  .add('Manually docked with images', () => (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '100%' }}>
        <SelectWithImage
          id="large"
          name="large"
          large
          dockedFirst
          options={options}
        />
      </div>
      <div style={{ width: '100%' }}>
        <SelectWithImage
          id="large"
          name="large"
          large
          dockedMiddle
          options={options}
        />
      </div>
      <div style={{ width: '100%' }}>
        <SelectWithImage
          id="large"
          name="large"
          large
          valid={false}
          options={options}
          dockedMiddle
        />
      </div>
      <div style={{ width: '100%' }}>
        <SelectWithImage
          id="large"
          name="large"
          large
          dockedLast
          options={options}
        />
      </div>
    </div>
  ))
  .add('With Image', () => (
    <SelectWithImage id="fruits" name="fruits" options={options} />
  ))
  .add('With Image Large', () => (
    <SelectWithImage large id="fruits" name="fruits" options={options} />
  ));
