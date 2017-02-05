import React from 'react';
import Map from './map/Map';
import Header from './header/Header';
import './base.css';
import s from './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className={s.app}>
        <Header />
        <main className={s.main}>
          <Map />
        </main>
      </div>
    );
  }
}
