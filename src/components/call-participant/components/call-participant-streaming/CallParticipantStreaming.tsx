import {ParticipantDTO} from "../../../../api/types/Participant.ts";

const videoStyles = {
}

type CallParticipantStreamingProps = {
    data?: ParticipantDTO
}

const CallParticipantStreaming = (props: CallParticipantStreamingProps) => {

    return (
        <video
            aria-label={props.data?.name}
            style={videoStyles}
            autoPlay
        >
            <source
                type={'video/mp4'}
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            />
        </video>
    )
}

export default CallParticipantStreaming