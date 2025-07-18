import useListPlayers from "../../../Player/hooks/useListPlayers";
const AddPlayerControls = ({ squad, antiSquad }) => {
  const playersOptions = useListPlayers({});
  const afterFilterPlayerOptions = {
    options: playersOptions?.options?.filter(function (val) {
      return (
        [...squad?.players, ...antiSquad?.players]
          ?.map((player) => {
            return player?.id;
          })
          ?.indexOf(val?.id) === -1
      );
    }),
  };

  const controls = [
    {
      label: "",
      type: "player-select",
      value: "",
      key: "player_id",
      ...afterFilterPlayerOptions,
      rules: {
        required: "Player is Required",
      },
    },
  ];
  return controls;
};
export default AddPlayerControls;
