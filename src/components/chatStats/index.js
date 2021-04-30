import React, {useState, useRef, useEffect } from "react";
import StartButton from "../buttons/startButton";
import StopButton from "../buttons/stopButton";
import ResetStatsButton from "../buttons/resetStatsButton";
import "./index.css";
import ResourceChart from "../resourceChart"
//import useChatStats from '../hooks/useChatStats'
//import ToggleStartButton from "../buttons/toggleStartButton";


const ChatStats = ({chatStats, graphData }) => {

//   // Get the previous value (was passed into hook on last render)
//   const prevCount = usePrevious(chatStats.resourceStats.usedMem[1]);
//   console.log(`here is prevCount ${prevCount} and here is prop ${chatStats.resourceStats.usedMem[1]}`)

//   // Hook
// function usePrevious(value) {
//   // The ref object is a generic container whose current property is mutable ...
//   // ... and can hold any value, similar to an instance property on a class
//   const ref = useRef();
//   // Store current value in ref
//   useEffect(() => {
//     ref.current = value;
//   }, [value]); // Only re-run if value changes
//   // Return previous value (happens before update in useEffect above)
//   return ref.current;
// }
  
    return (
      <>
      <div>
      <ResourceChart graphData={graphData} />
      </div>
      
      <div>
      <h2 className="table-space">Resource Usage</h2>
      <table className="table table-striped">
          <thead>
          <tr className="table-highlight">
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
              {/* <td className={`${value[1] > 1 ? "blink_me" : ""}`}>{value[1]}</td>                  */}
            </tr>
              )}              
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="table-space">Chat Generator Statistics </h2>
        <table className="table table-striped">
          <thead>
          <tr className="table-highlight">
              <th scope="col">Events Received</th>      
              <th scope="col">First Caller In</th>
              <th scope="col">Last Caller In</th>  
          </tr>
          </thead>
          <tbody>         
            <tr>
              <th>{ chatStats.eventCounter }</th>
              <td>{ chatStats.testTime.startTime }</td>
              <td>{ chatStats.testTime.stopTime }</td>                 
            </tr>         
          </tbody>
        </table>
      </div>

      <div>
        <table className="table table-striped">
          <thead>
          <tr className="table-highlight">
              <th scope="col">Step</th>      
              <th scope="col">Success</th>  
              <th scope="col">Fail</th>  
          </tr>
          </thead>
          <tbody>         
          {Object.entries(chatStats.chatStatsMap).map(([key, value]) =>
            <tr key={key}>
              <th>{key}</th>
              {/* user ternary operator to change select className based on pass/fail */}
              <td className={`${value[0] >= 1 ? "green-highlight" : ""}`}>{value[0]}</td>
              <td className={`${value[1] >= 1 ? "red-highlight" : ""}`}>{value[1]}</td>  
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
        {' '}
        <ResetStatsButton></ResetStatsButton>
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