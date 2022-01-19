import { ReactNode } from 'react';
import { TextProps } from 'react-native';
export interface ParagraphProps extends TextProps {
    children?: ReactNode;
}
export declare function Paragraph({ children, style, ...props }: ParagraphProps): JSX.Element;
export declare type StrongProps = {
    children?: ReactNode;
};
export declare function Strong({ children }: StrongProps): JSX.Element;
