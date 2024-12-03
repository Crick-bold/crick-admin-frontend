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
      label: "Mobile no",
      type: "text",
      value: "",
      key: "mobileNo",
      placeholder: "Enter Mobile No",
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
    {
      label: "DOB",
      type: "date",
      key: "dob",
    },
  ];
  return controls;
};
export default playerControls;
