import { TProperty, TPropertyRes } from "./property.interfaces";

export type TDefaultProviderProps = {
    children: React.ReactNode;
};

export type TProviderContext = {
    toggleRegisFlag: () => void;
    toggleEditFlag: () => void ;
    flagRegisForm: boolean;
    flagEditForm: boolean;
    createProperty: (formData: TProperty) => Promise<void>;
    getProperties: () => Promise<TPropertyRes[] | void>;
}