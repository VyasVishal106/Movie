// import React, { useState, useEffect } from 'react';
// // import firebase from 'firebase/app';
// import firebase from 'firebase/compat/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/storage';

// // Initialize Firebase
// const firebaseConfig = {
//   // Your Firebase config here
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app(); // if already initialized, use that one
// }

// const db = firebase.firestore();
// const storage = firebase.storage();
// const auth = firebase.auth();

// const AdminPanel = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);

//   useEffect(() => {
//     // Fetch users from Firestore
//     const fetchUsers = async () => {
//       const usersCollection = await db.collection('users').get();
//       const usersData = usersCollection.docs.map(doc => doc.data());
//       setUsers(usersData);
//     };

//     fetchUsers();
//   }, []);

//   const handleUserSelect = (user) => {
//     setSelectedUser(user);
//   };

//   return (
//     <div>
//       <h1>Admin Panel</h1>
//       <div>
//         <h2>User Management</h2>
//         <ul>
//           {users.map(user => (
//             <li key={user.id} onClick={() => handleUserSelect(user)}>
//               {user.displayName} - {user.email}
//             </li>
//           ))}
//         </ul>
//       </div>
//       {selectedUser && (
//         <div>
//           <h2>Selected User</h2>
//           <p>ID: {selectedUser.id}</p>
//           <p>Email: {selectedUser.email}</p>
//           <p>Display Name: {selectedUser.displayName}</p>
//           {/* Additional user details */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminPanel;

import React from 'react'

const AdminPanel = () => {
  return (
    <div>
      
    </div>
  )
}

export default AdminPanel

