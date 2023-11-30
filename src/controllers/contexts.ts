import { createContext } from "react";
import { CustomerModel } from "../models/CustomerModel";
import { HostModel } from "../models/HostModel";

export const CustomerContext = createContext(new CustomerModel());
export const HostContext = createContext(new HostModel());
