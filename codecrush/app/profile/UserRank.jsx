import { useState, useEffect } from 'react';
import React from 'react'
import { UserAuth } from '../context/AuthContext';
import Request from '../helpers/Request';


export const UserRank = () => {
const { user } = UserAuth();
const [users, setUsers] = useState([]);
const [rank, setRank] = useState(0)

useEffect(() => {
    const request = new Request();
    request.get("http://localhost:8082/api/users").then((data) => {
    setUsers(data);
    }).then(() => {
      currentRank();
    }
    )

}, []);

const orderedUsers = users.sort(
    (a, b) => b.score - a.score && b.streak - a.streak
);


const currentRank = () => {
    if(!user){
        return rank
    }
    else {
        console.log(orderedUsers)
        const foundUser = orderedUsers.find((currentUser) => {
            return currentUser.uid === user[0].uid
            
        })
        const position = orderedUsers.indexOf(foundUser) + 1
        setRank(position) 
        return rank
    }
    
}

return(

    <>{rank}</>
)
};












// const position = () => {
//     if (!user){
//     return 
    
//     }
//     else {

//     }
//     const foundUser = orderedUsers.find((orderUser) => {
//         user[0].uid === orderUser.uid
        

        
//     })
    
//     const currentPosition = () => {

//     return orderedUsers.findIndex(foundUser) + 1 
//     }
//     console.log(currentPosition)
// }

//     return (
//         <>
//         {position}

//         </>
//     )
// };
