import React from "react";

const inputs = [
  {
    name: "first-name",
    label: "First Name",
    type: "input",
    inputType: "text",
  },
  {
    name: "Email",
    type: "input",
    label: "Email",
    inputType: "email",
  },
  {
    name: "message",
    label: "Message",
    customStyle: "h-20",
    type: "textArea",
  },
  {
    name: "role",
    label: "Role",
    type: "dropdown",

    options: [
      "Director",
      "Manager",
      "Engineer",
      "IT Specialist",
      "Product Manager/Owner",
    ],
  },
];

const inputHandler = (input, i) => {
  const inputClass =
    "bg-white w-full px-3 py-2 border border-black rounded shadow";
  const labelClass = "flex flex-col";
  switch (input.type) {
    case "input":
      return (
        <div data-sb-object-id={input?.sys?.id} key={i}>
          <label data-sb-field-path=".label" key={i} className={labelClass}>
            {input.label}
          </label>

          <input
            className={inputClass + " " + input.customStyle}
            type={input.inputType}
            name={input.name}
          />
        </div>
      );
    case "textArea":
      return (
        <div className="w-full" data-sb-object-id={input?.sys?.id} key={i}>
          <label data-sb-field-path=".label" className={labelClass}>
            {input.label}
          </label>
          <input
            className={inputClass + " " + input.customStyle}
            type={input.inputType}
            name={input.name}
          />
        </div>
      );
    case "dropdown":
      return (
        <div className="w-full" data-sb-object-id={input?.sys?.id} key={i}>
          <label data-sb-field-path=".label" className={labelClass}>
            {input.label}
          </label>

          <select
            className={inputClass + " " + input.customStyle}
            id={input.name}
            name={input.name}
          >
            {input?.optionsCollection?.items.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        </div>
      );
  }
};

const CustomForm = ({ form }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10">
      <div className="h-40 w-full flex items-center p-12 text-5xl bg-gradient-to-br bg-black from-indigo-500 shadow">
        {form?.label}
      </div>
      <form
        data-sb-object-id={form?.id}
        name={form?.name}
        method="post"
        netlify={true}
        className="text-black flex flex-col gap-4 bg-white w-96 mt-20"
      >
        <input type="hidden" name="form-name" value={form?.name} />

        {form?.inputs.map((input, i) => {
          return inputHandler(input, i);
        })}
        <button
          className="bg-blue-700 px-3 py-2 hover:bg-blue-600 text-white rounded shadow"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CustomForm;
