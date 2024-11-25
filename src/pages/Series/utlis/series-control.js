const playerControls = () => {
  const controls = [
    {
      label: "Series Name",
      type: "text",
      value: "",
      key: "name",
      placeholder: "Enter Series Name",
      rules: {
        required: "Series Name is Required",
      },
    },
    {
      label: "Image Url",
      type: "text",
      value: "",
      key: "imageUrl",
      placeholder: "Enter Series Image",
    },
  ];
  return controls;
};
export default playerControls;
