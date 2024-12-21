import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {

  const onClick = () => {
    console.log("click");
  }

  return (
    <header className='header'>
      {/* <h1 style={headingStyle} >{title}</h1> */}
      {/* <h1 stlye = {{ color: 'red', backgroundColor: 'black' }}></h1> */}
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick}/>
      {/* <Button color='red' text='Hello1'/>
      <Button color='blue' text='Hello3'/> */}

    </header>
  )
}

// For some reason defaultProps not supported

// Header.defaultProps = {
//   title: 'Task tracker',
// }

// used for ts
// Header.propTypes = {
//   title: PropTypes.string.isRequired
// }


// CSS in js
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'

// }

export default Header
