"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("defc1eec-c05a-4abc-a245-9e2f4ea4fd6e");
    }, []);

    return null;
};
 