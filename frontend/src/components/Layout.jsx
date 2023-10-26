import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return <div className="container">{children}</div>
}

export default Layout

Layout.propTypes = {
  children: PropTypes.any,
}
