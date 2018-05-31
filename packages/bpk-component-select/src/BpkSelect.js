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

import PropTypes from 'prop-types';
import React from 'react';
import { cssModules } from 'bpk-react-utils';

import STYLES from './bpk-select.scss';

const getClassName = cssModules(STYLES);

const BpkSelect = props => {
  const classNames = [getClassName('bpk-select')];
  const imageClassName = [getClassName('bpk-select-image')];
  const wrapperClassName = [getClassName('bpk-select-wrapper')];

  const {
    className,
    docked,
    dockedFirst,
    dockedLast,
    dockedMiddle,
    image,
    imageProps,
    large,
    valid,
    wrapperProps,
    ...rest
  } = props;

  // Explicit check for false primitive value as undefined is
  // treated as neither valid nor invalid
  const isInvalid = valid === false;

  if (large) {
    wrapperClassName.push(getClassName('bpk-select-wrapper--large'));
    imageClassName.push(getClassName('bpk-select-image--large'));
    classNames.push(getClassName('bpk-select--large'));
  }
  if (docked) {
    classNames.push(getClassName('bpk-select--docked'));
  }
  if (dockedFirst) {
    classNames.push(getClassName('bpk-select--docked-first'));
  }
  if (dockedMiddle) {
    classNames.push(getClassName('bpk-select--docked-middle'));
  }
  if (dockedLast) {
    classNames.push(getClassName('bpk-select--docked-last'));
  }
  if (className) {
    classNames.push(className);
  }

  const select = (
    <select
      className={classNames.join(' ')}
      aria-invalid={isInvalid}
      {...rest}
    />
  );

  if (image) {
    return (
      <div className={wrapperClassName.join(' ')} {...wrapperProps}>
        <img className={imageClassName.join(' ')} {...imageProps} src={image} />
        {select}
      </div>
    );
  }
  return select;
};

BpkSelect.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  docked: PropTypes.bool,
  dockedFirst: PropTypes.bool,
  dockedLast: PropTypes.bool,
  dockedMiddle: PropTypes.bool,
  image: PropTypes.string,
  imageProps: PropTypes.object,
  large: PropTypes.bool,
  valid: PropTypes.bool,
  wrapperProps: PropTypes.object,
};

BpkSelect.defaultProps = {
  className: null,
  docked: false,
  dockedFirst: false,
  dockedLast: false,
  dockedMiddle: false,
  image: null,
  imageProps: {},
  large: false,
  valid: null,
  wrapperProps: {},
};

export default BpkSelect;
