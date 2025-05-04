import { useEffect, useState } from "react";
import PricingContext from "../context/pricing-context";

const usePricing = () => {
    const [pricing, setPricing] = useState([]);

    const fetchPricing = async () => {
        const response = await fetch("/api/pricing");
        const data = await response.json();
        setPricing(data);
    };

    useEffect(() => {
        fetchPricing();
    }, []);

    return { pricing, fetchPricing };
};

export default usePricing;
