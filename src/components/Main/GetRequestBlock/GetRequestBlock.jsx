import { useEffect } from "react";
import { useState } from "react";
import { FetchUsers } from '../../../servises/FetchUsers';
import { UserItem } from "./UserItem";
import './GetRequestBlock.css';


export const GetRequestBlock = () => {

    const [page, setPage] = useState(1);
    const [users, setUsers] = useState([]);

     useEffect(() => {
       FetchUsers(page).then(data => {
         setUsers(data.data.users);
       });
     }, []);
    
    
    return (
      <>
        <section className="section-users">
          <div className="container user-area">
            <h2 className="get-request-header">Working with GET request</h2>
            <ul className="users-list list">
              {users?.map(
                ({ id, name, position, email, phone, photo }, index) => (
                  <UserItem
                    key={id}
                    imageUrl={photo}
                    name={name}
                    position={position}
                    email={email}
                    phone={phone}
                    index={index}
                  />
                )
              )}
            </ul>
            <button type="button" className="main-btn btn-more">Show more</button>
          </div>
        </section>
      </>
    );

    
}

 