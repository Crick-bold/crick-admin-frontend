import { useForm } from "react-hook-form";
import Layout from "../Components/Layout";
import useCreateSeries from "./hooks/useCreateSeries";
import playerControls from "./utlis/series-control";

const AddSeriesLayout = ({ setShow, onCreateSeries }) => {
  const controls = playerControls();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createSeries } = useCreateSeries({
    setShow,
    listSeries: onCreateSeries,
  });
  return (
    <>
      <Layout
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={createSeries}
        controls={controls}
        errors={errors}
      />
    </>
  );
};
export default AddSeriesLayout;
