import { useForm } from "react-hook-form";
import { useProductContext } from "../../context/index";
import { StyledForm } from "./styles";

function FileUploadForm() {
  const { validateProducts } = useProductContext();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    validateProducts(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <input type="file" accept=".csv" {...register("file")} />
      <button type="submit">Validar</button>
    </StyledForm>
  );
}

export default FileUploadForm;
