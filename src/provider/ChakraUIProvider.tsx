import React from "react";
import { ChakraProvider } from "@chakra-ui/react"
import {chakraUITheme} from "../chakra-themes/chakraUITheme.ts";

type ChakraUIProviderProps = {
    children?: React.ReactNode
}

const ChakraUIProvider = ({ children }: ChakraUIProviderProps) => {

    return (
        <ChakraProvider theme={chakraUITheme}>
            {children}
        </ChakraProvider>
    )
}

export default ChakraUIProvider