import { useState } from "react";
import './AddUserForm.css';

const AddUserForm = (props) => {
    const [userName, setUserName] = useState("");
    const [age, setAge] = useState("");
    const [invalidContent, setInvalidContent] = useState("");

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }
    const closeInvalidHandler = () => {
        setInvalidContent("");
    }
    let invalidUserContent = <div className={`invalid-section`}>
        <div className="invalid">
            <div className="invalid-input">
                <h3>Invalid Input</h3>
                <p>Please enter a valid name and age (non-empty values).</p>
                <div className="inavalid-button"><button onClick={closeInvalidHandler}>Okay</button></div>
            </div>
        </div>
    </div>
    let invalidAgeContent = <div className={`invalid-section`}>
        <div className="invalid">
            <div className="invalid-input">
                <h3>Invalid Input</h3>
                <p>Please enter a valid age ( &gt; 0).</p>
                <div className="inavalid-button"><button onClick={closeInvalidHandler}>Okay</button></div>
            </div>
        </div>
    </div>
    const formSubmitHandler = (event) => {
        event.preventDefault();
        if ((userName === '') || (userName === '' && age !== '') || (userName === '' && age === '')) {
            setInvalidContent(invalidUserContent)
        } else if ((userName !== '' && Number(age) < 0) || (userName !== '' && age === '')) {
            setInvalidContent(invalidAgeContent);
        } else {
            const userData = {
                userName: userName,
                age: age
            }
            props.onGetUserData(userData);
            setAge("");
            setUserName("");
        }

    }
    return (
        <>
            <form className="form" onSubmit={formSubmitHandler}>
                <div className="input">
                    <div className="input-items">
                        <label><strong>Username: </strong></label>
                        <input type="text" value={userName} onChange={userNameChangeHandler} />
                    </div>

                    <div className="input-items">
                        <label><strong>Age(Years): </strong></label>
                        <input type="number" value={age} onChange={ageChangeHandler} />
                    </div>
                    <button type="submit" className="add-user-button">Add User</button>
                </div>
            </form>
            {invalidContent}
        </>
    );
}
export default AddUserForm;