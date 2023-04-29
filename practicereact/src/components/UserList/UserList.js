import './UserList.css';
import UserItemList from './UserItemList';
const UserList = (props) => {

    return (
        <div className={`${props.userData.length===0?"":"user"}`}>
            {props.userData.map(user => {
                return <UserItemList key={user.id} name={user.userData.userName} age={user.userData.age} />
            })}
        </div>
    );
}
export default UserList;