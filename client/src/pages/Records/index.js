import { Tab, Tabs, Table } from 'react-bootstrap'
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_USERS } from "../../utils/queries";


const Records = () => {
  const { data } = useQuery(QUERY_USER, QUERY_USERS);



  const user = data?.user || {};
  //const allUsers = data?.users || [];
  const personalBest = []

console.log(user.records)
  //filter each game for lowest score 
try{
  const mcraft =  user.records?.filter((item) => item.gameTitle === 'Minecraft')
    const princesses =  user.records?.filter((item) => item.gameTitle === 'Princesses')

    const mpoints = []
    const ppoints = []
    const uniqueMcraft = mcraft && mcraft?.filter(element => {
      const duplicate = mpoints.includes(element.points);
      if (!duplicate) {
        mpoints.push(element.points)
        return true
      }
      return false
    })
    const uniquePrincesses = princesses && princesses?.filter(element => {
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
}catch(err){
  console.log(err)
}



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
          {/* {user.records.length !== 0 ? ( */}
          <tbody>
            {personalBest?.map(({  gameTitle, points }, i) => (
              <tr key={i}>
                <td>{i}</td>
                <td>{gameTitle}</td>
                <td>{points}</td>
              </tr>
            ))}
          </tbody>
          {/* ) 
          : (<h1>Play a game</h1>)} */}
          
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