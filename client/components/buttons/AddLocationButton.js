import React from 'react';
import cx from 'classnames';
import s from './AddLocationButton.css';

export default function AddLocationButton() {
  return (
    <i className={cx('material-icons', s.addLocationButton)}>
      add_location
    </i>
  );
}
