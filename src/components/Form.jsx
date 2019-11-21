import React from 'react';

const Form = (props) => {
    return (<form onSubmit={(event) => props.handleUserFormSubmit(event)}>
        <div>
        <label>
                <h4 style={{ color: "#7C4CDF" }}>Please search for a Github user below:</h4>
            <input name="username"
                type="text"
                placeholder="Username"
                required
                value={props.formData.username}
                onChange={props.handleFormChange}
            />
            </label>
        </div>
        <p></p>
        <div>
            <input
                type="submit"
                value="Search"
            />
        </div>
    </form>)
}; export default Form;