const TeamControls = () => {
  const controls = [
    {
      label: "Team Name",
      type: "text",
      value: "",
      key: "name",
      placeholder: "Enter Team Name",
      rules: {
        required: "Team Name is Required",
      },
    },
    {
      label: "Image Url",
      type: "text",
      value: "",
      key: "imageUrl",
      placeholder: "Enter Team Image",
    },
  ];
  return controls;
};
export default TeamControls;
