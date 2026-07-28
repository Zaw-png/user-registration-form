import { useState } from "react";
import "./UserRegistration.css";

const hobbies = [
  { value: "music", name: "Music" },
  { value: "movie", name: "Movies" },
  { value: "plastic-model", name: "Plastic Model" },
];

const genders = [
  { value: "male", name: "Male" },
  { value: "female", name: "Female" },
  { value: "others", name: "Others" },
];

const departments = {
  Accounting: [
    "Accountant",
    "Senior Accountant",
    "Payroll Officer",
  ],
  IT: [
    "Developer",
    "System Analyst",
    "Network Engineer",
  ],
  HR: [
    "HR Officer",
    "Recruiter",
    "Training Officer",
  ],
};

function UserRegistration() {
  const initialData = {
    username: "",
    firstname: "",
    lastname: "",
    gender: "",
    hobbies: [],
    department: "",
    position: "",
  };

  const [form, setForm] = useState(initialData);
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "department") {
      setForm({
        ...form,
        department: value,
        position: departments[value][0],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleHobby = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setForm({
        ...form,
        hobbies: [...form.hobbies, value],
      });
    } else {
      setForm({
        ...form,
        hobbies: form.hobbies.filter((h) => h !== value),
      });
    }
  };

  const handleSubmit = () => {
    setSubmitted(form);
  };

  const handleReset = () => {
    setForm(initialData);
    setSubmitted(null);
  };

  return (
    <div className="registration-container">
      <div className="registration-title">
        User Registration
      </div>

      <hr />

      <div className="registration-form">

        <div className="form-row">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label>Firstname</label>
          <input
            type="text"
            name="firstname"
            value={form.firstname}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label>Lastname</label>
          <input
            type="text"
            name="lastname"
            value={form.lastname}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label>Gender</label>

          <div className="radio-group">
            {genders.map((g) => (
              <label key={g.value}>
                <input
                  type="radio"
                  name="gender"
                  value={g.value}
                  checked={form.gender === g.value}
                  onChange={handleChange}
                />
                {g.name}
              </label>
            ))}
          </div>

        </div>

        <div className="form-row">
          <label>Hobbies</label>

          <div className="checkbox-group">
            {hobbies.map((h) => (
              <label key={h.value}>
                <input
                  type="checkbox"
                  value={h.value}
                  checked={form.hobbies.includes(h.value)}
                  onChange={handleHobby}
                />
                {h.name}
              </label>
            ))}
          </div>

        </div>

        <div className="form-row">
          <label>Department</label>

          <select
            name="department"
            value={form.department}
            onChange={handleChange}
          >
            <option value="">Select Department</option>

            {Object.keys(departments).map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>

        </div>

        <div className="form-row">
          <label>Job Position</label>

          <select
            name="position"
            value={form.position}
            onChange={handleChange}
          >
            <option value="">Select Position</option>

            {form.department &&
              departments[form.department].map((job) => (
                <option key={job} value={job}>
                  {job}
                </option>
              ))}
          </select>

        </div>

        <hr />

        <div className="button-area">
          <button
            className="reset-btn"
            onClick={handleReset}
          >
            Reset
          </button>

          <button
            className="submit-btn"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        {submitted && (
          <>
            <hr />

            <div className="result">

              <div className="result-row">
                <span>Username</span>
                <span>{submitted.username}</span>
              </div>

              <div className="result-row">
                <span>Firstname</span>
                <span>{submitted.firstname}</span>
              </div>

              <div className="result-row">
                <span>Lastname</span>
                <span>{submitted.lastname}</span>
              </div>

              <div className="result-row">
                <span>Hobbies</span>
                <span>
                  {submitted.hobbies.length > 0
                    ? submitted.hobbies.join(", ")
                    : "-"}
                </span>
              </div>

              <div className="result-row">
                <span>Gender</span>
                <span>{submitted.gender}</span>
              </div>

              <div className="result-row">
                <span>Department</span>
                <span>{submitted.department}</span>
              </div>

              <div className="result-row">
                <span>Job Position</span>
                <span>{submitted.position}</span>
              </div>

            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default UserRegistration;