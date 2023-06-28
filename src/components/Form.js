import { useEffect, useState } from "react";

const Form = () => {
  const data = { name: "", email: "", gender: "" };

  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("Register is Done");
  }, [flag]);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.name || !inputData.email) {
      alert("All fields are mendatory");
    } else {
      setFlag(true);
    }
  };

  return (
    <>
      <pre>
        {flag ? (
          <h2 className="ui-define">
            Hello {inputData.name}, You've Registered Successfuly
          </h2>
        ) : (
          ""
        )}
      </pre>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>Name :</td>
            <td>
              <input
                type="name"
                placeholder="Enter your name"
                name="name"
                value={inputData.name}
                onChange={handleData}
              />
            </td>
          </tr>

          <tr>
            <td>Email :</td>
            <td>
              <input
                type="mail"
                placeholder="Enter Email"
                name="email"
                value={inputData.email}
                onChange={handleData}
              />
            </td>
          </tr>

          <tr>
            <td>Gender :</td>
            <td>
              Male
              <input type="radio" name="gender" class="gender" />
              Female
              <input type="radio" name="gender" class="gender" />
              Other
              <input type="radio" name="gender" class="gender" />
            </td>
          </tr>

          <tr>
            <td>City :</td>
            <td>
              <select name="option" id="option">
                <option value="">Select</option>
                <option value="">Malegaon</option>
                <option value="">Nashik</option>
                <option value="">Pune</option>
                <option value="">Bangalor</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>Upload Resume :</td>
            <input type="file" />
          </tr>

          <tr>
            <td>
              <button>Clear form</button>
            </td>
            <td>
              <button>Submit</button>
            </td>
          </tr>
        </table>
      </form>
    </>
  );
};

export default Form;
