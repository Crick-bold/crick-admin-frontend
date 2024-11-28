import { useForm } from "react-hook-form";
import Layout from "../Components/Layout";
import playerControls from "./player-controls";
import useCreatePlayer from "./hooks/useCreatePlayer";

const AddPlayerLayout = ({ setShow, onCreatePlayers}) =>{
    const controls = playerControls();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const { createPlayer } = useCreatePlayer({ listPlayers : onCreatePlayers , setShow });

    return <>
        <Layout
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={createPlayer}
          controls={controls}
          errors={errors}
        />
    </>
}
export default AddPlayerLayout;