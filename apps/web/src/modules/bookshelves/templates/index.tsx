/**
 * v0 by Vercel.
 * @see https://v0.dev/t/duVXIK5vuRu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import Sidebar from "../components/sidebar"

export default function Component() {
    return (
        <>
            <Sidebar />
            <div className="flex-1 overflow-hidden">
                <ul className="border-l w-full border-gray-200 pl-4 px-14">
                    <div>test</div>
                </ul>
                {/* <main className="flex-1 overflow-auto p-6">

                </main> */}
            </div>
        </>
    )
}
