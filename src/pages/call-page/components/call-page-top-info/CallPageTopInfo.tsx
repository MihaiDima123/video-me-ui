import {TextProps} from "@chakra-ui/react";
import SimpleLabel from "../../../../lib/text/SimpleLabel.tsx";

const CallPageTopInfo = ({ children }: TextProps) => {
    return (
        <SimpleLabel
            position={'absolute'}
            zIndex={100}
            fontSize={18}
            top={4}
            left={4}
        >
            {children}
        </SimpleLabel>
    )
}

export default CallPageTopInfo