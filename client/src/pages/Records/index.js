import { Tab, Tabs, Table } from 'react-bootstrap'
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_USERS } from "../../utils/queries";
import { useEffect, useState } from 'react';


const Records = () => {
  const { data } = useQuery(QUERY_USER, QUERY_USERS);



  const user = data?.user || {};
  const allUsers = data?.users || [];
  const personalBest = []

console.log(allUsers)
  //filter each game for lowest score 

    const mcraft = user.records?.filter((item) => item.gameTitle === 'Minecraft')
    const princesses = user.records?.filter((item) => item.gameTitle === 'Princesses')

    const mpoints = []
    const ppoints = []
    const uniqueMcraft = mcraft?.filter(element => {
      const duplicate = mpoints.includes(element.points);
      if (!duplicate) {
        mpoints.push(element.points)
        return true
      }
      return false
    })
    const uniquePrincesses = princesses?.filter(element => {
      const duplicate = ppoints.includes(element.points);
      if (!duplicate) {
        ppoints.push(element.points)
        return true
      }
      return false
    })

    uniqueMcraft?.sort((a, b) => {
      return a.points - b.points
    })
    uniquePrincesses?.sort((a, b) => {
      return a.points - b.points
    })

    personalBest.push(uniqueMcraft[0], uniquePrincesses[0])
  




  //   // sort with asending order
  //   return filter.sort((a, b) => {
  //     if ( a.score === b.score){
  //         return b.score - a.score;
  //     } else{
  //         return b.score - a.score;
  //     }
  // })

  //console.log(uniqueMcraft)


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
            {personalBest?.map(({ id, gameTitle, points }) => (
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

              
                <td>coming</td>
                <td>soon</td>
                <td>!!!</td>
              
            </tr>
          </tbody>
        </Table>
      </Tab>
    </Tabs>
  );
};

export default Records;