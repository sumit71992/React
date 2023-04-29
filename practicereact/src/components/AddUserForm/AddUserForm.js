import { useState } from "react";
import './AddUserForm.css';

const AddUserForm = (props) => {
    const [userName, setUserName] = useState("");
    const [age, setAge] = useState("");

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const userData={
            userName: userName,
            age: age
        }
       props.onGetUserData(userData);
    }
    return (
        <form className="form" onSubmit={formSubmitHandler}>
            <div className="input">
                <div className="input-items">
                    <label><strong>Username: </strong></label>
                    <input type="text" onChange={userNameChangeHandler} />
                </div>

                <div className="input-items">
                    <label><strong>Age(Years): </strong></label>
                    <input type="number" onChange={ageChangeHandler} />
                </div>
                <button type="submit" className="add-user-button">Add User</button>
            </div>
        </form>
    );
}
export default AddUserForm;