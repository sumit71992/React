import './UserList.css';

const UserList = (props) => {
    return (
        <div className="user-list">
            {props.name} {props.collegeName} ({props.age} years old)
        </div>
    );
}
export default UserList;