import { SettingsTemplate } from "@/modules/settings/templates";

interface SettingsPageProps {
    params: {
        page: string
    }
}

export const SettingsPage: React.FC<SettingsPageProps> = ({ params }) => {
    const page = params.page;

    return (<>

        <SettingsTemplate page={page} />

    </>)
}

export default SettingsPage
