import { useState } from "react";

const initialFields = [
  { id: 1, label: "First Name", value: "Alice" },
  { id: 2, label: "Last Name", value: "Smith" },
  { id: 3, label: "Email", value: "alice@example.com" },
];

export default function MyForm() {
  const [fields, setFields] = useState(initialFields);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [editableField, setEditableField] = useState(null); // track one editable field

  function handleChange(id, e) {
    setFields(
      fields.map((f) => (f.id === id ? { ...f, value: e.target.value } : f))
    );
  }

  return (
    <form>
      {fields.map((field) => (
        <div key={field.id} style={{ marginBottom: "10px" }}>
          <label>
            {field.label}:{" "}
            <input
              value={field.value}
              disabled={isConfirmed && editableField !== field.id}
              onChange={(e) => handleChange(field.id, e)}
            />
          </label>
          {isConfirmed && (
            <button type="button" onClick={() => setEditableField(field.id)}>
              Edit
            </button>
          )}
        </div>
      ))}

      {!isConfirmed ? (
        <button type="button" onClick={() => setIsConfirmed(true)}>
          Confirm
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            setIsConfirmed(false);
            setEditableField(null);
          }}
        >
          Done Editing
        </button>
      )}
    </form>
  );
}
