import useRequest from "../../../common/hooks/useRequest";
import { useDispatch } from "react-redux";
import { setToast } from "../../../common/store/toastSlice";

const useBulkUploadPlayers = ({
  listPlayers = () => {},
  setShow = () => {},
}) => {
  const dispatch = useDispatch();

  const { data, loading, trigger } = useRequest({
    url: "bulk-upload-players",
    method: "post",
    isConfig: true,
  });

  const bulkUploadPlayers = async (data) => {
    try {
      const payLoad = {
        players: data.slice(1).map((player) => ({
          name: player[0],
          expertise: player[1],
        })),
      };
      await trigger(payLoad);
      setShow(false);
      listPlayers();
      dispatch(
        setToast({
          severity: "success",
          summary: "Saved",
          detail: "Player saved successfully",
          life: 3000,
        })
      );
    } catch (err) {
      await trigger(data);
      setShow(false);
      listPlayers();
      dispatch(
        setToast({
          severity: "error",
          summary: "Please select  11 players.",
          detail: err.response.data?.players || err.response.data,
          life: 3000,
        })
      );
    }
  };

  return { bulkUploadPlayers, loading, data };
};
export default useBulkUploadPlayers;
