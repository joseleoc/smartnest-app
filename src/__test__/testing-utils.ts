import GeneralContextProvider from "@/providers/generalContextProvider";
import { RenderOptions, render as rtlRender } from "@testing-library/react-native";
import { ReactElement } from "react";

function render<T>(component: ReactElement<T>, options?: RenderOptions) {
    return rtlRender(component, { wrapper: GeneralContextProvider, ...options });
}

export * from "@testing-library/react-native";

export { render }
