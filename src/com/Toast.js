import React from 'react'


class Toast extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
     <div className = {this.props.flag? 'tip show': 'tip hide'}>
      {this.props.tip}
    </div>
    )
  }
}

export default Toast;