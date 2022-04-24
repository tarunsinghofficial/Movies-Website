import React from 'react'
import { useHistory } from 'react-router-dom'

const FormSearch = () => {
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault();
        history.push(`/filter/${e.target[0].value}`)
        e.target[0].value = ""
    }
    return (
        <form onSubmit={handleSubmit} className="d-flex justify-content-end">
            <input type="text" placeholder="Search..." className="form-control"  style={{borderTopRightRadius:'0',borderBottomRightRadius:'0'}}/>
            <button type="submit" className="btn btn-primary" style={{borderTopLeftRadius:'0',borderBottomLeftRadius:'0'}}><i className="fas fa-search"></i></button>
        </form>
    )
}
export default FormSearch;