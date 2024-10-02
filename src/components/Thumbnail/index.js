import {Component} from 'react'
import './index.css'

class Thumbnail extends Component {
  render() {
    const {image, onClick} = this.props

    return (
      <li className="thumbnail-item">
        <button
          type="button"
          className="thumbnail"
          tabIndex="0"
          onClick={() => onClick(image)}
          onKeyPress={event => {
            if (event.key === 'Enter' || event.key === ' ') {
              onClick(image)
            }
          }}
        >
          <img src={image.thumbnailUrl} alt="thumbnail" />
        </button>
      </li>
    )
  }
}

export default Thumbnail
