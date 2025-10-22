"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Calcom() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "30min" });
            cal("ui", { hideEventTypeDetails: false, layout: "month_view", theme: "light" });
        })();
    }, []);
    
    return (
        <Cal
            namespace="30min"
            calLink="quantinsider/30min"
            style={{
                width: "100%",
                height: "100%",
                minHeight: "560px",
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                borderRadius: "8px",
            }}
            config={{ layout: "month_view" }}
        />
    );
}

