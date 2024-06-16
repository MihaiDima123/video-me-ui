import {Flex, FlexProps, useColorModeValue} from "@chakra-ui/react";

const PageLayout = (props: FlexProps) => {
    const backColor = useColorModeValue('white', 'gray')

    return (
        <Flex
            direction={'column'}
            height={'100vh'}
            width={'100vw'}
            bg={backColor}
            {...props}
        >
            {props.children}
        </Flex>
    )
}

export default PageLayout