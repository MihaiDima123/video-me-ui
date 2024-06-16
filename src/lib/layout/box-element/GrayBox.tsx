import {Box, BoxProps} from "@chakra-ui/react"
import baseBoxProps from "./base-box-props.ts";

const GrayBox = ({children, ...rest}: BoxProps) => {
    return (
        <Box
            {...baseBoxProps}
            bg={'gray.100'}
            {...rest}
        >
            {children}
        </Box>
    )
}

export default GrayBox