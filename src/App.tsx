import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FileUploadForm from "./components/fileUpload";
import ResponseProducts from "./components/responseProducts";
import { useProductContext } from "./context/index";
import { GlobalStyles } from "./styles/global";

function App() {
  const { loading, products } = useProductContext();
  return (
    <div>
      <GlobalStyles />
      {loading ? <p>Carregando...</p> : <FileUploadForm />}
      {products ? <ResponseProducts /> : null}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
