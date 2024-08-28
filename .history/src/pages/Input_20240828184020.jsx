import { useState, useEffect } from "react";
import axios from "axios";

const input = () => {
  const [radioValue, setRadioValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const CLOUDFLARE_TOKEN = rot7C1YxhAf3IUc4KmE4EJrGDa_1x7jVJiKimLi8;

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setSuccess("");
    setError("");
  };
  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      // Assuming you have an endpoint or direct URL for Cloudflare R2 uploads
      const response = await axios.post(
        "https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ID}/images/v1,", // Replace with your actual Cloudflare R2 upload URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      setSuccess("File uploaded successfully!");
      console.log(response.data);
    } catch (err) {
      console.error(err);
      setError("File upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
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
