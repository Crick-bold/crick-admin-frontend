const AddPlayerControls = ({ playerOptions1, playerOptions2, squad }) => {
  const afterFilterPlayerOptions = playerOptions1?.filter(function (player) {
    return (
      (player?.battingOrder === 12 && player?.selected) || 
      (!playerOptions1 && player?.id === squad?.batsmanOnStrike) ||
      (!playerOptions2 && player?.id === squad?.batsmanOnNonStrike) 
    );
  });

  const batsmanOnStrike = playerOptions1?.find((player)=>player?.id === squad?.batsmanOnStrike)
  const batsmanOnNonStrike = playerOptions1?.find((player)=>player?.id === squad?.batsmanOnNonStrike)

  const controls = [
    {
      label: "Strike",
      type: "player-select",
      value: null,
      key: "batsmanOnStrike",
      options: squad?.batsmanOnStrike ? [...afterFilterPlayerOptions, batsmanOnStrike] : afterFilterPlayerOptions,
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
      options: squad?.batsmanOnNonStrike ? [...afterFilterPlayerOptions, batsmanOnNonStrike] : afterFilterPlayerOptions,
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
