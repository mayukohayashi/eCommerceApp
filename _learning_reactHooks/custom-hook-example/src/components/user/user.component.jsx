import React, {useState, useEffect} from 'react';

import Card from '../card/card.component';

const User = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async() => {
      const res = fetch (`https://jsonplaceholder.typicode.com/users?id=${userId}`)
      const users = await (await res).json();
      setUser(users[0])
    }

    fetchUser()
  })

  return (
    <Card>
      {user ? (
        <div>
          <h3>{user.username}</h3>
          <p>{user.name}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </Card>
  );
};

export default User;
