import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AccountForm from "@/modules/settings/components/account-form";
import PersonalForm from "@/modules/settings/components/personal-form";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import ImportForm from "../components/import-form";
interface SettingsTemplateProps {
    page: string
}


export const SettingsTemplate: React.FC<SettingsTemplateProps> = ({ page }) => {
    let pageForm;

    switch (page) {
        case 'account':
            pageForm = <AccountForm />;
            break;
        case 'personal':
            pageForm = <PersonalForm />;
            break;
        case 'import':
            pageForm = <ImportForm />;
            break;
        default:
            pageForm = <AccountForm />;
    }

    const isActiveLink = (linkPage: string) => {
        if (linkPage === "personal information") {
            linkPage = "personal"
        }
        console.log(linkPage)
        return page === linkPage;
    };


    return (
        <div className="mx-auto p-6">
            <div className="flex gap-12">
                <aside className="w-64">
                    <Avatar>
                        <AvatarImage alt="Vivian Lin" src="/placeholder.svg?height=64&width=64" />
                        <AvatarFallback>VL</AvatarFallback>
                    </Avatar>
                    <h2 className="mt-4 text-lg font-semibold">Vivian Lin</h2>
                    <p className="text-sm text-gray-500">linvivian61@gmail.com</p>
                    <nav className="mt-6">
                        <ul className="space-y-1">
                            {siteConfig.settingsNav.map(({ href, title }) => (
                                <li key={title}>
                                    <Link
                                        href={href!}
                                        className={`block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 text-gray-700 ${isActiveLink(title!.toLowerCase()) && 'bg-gray-100'
                                            }`}
                                    >
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
                {pageForm}
            </div>
        </div>
    )
}

export default SettingsTemplate
