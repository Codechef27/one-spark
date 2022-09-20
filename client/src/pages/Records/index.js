import React from "react";
import {Tab, Tabs, Table } from 'react-bootstrap'
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_USERS } from "../../utils/queries";


const Records = () => {
  const { data } = useQuery(QUERY_USER, QUERY_USERS);
//   const { allUsersData } = useQuery(QUERY_USERS);

//   let user;
//   let allUsers;

//   if (userData) {
//     user = userData.user
//   }

//   if (allUsersData) {
//     allUsers = allUsersData.allUsers
//   }

  const user = data?.user || [];
  const allUsers = data?.users || [];

//   const renderUserData = (data,_id) => {
//     return (
//       <tr key={data._id}>
//         <td>{1}</td>
//         <td>{data.records.gameTitle}</td>
//         <td>{data.records.points}</td>
//       </tr>
//     );   
//   }

//   const renderAllUsersData = (data, _id) => {
//     return (
//       <tr key={_id}>
//         <td>{1}</td>
//         <td>{data.username}</td>
//         <td>{data.records.gameTitle}</td>
//         <td>{data.records.points}</td>
//       </tr>
//     );   
//   }



  return (
    <Tabs defaultActiveKey="profile" className="mb-3" justify>
      <Tab eventKey="yourRecords" title="Personal Best" borderless="true">
        <Table striped bordered hover size="sm" variant="dark" className="">

           
          <thead>
            <tr>
              <th>#</th>
              <th>Game Title</th>
              <th>Best Moves</th>
            </tr>
          </thead>
          <tbody>
          {/* {user.map(renderUserData)} */}
          </tbody>
   
          
        </Table>
      
      </Tab>
      <Tab eventKey="leaderboard" title="Leaderboard">
        <Table striped bordered hover size="sm" variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Game Title</th>
              <th>Moves</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            {/* {allUsers.map(renderAllUsersData)} */}
            </tr>
          </tbody>
        </Table>
      </Tab>
    </Tabs>
  );
};

export default Records;