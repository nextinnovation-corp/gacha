import React from 'react';

const styles = {
  title: {
    float: 'right',
    padding: '0 10px',
    color: 'rgba(0,0,0,.44)'  // hover rgba(0,0,0,.6)
  }
};

class App extends React.Component {
  render() {
    return (
      <div style={styles.title}>
        <a>
          Sign in / Sign up
        </a>
      </div>
    );
  }
}

export default App;
