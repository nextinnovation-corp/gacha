import React from 'react';
import s from './SearchBox.css';

export default class SearchBox extends React.Component {
  onSubmit = e => {
    e.preventDefault();

  };

  render() {
    return (
      <div className={s.searchBox}>
        <form
          className={s.searchForm}
          onSubmit={this.onSubmit}
        >
          <input
            className={s.searchInput}
            placeholder="찾고 싶은 지역을 입력하세요."
          />
          <button className={s.searchButton}>
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
    );
  }
}
