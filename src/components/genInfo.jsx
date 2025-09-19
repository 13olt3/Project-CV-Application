import { useState } from "react";

function Input({
  id,
  inputName,
  style,
  inputValue,
  handleChange,
  buttonStyle,
  editButton,
  confirmButton,
  clickEdit,
  clickConfirm,
}) {
  return (
    <>
      <label>
        {inputName}
        <input
          value={inputValue}
          style={style}
          id={id}
          onChange={(e) => handleChange(id, e)}
        ></input>
        <button
          type="button"
          style={{ ...buttonStyle, ...editButton }}
          onClick={clickEdit}
        >
          Edit
        </button>
        <button
          type="button"
          style={{ ...buttonStyle, ...confirmButton }}
          onClick={clickConfirm}
        >
          Confirm
        </button>
      </label>
    </>
  );
}

function EditableField({ id, label, inputValue, handleChange }) {
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div className="inputField">
      <label className={isEditing ? "show" : "hide"}>
        {label}
        <input
          id={id}
          value={inputValue}
          disabled={!isEditing}
          onChange={(e) => handleChange(id, e)}
        />
      </label>
      <div className={isEditing ? "hide" : "show"}>
        {label} {inputValue}
      </div>

      <button
        type="button"
        onClick={() => setIsEditing(!isEditing)}
        className={isEditing ? "confirm" : "edit"}
      >
        {isEditing ? "Confirm" : "Edit"}
      </button>
    </div>
  );
}

export default function GeneralInformation() {
  const generalInfo = [
    { id: 1, label: "First name: ", value: "" },
    { id: 2, label: "Last Name: ", value: "" },
    { id: 3, label: "Email: ", value: "" },
    { id: 4, label: "Phone Number: ", value: "" },
    { id: 5, label: "Misc; ", value: "" },
  ];

  const [generalInformation, setGeneralInformation] = useState(generalInfo);

  function handleFieldChange(id, e) {
    setGeneralInformation(
      generalInformation.map((f) => {
        if (f.id === id) {
          return { ...f, value: e.target.value };
        } else {
          return f;
        }
      })
    );
  }

  return (
    <>
      <form className="GeneralInformation">
        <h2>General Information</h2>

        {generalInformation.map((field) => (
          <EditableField
            id={field.id}
            label={field.label}
            inputValue={generalInformation.find((f) => f.id === field.id).value}
            handleChange={handleFieldChange}
          />
        ))}

        {/* <button
          type="button"
          onClick={() => console.log("asdf")}
          disabled={false}
        >
          Confirmation
        </button> */}
      </form>
    </>
  );
}

function MyInput({ label }) {
  const [highlight, setHighlight] = useState(false);

  return (
    <div>
      <label>{label}</label>
      <input
        style={{
          backgroundColor: highlight ? "yellow" : "white",
        }}
        onFocus={() => setHighlight(true)}
        onBlur={() => setHighlight(false)}
      />
    </div>
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
