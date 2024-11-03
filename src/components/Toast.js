import toast from "react-hot-toast";
export const generateToast = (type, message) => {
  const options = {
    duration: 3000,
    position: "top-right",
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  };

  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    default:
      toast(message, options);
      break;
  }
};
