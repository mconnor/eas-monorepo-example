import { ReactNode } from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'

const styles = StyleSheet.create({
    paragraph: {
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: 14,
        letterSpacing: 0.25,
        lineHeight: 20,
        marginVertical: 2
    },
    strong: {
        fontWeight: 'bold',
        color: 'rgb(0, 0, 238)'
    }
})
export interface ParagraphProps extends TextProps {
    children?: ReactNode
}

export function Paragraph({ children, style, ...props }: ParagraphProps) {
    return (
        <Text {...props} style={[styles.paragraph, style]}>
            {children}
        </Text>
    )
}

export type StrongProps = {
    children?: ReactNode
}

export function Strong({ children }: StrongProps): JSX.Element {
    return <Text>{children}</Text>
}
