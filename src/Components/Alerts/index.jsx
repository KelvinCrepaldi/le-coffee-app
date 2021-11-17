import toast from "react-hot-toast";

export const SuccessAlert = (text,pos) => toast.success(text, {
    position: `${pos}`,
    style: {
      border: "1px solid var(--alert-success)",
      padding: "16px",
      color: "var(--alert-success)",
      background: "var(--white-primary)",
      width: "80%"
    },
  })

  export const ErrorAlert = (text, pos) => toast.error(text, {
    position: `${pos}`,
    style: {
      border: "1px solid var(--alert-error)",
      padding: "16px",
      color: "var(--alert-error)",
      background: "var(--white-primary)",
    },
    iconTheme: {
      primary: "var(--alert-error)",
      secondary: "var(--white-primary)",
    },
  })