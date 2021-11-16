import { Toaster } from "react-hot-toast";
import RoutesPatchs from "./Routes";

function App() {
  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
              minWidth: "200px",
              fontWeight: "bold",
            },
          },
        }}
      />
      <Toaster
        toastOptions={{
          error: {
            style: {
              background: "red",
              minWidth: "200px",
              fontWeight: "bold",
            },
          },
        }}
      />
      <RoutesPatchs />
    </>
  );
}

export default App;
