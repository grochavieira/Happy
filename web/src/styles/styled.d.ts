import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string;
            secondary: string;
            gradientText: string;
            title: string;
            text: string;
            background: string;
        }
    }
}
