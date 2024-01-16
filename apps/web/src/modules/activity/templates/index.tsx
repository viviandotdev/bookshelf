import React from 'react'

interface AcitvityTemplateProps {
    auditLogs: any;

}

export const AcitvityTemplate: React.FC<AcitvityTemplateProps> = ({ auditLogs }) => {
    console.log(auditLogs)

    return (
        <div>
            <div>
                Activity page
            </div>

        </div>
    );
}
export default AcitvityTemplate
