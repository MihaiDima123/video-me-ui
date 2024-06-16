import SimpleLabel from "../../../../lib/text/SimpleLabel.tsx";
import getTextOrDefaultMissing from "../../../../core/utils/get-text-or-default-missing.ts";
import {TextProps} from "@chakra-ui/react";

interface CallParticipantNameProps extends TextProps {
    children?: string
}

const CallParticipantLabel = ({children, ...rest}: CallParticipantNameProps) => (
    <SimpleLabel
        {...rest}
    >
        {getTextOrDefaultMissing(children)}
    </SimpleLabel>
)

export default CallParticipantLabel