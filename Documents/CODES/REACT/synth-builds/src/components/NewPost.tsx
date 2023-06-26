import { AxiosResponse } from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import apiClient from "../services/api.client";

export default function NewPost() {
  const [file, setFile] = useState<File | undefined>();
  const [caption, setCaption] = useState<string>("");

  const submit = async (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    if (file) {
      formData.append("image", file);
    }
    formData.append("caption", caption);

    try {
      const response: AxiosResponse = await apiClient.post(
        "api/posts",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(response.data); // Log the response if needed
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleCaptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCaption(event.target.value);
  };

  return (
    <form onSubmit={submit}>
      <input onChange={handleFileChange} type="file" accept="image/*"></input>
      <input
        value={caption}
        onChange={handleCaptionChange}
        type="text"
        placeholder="Caption"
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}
