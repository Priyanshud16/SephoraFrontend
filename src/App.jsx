import { ChakraProvider } from "@chakra-ui/react";
import AllRoutes from "./Routers/AllRoutes";
import "./App.css"
function App() {
  return (
    <ChakraProvider>
      <AllRoutes />
    </ChakraProvider>
  );
}

export default App;