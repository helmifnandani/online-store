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
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      // Assuming you have an endpoint or direct URL for Cloudflare R2 uploads
      const response = await axios.post(
        "YOUR_CLOUDFLARE_R2_UPLOAD_URL", // Replace with your actual Cloudflare R2 upload URL
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
    <>
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
      <div>
        <label>Upload Image</label>
        <input type="file" onChange={handleFileChange} className="mb-2" />
        <button
          onClick={handleFileUpload}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        ></button>
      </div>
    </>
  );
};

export default input;
