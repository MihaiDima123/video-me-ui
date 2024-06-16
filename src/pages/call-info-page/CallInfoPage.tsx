import PageLayout from "../../lib/layout/page-layout/PageLayout.tsx";
import PreCallOverview from "../../components/pre-call-overview/PreCallOverview.tsx";

const CallInfoPage = () => {

    return (
        <PageLayout
            alignItems={'center'}
            justifyContent={'center'}
        >
            <PreCallOverview />
        </PageLayout>
    )
}

export default CallInfoPage