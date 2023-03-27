
import './GetRequestBlock.css';


export const UserItem = ({ name, position, email, phone, imageUrl }) => {

  return (
    <li className="user-item">
          <img className="user-foto"  src={imageUrl} alt={position} />
        <h3 className="user-name">{name}</h3>
        <p>{position}</p>
        <p>{email}</p>
        <p>{phone}</p>
    </li>
  );
};