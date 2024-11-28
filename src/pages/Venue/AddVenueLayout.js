import { useForm } from "react-hook-form";
import Layout from "../Components/Layout"
import useCreateVenue from "./hooks/useCreateVenue";
import VenueControls from "./venue-controls";

const AddVenueLayout = ({listVenues, setShow})=>{
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
    const controls = VenueControls();

    const { addVenue } = useCreateVenue({ listVenues, setShow });

    return <>
            <Layout
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={addVenue}
          controls={controls}
          errors={errors}
        />
    </>
}
export default AddVenueLayout