import React, { useState } from "react";
import axios from "axios";
import "./UploadForm.scss";
import Button from "@mui/material/Button";

const UploadForm = () => {
  const [xlFile, setXlFile] = useState(null);

  const formSubmit = async (e) => {
    e.preventDefault();
    if (xlFile !== null) {
      try {
        const FD = new FormData();
        FD.append("name", "names here");
        FD.append("xlFile", xlFile);
        const res = await axios.post("/upload", FD);
        console.log(res);
      } catch (e) {
        console.log("error ", e);
      }
    }
  };

  const setFile = (e) => {
    setXlFile(e.target.files[0]);
  };

  return (
    <section className="row m-0 p-0 uploadForm">
      <div className="col-12 col-md-6 formContainer flexCenter">
        <form
          method="post"
          onSubmit={formSubmit}
          className="form w-75"
          encType="multipart/form-data"
        >
          <div className="mb-3">
            <p className="text-center text-secondary">
              Upload .xlxs files only
            </p>
          </div>
          <div className="input-group mb-3">
            <input
              type="file"
              name="xlFile"
              onChange={setFile}
              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              className="form-control"
              id="inputGroupFile02"
            />
            <Button
              className="input-group-text mainBtn"
              htmlFor="inputGroupFile02"
              type="submit"
              variant="contained"
            >
              Upload
            </Button>
          </div>
        </form>
      </div>
      <div className="col-12 col-md-6 formBg"></div>
    </section>
  );
};

export default UploadForm;
