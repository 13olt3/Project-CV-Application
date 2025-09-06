import { useState } from "react";

export default function GeneralInformation() {
  const [firstName, setFirstName] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);
  const [showEdit, setShowEdit] = useState({
    display: "none",
    marginLeft: "1em",
  });

  const [style, setStyle] = useState({
    padding: "5px",
    fontFamily: "Arial",
    // pointerEvents: "none",
    caretColor: "",
  });

  function handleSetFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleClick() {
    let newStyle = { ...style, caretColor: "transparent", opacity: "0.3" };
    setStyle(newStyle);
    setFormSubmit(true);
    setShowEdit({ ...showEdit, display: "" });
  }
  function handleEdit(e) {
    e.preventDefault();
    let newStyle = { ...style, caratColor: "", opacity: "1" };
    setFormSubmit(false);
    setStyle(newStyle);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Form submitted, ${firstName}`);
  };

  const doNothing = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="GeneralInformation">
        <h2>General Information</h2>
        <label>
          First Name:{" "}
          <input
            value={firstName}
            onChange={handleSetFirstName}
            style={style}
            disabled={formSubmit}
          ></input>
          <button style={showEdit} onClick={handleEdit} disabled={!formSubmit}>
            Edit
          </button>
        </label>
        <button onClick={handleClick} disabled={formSubmit}>
          Confirmation
        </button>
      </form>
    </>
  );
}

// function Input(firstName, handleSetFirstName) {
//   const [buttonStyle, setButtonStyle] = useState({
//     padding: "5px",
//     fontFamily: "Arial",
//     pointerEvents: "",
//     caretColor: "",
//   });

//   function handleStyle() {
//     let style = { ...buttonStyle, caretColor: "transparent" };
//     setButtonStyle(style);
//   }
//   return (
//     <>
//       <label htmlFor="firstName">
//         First Name:{" "}
//         <input
//           id="firstName"
//           value={firstName}
//           onChange={handleSetFirstName}
//           style={{
//             buttonStyle,
//           }}
//           disabled={false}
//         ></input>
//       </label>
//       <button onClick={handleStyle}></button>
//     </>
//   );
// }
