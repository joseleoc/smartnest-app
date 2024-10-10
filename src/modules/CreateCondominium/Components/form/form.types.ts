
export type Inputs = {
    name: string;
    address: string;
    description: string;
    avatar: string;
};
export type CreateCondominiumFormProps = {
    createCondominium: (data: Inputs) => Promise<void>;
    loading: boolean;
}