import { useForm } from "react-hook-form";
import { useProductContext } from "../../context/index";

function FileUploadForm() {
  const { validateProducts } = useProductContext();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    validateProducts(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="file" accept=".csv" {...register("file")} />
      <button type="submit">Validar</button>
    </form>
  );
}

export default FileUploadForm;
