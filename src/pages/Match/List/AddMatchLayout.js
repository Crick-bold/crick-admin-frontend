import { useForm } from "react-hook-form";
import useCreateMatch from "../hooks/useCreateMatch";
import Layout from "../../Components/Layout";
import useGetDashboard from "../../DashboardPage/hooks/useGetDashboard";
import MatchControls from "../match-controls";
import useGetMatches from "../hooks/useGetMatches";

const AddMatchLayout = ({ onCreateMatch = () => {}, seriesData, setShow }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data, getDashboard } = useGetDashboard();

  const { series = [], teams = [], venues = [] } = data || {};

  const controls = MatchControls({
    teamOptions: teams,
    venueOptions: venues,
    seriesOptions: series,
    notRequiredInputs: ["overs", "series", "name"],
  });

  const {
    data: matchesFromMain,
    getMatches,
    loadingFromMain,
  } = useGetMatches();

  const { createMatch } = useCreateMatch({
    getMatches,
    seriesId: seriesData?.id,
    overs: seriesData?.overs,
    matchName: "League Match",
    setShow,
    onCreateMatch,
  });
  return (
    <>
      <Layout
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={createMatch}
        controls={controls}
        errors={errors}
        submitBtnName="CREATE"
        onCreateTeam={() => {
          getDashboard();
        }}
        onCreateVenue={() => {
          getDashboard();
        }}
      />
    </>
  );
};
export default AddMatchLayout;
