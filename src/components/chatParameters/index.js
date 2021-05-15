import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { changeChatParameters } from "../api/chatStats-api";
import "./index.css";

const ChatParameters = ({ chatParameters }) => {
  const [framework] = useState(chatParameters.data.framework);
  const [concurrentCallers, setConcurrentCallers] = useState(
    chatParameters.data.concurrentCallers
  );
  const [chatSendMax, setChatSendMax] = useState(
    chatParameters.data.chatSendMax
  );
  const [firstMsgSendDelay, setFirstMsgSendDelay] = useState(
    chatParameters.data.firstMsgSendDelay
  );
  const [respondMsgDelay, setRespondMsgDelay] = useState(
    chatParameters.data.respondMsgDelay
  );
  const [agentJoinTimeout, setAgentJoinTimeout] = useState(
    chatParameters.data.agentJoinTimeout
  );
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = async () => {
    // set loader to true on submission
    setIsLoading(true);
    const data = {
      concurrentCallers: concurrentCallers,
      chatSendMax: chatSendMax,
      firstMsgSendDelay: firstMsgSendDelay,
      respondMsgDelay: respondMsgDelay,
      agentJoinTimeout: agentJoinTimeout,
    };

    const response = await changeChatParameters(data);

    // disable loader and update current state if 200 OK received for submission
    response.status = 200 && setIsLoading(false);

    console.log(
      concurrentCallers,
      chatSendMax,
      firstMsgSendDelay,
      respondMsgDelay,
      agentJoinTimeout
    );
  };

  return (
    <>
      <form
        className="form bg-dark text-light table-space"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-center">Chat Generator Parameters</h2>
        <h3 className="text-highlight">Framework: {framework} </h3>
        <div className="form-group">
          <label>Number of Concurrent Callers</label>
          <input
            type="number"
            className="form-control"
            placeholder=""
            required="required"
            name="concurrentCallers"
            value={concurrentCallers}
            onChange={(e) => Number(setConcurrentCallers(e.target.value))}
            ref={register({
              required: "ConcurrentCallers is required",
              minLength: {
                value: 1,
                message: "ConcurrentCallers is too short, minimum length is 1",
              },
            })}
          />
        </div>
        <div className="form-group">
          <label>
            Number of Chat Messages per Interaction (does not include agent BYE
            message to end interaction)
          </label>
          <input
            type="number"
            className="form-control"
            placeholder=""
            required="required"
            name="chatSendMax"
            value={chatSendMax}
            onChange={(e) => Number(setChatSendMax(e.target.value))}
            ref={register({
              required: "ChatSendMax is required",
              minLength: {
                value: 1,
                message: "ChatSendMax is too short, minimum length is 1",
              },
            })}
          />
        </div>
        {/* <div className="form-group">
            <label>
              Agent Sends Bye (true/false)
            </label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              required="required"
              name="agentSendsBye"
              value={agentSendsBye}
              onChange={(e) => Number(setAgentSendsBye(e.target.value))}
              ref={register({
                required: "agentSendsBye is required",
                minLength: {
                  value: 1,
                  message:
                    "agentSendsBye is too short, minimum length is 1",
                },
              })}
            />
          </div> */}
        <div className="form-group">
          <label>Delay prior to Sending First Chat Message (ms)</label>
          <input
            type="number"
            className="form-control"
            placeholder=""
            required="required"
            name="firstMsgSendDelay"
            value={firstMsgSendDelay}
            onChange={(e) => Number(setFirstMsgSendDelay(e.target.value))}
            ref={register({
              required: "FirstMsgSendDelay is required",
              minLength: {
                value: 1,
                message: "FirstMsgSendDelay is too short, minimum length is 1",
              },
            })}
          />
        </div>
        <div className="form-group">
          <label>Delay before responding to Chat Message (ms)</label>
          <input
            type="number"
            className="form-control"
            placeholder=""
            required="required"
            name="respondMsgDelay"
            value={respondMsgDelay}
            onChange={(e) => Number(setRespondMsgDelay(e.target.value))}
            ref={register({
              required: "Respond Delay is required",
              minLength: {
                value: 1,
                message: "Respond Delay is too short, minimum length is 1",
              },
            })}
          />
        </div>
        {/* <div className="form-group">
            <label>
              Delay between Chat Flow Loops (ms)
            </label>
            <input
              type="number"
              className="form-control"
              placeholder=""
              required="required"
              name="delayBetweenLoops"
              value={delayBetweenLoops}
              onChange={(e) => Number(setDelayBetweenLoops(e.target.value))}
              ref={register({
                required: "Delay Between Loops is required",
                minLength: {
                  value: 1,
                  message: "Delay Between Loops is too short, minimum length is 1",
                },
              })}
            />
          </div> */}
        <div className="form-group">
          <label>Timeout for Agent Join (ms)</label>
          <input
            type="number"
            className="form-control"
            placeholder=""
            required="required"
            name="agentJoinTimeout"
            value={agentJoinTimeout}
            onChange={(e) => Number(setAgentJoinTimeout(e.target.value))}
            ref={register({
              required: "Timeout for Agent Join is required",
              minLength: {
                value: 1,
                message:
                  "Timeout for Agent Join is too short, minimum length is 1",
              },
            })}
          />
        </div>
        {/* <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Message Text to Send"
              required="required"
              name="customerMsgText"
              onChange={(e) => setCustomerMsgText(e.target.value)}
              ref={register({
                required: "Message Text to Send is required",
                minLength: {
                  value: 1,
                  message: "Message Text to Send is too short, minimum length is 1",
                },
              })}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Text to initiate Agent Disconnect"
              required="required"
              name="customerBye"
              onChange={(e) => setCustomerBye(e.target.value)}
              ref={register({
                required: "Text to initiate Agent Disconnect is required",
                minLength: {
                  value: 1,
                  message: "Text to initiate Agent Disconnect is too short, minimum length is 1",
                },
              })}
            />
          </div> */}
        <div className="form-group">
          {isLoading ? (
            <button type="submit" className="btn-lg btn-danger btn-block">
              Submitting ....
            </button>
          ) : (
            <button type="submit" className="btn-lg btn-primary btn-block">
              Submit
            </button>
          )}
        </div>
        {/* <div className="form-group">
            <button type="submit" className="btn-lg btn-primary btn-block">
              Submit
            </button>
          </div> */}
      </form>
    </>
  );
};

export default ChatParameters;

// using custom error hook to store, add and clear login authentication errors
//   const [error, addError, clearError] = useError();
//   const setLoginError = (newError) => addError(newError);
//   const clearLoginError = () => clearError();

// had to add this here (and in LoginPage) otherwise when a user (a) was redirected to login for accessing a protected page (b) then logged in successfully - they did not get directed to the original page they were trying to access
//const { from } = user.location.state || { from: { pathname: "/" } };
