import { useState, useEffect } from "react";
const input = () => {
  const [radioValue, setRadioValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [file, setFile] = useState(null);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    console.log([...formData]);
  };
  return (
    <div className="space-y-10">
      <div>
        <label>Input Text</label>
        <input type="text" />
      </div>
      <div>
        <input
          type="radio"
          name="categories"
          id="radio_1"
          value="radio_1"
          checked={radioValue === "radio_1"}
          onChange={() => setRadioValue("radio_1")}
        />
        <label htmlFor="radio_1">
          <span>Radio 1</span>
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          name="categories"
          id="chekbox_1"
          value="chekbox_1"
          checked={checkboxValue === "chekbox_1"}
          onChange={() => setCheckboxValue("chekbox_1")}
        />
        <label htmlFor="chekbox_1">
          <span>Checkbox 1</span>
        </label>
      </div>
      <div>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="" disabled>
            Select an option
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="block">
        <div>Upload Image</div>
        <div>
          <input type="file" onChange={handleFileChange} className="mb-2" />
        </div>
        <button
          className="border bg-slate-900 px-3 py-2 text-white"
          onClick={handleFileUpload}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default input;

const response = await axios.post("CLOUDFLARE_URL", formData, {
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
