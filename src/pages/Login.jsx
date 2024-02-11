import React, { useState } from "react";
import { Worker } from "@react-pdf-viewer/core";
import pdf from "../assets/IdeaPad_Slim_5_16IRL8_Spec.pdf";
import { Viewer } from "@react-pdf-viewer/core";

const Login = () => {
  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl="/assets/pdf-open-parameters.pdf" />
      </Worker>
    </div>
  );
};

export default Login;
