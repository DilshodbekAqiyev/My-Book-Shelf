import PropTypes from 'prop-types'

const Image = ({ src, className }) => <img src={src} className={className} alt="image" loading="lazy" />

Image.propTypes = {
  src: PropTypes.any,
  className: PropTypes.any,
}

export default Image
