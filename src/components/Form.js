const Form = () => {
  const handleSubmit = (e) => {
      alert(`Hello ${e.target.name} form is successfully Submitted`);
    e.preventDefault();
  };

  return (
    <div className="form-css">
      <form onSubmit={handleSubmit}>
        <table id="table-css">
          <tr>
            <td>Name :</td>
            <td>
              <input type="name" name="name" placeholder="Enter your name" />
            </td>
          </tr>

          <tr>
            <td>Email :</td>
            <td>
              <input type="mail" placeholder="Enter Email" />
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
    </div>
  );
};

export default Form;
