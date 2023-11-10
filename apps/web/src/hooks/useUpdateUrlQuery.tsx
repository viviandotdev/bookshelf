

import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";
import qs from "query-string";
import { useSession } from "next-auth/react";

export function useUpdateUrlQuery(additionalQuery: {}) {
    const router = useRouter();
    const { data: session, status } = useSession();
    const params = useSearchParams();
    let currentQuery = {};
    if (params) {
        currentQuery = qs.parse(params.toString());
    }
    if (session) {
        const url = qs.stringifyUrl(
            {
                url: `/${session!.user.name}/books`,
                query: {
                    ...currentQuery,
                    ...additionalQuery
                },
            },
            { skipNull: true }
        );
        router.push(url);
    }

    return { status }

}
