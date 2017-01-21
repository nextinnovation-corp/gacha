import React from 'react';
import SearchBox from '../search/SearchBox';
import { links } from '../../../config';
import pikachu from './pikachu.png';
import squirtle from './squirtle.png';
import chamander from './charmander.png';
import s from './Header.css';

const icons = [pikachu, squirtle, chamander];
function getIconImage() {
  const rndIndex = Math.floor(Math.random() * 3);
  return icons[rndIndex];
}

export default class Header extends React.Component {
  render() {
    const iconImage = getIconImage();

    return (
      <div className={s.header}>
        <a
          className={s.title}
          href={links.GACHA_HOME}
        >
          <img
            className={s.icon}
            src={iconImage}
          />
          <h1 className={s.label}>
            GACHA
          </h1>
        </a>
        <SearchBox />
        <div className={s.signIn}>
          <div
            className="fb-login-button"
            data-max-rows="1"
            data-size="medium"
            data-show-faces="false"
            data-auto-logout-link="false"/>
        </div>
      </div>
    );
  }
}
