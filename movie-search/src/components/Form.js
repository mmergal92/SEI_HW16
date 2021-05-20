import React, {useState} from 'react';

const Form = (props) => {
    //State to hold data from Form
    const [formData, setFormData] = useState({searchterm: "",})
    //handleChange - updates formData
    const handleChange = (event) => {
        //use event object to detect key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        //pass the search term to moviesearch prop (which is the apps getMovie function)
        props.moviesearch(formData.searchterm)
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="searchterm"
            onChange={handleChange}
            value={formData.searchterm}
            />
            <input type="submit" value="submit" />
        </form>
    </div>
    )
}

export default Form;