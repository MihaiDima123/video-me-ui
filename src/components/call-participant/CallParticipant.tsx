import {Card} from "@chakra-ui/react";
import CallParticipantName from "./components/call-participant-name/CallParticipantName.tsx";
import CallParticipantStreaming from "./components/call-participant-streaming/CallParticipantStreaming.tsx";
import type {ParticipantDTO} from "../../api/types/Participant.ts";

type CallParticipantProps = {
    data?: ParticipantDTO
}

const CallParticipant = (props: CallParticipantProps) => {
    return (
        <Card
            display={'flex'}
            position={'relative'}
            rounded={6}
            overflow={'hidden'}
        >
            <CallParticipantStreaming
                data={props.data}
            />
            <CallParticipantName
                position={'absolute'}
                bottom={2}
                left={4}
                fontSize={14}
                color={'lightgray'}
            >
                {props.data?.name}
            </CallParticipantName>
        </Card>
    )
}

export default CallParticipant