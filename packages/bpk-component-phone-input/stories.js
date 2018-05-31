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

/* @flow */

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import BpkFieldSet from 'bpk-component-fieldset';
import BpkPhoneInput from './index';

type Props = {
  large: ?boolean,
  validationMessage: ?string,
  validNumber: ?string,
  description: ?string,
  disabled: ?boolean,
  required: ?boolean,
};

class StoryContainer extends Component<
  Props,
  { dialingCode: string, value: string },
> {
  static defaultProps = {
    large: false,
    validationMessage: null,
    validNumber: null,
    description: null,
    disabled: false,
    required: false,
  };

  constructor(props: Props) {
    super(props);
    this.state = { dialingCode: '', value: '' };
  }

  onChange = (dialingCode, value) => {
    this.setState({ dialingCode, value });
  };

  render() {
    const {
      large,
      validNumber,
      validationMessage,
      description,
      disabled,
      required,
    } = this.props;
    const { value, dialingCode } = this.state;

    return (
      <BpkFieldSet
        label="Telephone"
        validationMessage={validationMessage}
        description={description}
        disabled={!!disabled}
        required={!!required}
      >
        <BpkPhoneInput
          id="phone-input-id"
          name="Telephone input"
          placeholder="Telephone number"
          disabled={disabled}
          valid={value && validNumber ? validNumber === value : null}
          large={large}
          onChange={this.onChange}
          value={value}
          dialingCode={dialingCode}
          dialingCodes={[
            { code: '44', description: '+44' },
            { code: '55', description: '+55' },
          ]}
          dialingCodeProps={{
            id: 'dialing-code',
            name: 'Dialing code',
            'aria-label': 'Dialing code',
          }}
        />
      </BpkFieldSet>
    );
  }
}

storiesOf('bpk-component-phone-input', module)
  .add('Default', () => <StoryContainer />)
  .add('Large', () => <StoryContainer large />)
  .add('With Validation', () => (
    <StoryContainer
      validationMessage="Please inform a valid phone number"
      validNumber="99999999999"
      description="Inform 99999999999"
    />
  ))
  .add('Disabled', () => <StoryContainer disabled />)
  .add('Required', () => <StoryContainer required />);
