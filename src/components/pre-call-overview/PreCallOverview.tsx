import PrimaryButton from "../../lib/buttons/PrimaryButton.tsx";
import GrayBox from "../../lib/layout/box-element/GrayBox.tsx";
import {useTranslation} from "react-i18next";

const PreCallOverview=  () => {
    const { t } = useTranslation()

    return (
        <GrayBox>
            <PrimaryButton>
                {t('actions.call.join')}
            </PrimaryButton>
        </GrayBox>
    )
}

export default PreCallOverview