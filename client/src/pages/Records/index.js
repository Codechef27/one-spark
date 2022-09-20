import {Tab, Tabs, Table } from 'react-bootstrap'
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_USERS } from "../../utils/queries";
import { useEffect } from 'react';


const Records = () => {
  const { data } = useQuery(QUERY_USER, QUERY_USERS);



  const user = data?.user || {};
  const allUsers = data?.users || [];

  //filter each game for lowest score 


    // const mcraft= user.records?.filter((item) => item.gameTitle === 'Minecraft')
    // const uniqueMcraft = mcraft.filter((c,index)=> {
    //   return mcraft.indexOf(c) === index.gameTitle
    // })
    // uniqueMcraft.sort((a, b)=>{
    //   return a.points - b.points
    // })
    
    // console.log(uniqueMcraft)
  

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
          {user.records?.map(({id, gameTitle, points})=>(
            <tr key={id}>
                  <td>{id}</td>
                    <td>{gameTitle}</td>
                    <td>{points}</td>
                  </tr>
          ))}
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
            {/* {{allUsers.map(renderAllUsersData)} */}
            </tr>
          </tbody>
        </Table>
      </Tab>
    </Tabs>
  );
};

export default Records;