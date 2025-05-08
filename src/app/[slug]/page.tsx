"use client";
import { useParams } from "next/navigation";
import { routeComponents } from "@/components/routes";

export default function Page() {
    const { slug } = useParams();
    console.log("slug", slug);

    if (!slug || Array.isArray(slug) || !routeComponents[slug]) {
        return <div className="content">
            <h1 className="text-3xl font-bold underline">404 - Not Found</h1>
            <p>The requested page does not exist.</p>
            <p>Please check the URL and try again.</p>
            <p>If you believe this is an error, please contact support.</p>
        </div>;
    }

    return routeComponents[slug];
}
