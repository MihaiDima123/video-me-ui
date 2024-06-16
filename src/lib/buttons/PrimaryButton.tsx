import {Button, ButtonProps} from "@chakra-ui/react";
import baseButtonProps from "./base-button-props.ts";

const PrimaryButton = ({children, ...rest}: ButtonProps) => {

    return (
        <Button
            {...baseButtonProps}
            bg={'teal'}
            {...rest}
        >
            {children}
        </Button>
    )
}

export default PrimaryButton