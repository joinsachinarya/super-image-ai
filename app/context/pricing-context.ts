import { createContext } from "react";

const PricingContext = createContext({
    pricing: [],    
    setPricing: (pricing: any) => {},
});

export default PricingContext;
    
