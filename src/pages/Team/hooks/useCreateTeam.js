import { useDispatch } from "react-redux";
import useRequest from "../../../common/hooks/useRequest";
import { setToast } from "../../../common/store/toastSlice";

const useCreateTeam = ({ listTeams = () => {}, setShow = () => {} }) => {
  const dispatch = useDispatch();

  const { data, loading, trigger } = useRequest({
    url: "team",
    method: "post",
    isConfig: true,
    autoLoad: false,
  });

  const addTeam = async (data) => {
    try {
      if (loading) return;
      await trigger(data);
      setShow(false);
      listTeams();
      dispatch(
        setToast({
          severity: "success",
          summary: "Saved",
          detail: "Team saved successfully",
          life: 3000,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(
        setToast({
          severity: "error",
          summary: "Something went wrong",
          detail: err.response?.data?.teams || err.response?.data.error,
          life: 3000,
        })
      );
    }
  };

  return { addTeam, loading, data };
};
export default useCreateTeam;
