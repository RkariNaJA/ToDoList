import { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";

function LoginForm(props) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function onUpdateField(event) {
    const { value, name } = event.target;
    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  }

  function onSubmitForm(event) {
    event.preventDefault();
    alert(JSON.stringify(form, null, 2));
  }

  return (
    <form onSubmit={onSubmitForm}>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          className="form-control"
          type="text"
          aria-label="Email field"
          name="email"
          value={form.email}
          onChange={onUpdateField}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          className="form-control"
          type="password"
          aria-label="Password field"
          name="password"
          value={form.password}
          onChange={onUpdateField}
        />
      </div>
      <div className="mb-3">
        <button
          className="btn btn-warning"
          type="submit"
          style={{
            padding: "3px 30px 10px 10px",
            borderRadius: "8px",
          }}
        >
          <LoginIcon />
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
