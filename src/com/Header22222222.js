import React from 'react'
import Back from './Back.js'


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
            <Back />
      </header>
    )
  }
}

export default Header;