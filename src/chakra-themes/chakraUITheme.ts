import {extendBaseTheme} from "@chakra-ui/react";

const chakraUITheme = extendBaseTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
})

export {
    chakraUITheme
}