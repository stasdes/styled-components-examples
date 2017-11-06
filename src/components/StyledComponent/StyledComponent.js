import styled from 'styled-components'
import styles from './StyledComponent.styles'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class StyledComponent extends PureComponent {
  static propTypes = {
    background: PropTypes.string,
    className: PropTypes.string.isRequired,
    children: PropTypes.node
  }

  state = { count: 0 }

  onClick = () => {
    this.setState({count: this.state.count + 1 })
  }

  render () {
    const { className, children } = this.props
    return <div className={className} onClick={this.onClick}>
      <span className='count'>Count {this.state.count}</span> 
      {children}
    </div>
  }
}
export default styled(StyledComponent)`${styles}`
