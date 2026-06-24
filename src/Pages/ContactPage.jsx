import { useState } from "react";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert(
        "Please fill all fields"
      );
      return;
    }

    alert("Form Submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact Me</h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br />
      <br />

      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default ContactPage;