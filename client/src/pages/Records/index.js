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
    const dinosaurs =  user.records?.filter((item) => item.gameTitle === 'Dinosaurs')
    const minions =  user.records?.filter((item) => item.gameTitle === 'Minions')
    const alpha =  user.records?.filter((item) => item.gameTitle === 'Alphabet')
    const numbers =  user.records?.filter((item) => item.gameTitle === 'Numbers')
    const planets =  user.records?.filter((item) => item.gameTitle === 'Planets')




    const mpoints = []
    const ppoints = []
    const dinopoints = []
    const minipoints = []
    const alphapoints = []
    const numpoints = []
    const planetpoints = []


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
    const uniqueDino = dinosaurs && dinosaurs?.filter(element => {
      const duplicate = dinopoints.includes(element.points);
      if (!duplicate) {
        dinopoints.push(element.points)
        return true
      }
      return false
    })
    const uniqueMinions = minions && minions?.filter(element => {
      const duplicate = minipoints.includes(element.points);
      if (!duplicate) {
        minipoints.push(element.points)
        return true
      }
      return false
    })
    const uniqueAlpha = alpha && alpha?.filter(element => {
      const duplicate = alphapoints.includes(element.points);
      if (!duplicate) {
        alphapoints.push(element.points)
        return true
      }
      return false
    })
    const uniqueNum = numbers && numbers?.filter(element => {
      const duplicate = numpoints.includes(element.points);
      if (!duplicate) {
        numpoints.push(element.points)
        return true
      }
      return false
    })
    const uniquePlanets = planets && planets?.filter(element => {
      const duplicate = planetpoints.includes(element.points);
      if (!duplicate) {
        planetpoints.push(element.points)
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
    uniqueDino?.sort((a, b) => {
      return a.points - b.points
    })
    uniqueMinions?.sort((a, b) => {
      return a.points - b.points
    })
    uniqueAlpha?.sort((a, b) => {
      return a.points - b.points
    })
    uniqueNum?.sort((a, b) => {
      return a.points - b.points
    })
    uniquePlanets?.sort((a, b) => {
      return a.points - b.points
    })
    personalBest.push(uniqueMcraft[0], uniquePrincesses[0], uniqueDino[0], uniqueMinions[0], uniqueAlpha[0], uniqueNum[0], uniquePlanets[0])
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