import {ParticipantDTO} from "../../../../api/types/Participant.ts";
import CallParticipant from "../../CallParticipant.tsx";

type CallParticipantListProps = {
    data?: ParticipantDTO[]
}

const CallParticipantList = (props: CallParticipantListProps) => {
    return props.data?.map(participant => (
        <CallParticipant
            data={participant}
        />
    ))

}

export default CallParticipantList