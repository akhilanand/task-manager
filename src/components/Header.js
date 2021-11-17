import logo from '../logo.png';
import PropTypes from 'prop-types'



const Header = ({ title }) => {
    return (
        <>
        <header className='header'>
            <img src={logo} className="logo" title={title} alt={title} />
        </header>
        <h1>{title}</h1>
        </>
    )
}

Header.defaultProps = {
    title: "Task Manager",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//css in JS  style={headingStyle}
// const headingStyle = {
//     color : "red",
//     backgroundColor : 'black',
// }
  

export default Header
