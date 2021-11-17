import { useState } from 'react'
import Autocomplete from "./Autocomplete";


const SearchBox = ({ name, placeholder }) => {
    const [suggestions] = useState([
        'Riafy','Webleks','Ovalion','Ewokesoft'
      ])
    return (
        <div className='search-box'>
            <Autocomplete name={name} placeholder={placeholder}
                suggestions={suggestions}
            />
        </div>
    )
}

//css in JS  style={headingStyle}
// const headingStyle = {
//     color : "red",
//     backgroundColor : 'black',
// }
  

export default SearchBox
