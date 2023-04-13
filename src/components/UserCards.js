import React from 'react'

export default function UserCards(user) {
  return (
    <div className='user-card'>
        <img src=
        "https://tse1.mm.bing.net/th?id=OIP.IvuV8IKcStonOIysAxf5PQHaHa&pid=Api&rs=1&c=1&qlt=95&w=109&h=109"
       alt="" />
        <h3>{user.username}</h3>
        <p>{user.email}</p>
        <div>
    <div>
    <img className='location'
    src="https://tse1.mm.bing.net/th?id=OIP.0eYZ-bfymwRJp6Pflz6hEQHaHa&pid=Api&P=0" alt="" /> : <span> {user.address.street}</span>
    </div>{""}
    </div>
    </div>


  
  );
}
