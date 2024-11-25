const AddPlayerControls = ({ playerOptions1, playerOptions2, squad }) => {
  const afterFilterPlayerOptions = playerOptions1?.filter(function (player) {
    return (
      (player?.battingOrder === 12 && player?.selected) ||
      [squad?.batsmanOnStrike, squad?.batsmanOnNonStrike].includes(player?.id)
    );
  });
  console.log(playerOptions1, "pll", playerOptions2, squad?.bowler);

  const controls = [
    {
      label: "Strike",
      type: "player-select",
      value: null,
      key: "batsmanOnStrike",
      options: afterFilterPlayerOptions,
      disabled: squad?.batsmanOnStrike,
      rules: {
        required: "Player on strike is Required",
      },
    },
    {
      label: "Non Strike",
      type: "player-select",
      value: null,
      key: "batsmanOnNonStrike",
      options: afterFilterPlayerOptions,
      disabled: squad?.batsmanOnNonStrike,
      rules: {
        required: "Player on non-strike is Required",
      },
    },
    {
      label: "Bowler",
      type: "player-select",
      value: null,
      key: "bowler",
      options: playerOptions2,
      disabled: squad?.bowler,
      rules: {
        required: "Bowler is Required",
      },
    },
  ];
  return controls;
};
export default AddPlayerControls;
