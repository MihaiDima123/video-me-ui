import {Text, TextProps} from "@chakra-ui/react";

const SimpleLabel = ({children, ...rest}: TextProps) => {

    return (
        <Text
            variant={'label'}
            fontSize={12}
            {...rest}
        >
            {children}
        </Text>
    )
}

export default SimpleLabel