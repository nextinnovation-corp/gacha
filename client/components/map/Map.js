// @flow
import React from 'react';
import { connect } from 'react-redux'
import { initMap } from '../../actions/map';
import s from './Map.css';

const mapTagId = 'map';

class Map extends React.Component {
  componentWillMount() {
    this.props.initMap(mapTagId);
  }

  render() {
    return (
      <div id={mapTagId} className={s.map} />
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  initMap
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
