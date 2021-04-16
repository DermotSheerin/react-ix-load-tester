import React, { useState } from "react";
import {useForm} from "react-hook-form";;


const FrameworkChoice = () => {
const [framework, setFramework] = useState("");

const { register, handleSubmit, errors, reset } = useForm()

const onSubmit = async () => {
    console.log(`Setting Framework to: ${framework}`)
  }

    return (
        <>
            <form
              className="form bg-dark text-light table-space"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h2 className="text-center">Chat Framework Choice</h2>
              <div className="form-group">
                <label>
                  Framework Choice
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                //   required="required"
                  name="framwork"
                  value={framework}
                  onChange={(e) => setFramework(e.target.value)}
                  ref={register({
                    required: "framwork is required",
                    minLength: {
                      value: 1,
                      message: "framwork is too short, minimum length is 1",
                    },
                  })}
                />
              </div>
              <div className="form-group">
            <button type="submit" className="btn-lg btn-primary btn-block">
              Submit
            </button>
            {/* <button
              type="reset"
              className="btn-sm btn-secondary btn-block"
              onClick={() => {
                reset({
                  email: "",
                  password: "",
                });
              }}
            >
              Reset
            </button> */}
          </div>
            </form>
        </>
      );

}
export default FrameworkChoice;