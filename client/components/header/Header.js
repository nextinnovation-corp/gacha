import React from 'react';
import { connect } from 'react-redux'
import { links } from '../../../config';
import pikachu from './pikachu.png';
import squirtle from './squirtle.png';
import chamander from './charmander.png';
import { setCenter } from '../../actions/map';
import s from './Header.css';

const icons = [pikachu, squirtle, chamander];
function getIconImage() {
  const rndIndex = Math.floor(Math.random() * 3);
  return icons[rndIndex];
}

class Header extends React.Component {
  componentDidMount() {
    this.initGoogleAddressAutoComplete();
  }

  onSubmit = e => {
    e.preventDefault();
  };

  initGoogleAddressAutoComplete = () => {
    const input = this.input;
    const autoComplete = new google.maps.places.Autocomplete(input);
    autoComplete.addListener('place_changed', () => {
      const place = autoComplete.getPlace();
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      this.props.setCenter(lat, lng);
    });
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
          >
            <input
              ref={input => { this.input = input; }}
              className={s.searchInput}
              placeholder="찾고 싶은 지역을 입력하세요."
            />
            <button className={s.searchButton}>
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
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

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  setCenter
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
