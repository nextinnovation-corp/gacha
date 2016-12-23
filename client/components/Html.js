import React, { PropTypes } from 'react';

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.string,
  };

  render() {
    const { title, children } = this.props;

    return (
      <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
      </body>
      </html>
    );
  }
}

export default Html;
