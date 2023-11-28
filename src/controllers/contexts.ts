import { createContext } from "react";
import { CustomerModel } from "../models/CustomerModel";

export const CustomerContext = createContext(new CustomerModel());
