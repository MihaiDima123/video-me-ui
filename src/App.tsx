import {RouterProvider} from "react-router-dom";
import {defaultRouter} from "./router/routers.tsx";
import ChakraUIProvider from "./provider/ChakraUIProvider.tsx";
import './i18n/i18n-initialize.ts'

function App() {
  return (
    <ChakraUIProvider>
        <RouterProvider router={defaultRouter} />
    </ChakraUIProvider>
  )
}

export default App
