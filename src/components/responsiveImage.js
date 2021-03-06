import React, { PropTypes } from 'react'

class ResponsiveImage extends React.Component {
  constructor (props) {
    super(props)

    this.state = { src: props.src, alt: props.alt, mounted: false }
  }

  componentDidMount () {
    this.setState({
      width: Math.round(this.node.getBoundingClientRect().width),
      mounted: true
    })
  }

  render () {
    return (
      <img styleName="responsiveImage"
      // ${API_BASE_URL}/spaces/${API_SPACE_ID}/assets/${id}?access_token=${API_TOKEN}
            src={ this.state.mounted && `${this.state.src}?w=${this.state.width}`}
            alt={this.state.alt}
            ref={node => this.node = node}/>
    )
  }
}

ResponsiveImage.propTypes = { src: PropTypes.string, alt: PropTypes.string }

export default ResponsiveImage