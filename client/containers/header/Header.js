import React from 'react';
import { connect } from 'react-redux'
import { links } from '../../../config';
import pikachu from './pikachu.png';
import squirtle from './squirtle.png';
import chamander from './charmander.png';
import s from './Header.css';
import { search } from '../../actions/header';
import LoginButton from '../../components/buttons/LoginButton';

const icons = [pikachu, squirtle, chamander];
function getIconImage() {
  const rndIndex = Math.floor(Math.random() * 3);
  return icons[rndIndex];
}

export class Header extends React.Component {
  state = {
    searchKeyword: ''
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.search(this.state.searchKeyword);
  };

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
        <div className={s.searchBox}>
          <form
            className={s.searchForm}
            onSubmit={this.onSubmit}
            autoComplete="off"
          >
            <input
              id={'search'}
              className={s.searchInput}
              placeholder="찾고 싶은 지역을 입력하세요."
              value={this.state.searchKeyword}
              onChange={e => this.setState({searchKeyword: e.target.value})}
            />
            <button className={s.searchButton}>
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
        <LoginButton />
      </div>
    );
  }
}

const mapDispatchToProps = {
  search
  //   <div className={s.signIn}>
  // <div
  //   className="fb-login-button"
  //   data-max-rows="1"
  //   data-size="medium"
  //   data-show-faces="false"
  //   data-auto-logout-link="false"/>
  // </div>
};

export default connect(null, mapDispatchToProps)(Header);
