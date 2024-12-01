const playerControls = () => {
  const controls = [
    {
      label: "Name",
      type: "text",
      value: "",
      key: "name",
      placeholder: "Enter Player Name",
      rules: {
        required: "Name is Required",
      },
    },
    {
      label: "DOB",
      type: "date",
      key: "dob",
    },
    {
      label: "Country",
      type: "text",
      value: "",
      key: "country",
      placeholder: "Enter Country Name",
    },
    {
      label: "Expertise",
      type: "select",
      value: "bat",
      key: "expertise",
      options: [
        { label: "Batting", value: "bat" },
        { label: "Bowling", value: "bowl" },
        { label: "Wicket Keeping", value: "wk" },
        { label: "Allrounder", value: "all" },
      ],
      rules: {
        required: "Expertise is Required",
      },
    },
  ];
  return controls;
};
export default playerControls;
