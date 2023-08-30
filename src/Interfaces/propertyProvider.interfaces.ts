import { TProperty, TPropertyRes } from "./property.interfaces";

export type TDefaultProviderProps = {
    children: React.ReactNode;
};

export type TProviderContext = {
    toggleRegisFlag: () => void;
    toggleEditFlag: () => void ;
    toggleConfirmDeleteFlag: () => void ;
    toggleRefreshFlag: () => void ;
    flagRegisForm: boolean;
    flagEditForm: boolean;
    flagConfirmDelete: boolean;
    flagRefreshFlag: boolean;
    
}