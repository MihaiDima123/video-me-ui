import {useParams} from "react-router-dom";
import {Grid} from "@chakra-ui/react";
import CallParticipantList
    from "../../components/call-participant/components/call-participant-list/CallParticipantList.tsx";
import {useTranslation} from "react-i18next";
import React from "react";
import CallPageTopInfo from "./components/call-page-top-info/CallPageTopInfo.tsx";

const dummyParticipants = [
    {
        name: 'John Doe'
    },
    {
        name: 'Doctor of John Doe'
    }
]

const CallPageWrapper = ({children}: {children: React.ReactNode}) => (
    <Grid
        position={'relative'}
        padding={20}
        gap={6}
        templateColumns='repeat(3, 600px)'
        alignItems={'center'}
        justifyContent={'center'}
    >
        {children}
    </Grid>
)

const CallPage = () => {
    const {id} = useParams()
    const {t} = useTranslation()

    return (
        <CallPageWrapper>
            <CallPageTopInfo>
                {t("on-call.call-id")}: {id}
            </CallPageTopInfo>
            <CallParticipantList
                data={dummyParticipants}
            />
        </CallPageWrapper>
    )
}

export default CallPage