"use client"

import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { GrFormNextLink } from "react-icons/gr";


const BreadCrumbs = () => {
    const breadPath = usePathname();
    const pathSegments = breadPath.split('/').filter(segment => segment !== '');

    return (
        <Breadcrumbs separator={<GrFormNextLink />}>
            {pathSegments.map((segment, index) => (
                <BreadcrumbItem key={index}>
                    <span className="text-base font-medium text-slate-400 capitalize">
                        {segment}
                    </span>
                </BreadcrumbItem>
            ))}
        </Breadcrumbs>
    );
};

export default BreadCrumbs;
