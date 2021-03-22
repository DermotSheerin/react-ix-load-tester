import React, {useState} from "react";
import StartButton from "../buttons/startButton";
import StopButton from "../buttons/stopButton";
import "./index.css";
//import useChatStats from '../hooks/useChatStats'
//import ToggleStartButton from "../buttons/toggleStartButton";


const ChatStats = ({chatStats}) => {

    return (
      <>
      <h2 className="table-space">Resource Usage</h2>
      <div>
      <table className="table table-striped">
          <thead>
          <tr>
              <th scope="col">Resource</th>      
              <th scope="col">Current Value</th>
              <th scope="col">Peak Value</th>  
          </tr>
          </thead>
          <tbody>         
          {Object.entries(chatStats.resourceStats).map(([key, value]) =>
            <tr key={key}>
              <th>{key}</th>
              <td>{value[0]}</td>
              <td>{value[1]}</td>                 
            </tr>
              )}              
          </tbody>
        </table>
      </div>

      <h2 className="table-space">Chat Generator Statistics </h2>
      <div>
        <table className="table table-striped">
          <thead>
          <tr>
              <th scope="col">Step</th>      
              <th scope="col">Success</th>  
              <th scope="col">Fail</th>  
          </tr>
          </thead>
          <tbody>         
          {Object.entries(chatStats.chatStatsMap).map(([key, value]) =>
            <tr key={key}>
              <th>{key}</th>
              <td>{value[0]}</td>
              <td>{value[1]}</td>                   
            </tr>
              )}             
          </tbody>
        </table>
        {/* </Table> */}
        </div>
        {/* <ToggleStartButton></ToggleStartButton> */}
        <StartButton></StartButton>
        {' '}
        <StopButton></StopButton>
        </>
    )
};

export default ChatStats;


// return chatStats &&   (
//   <div>
// <Table responsive="sm" size="sm">
//       <thead>
//       <tr>
//       {Object.entries(chatStats).map(([key, value]) =>  
//           <th scope="col">{key}</th>            
//       )}
//       </tr>
//       </thead>
//       <tbody>         
//         <tr>
//         {Object.entries(chatStats).map(([key, value]) =>
//           <td>{value}</td>   
//           )}                 
//         </tr>
        
//       </tbody>
//     </Table>
//     </div>
// ) 