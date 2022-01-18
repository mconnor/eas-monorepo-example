import { ReactNode } from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'

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

export interface StrongProps extends TextProps {
    children?: ReactNode
}

export const Strong = ({ children, style, ...props }: StrongProps) => (
    <Text {...props} style={[styles.strong, style]}>
        {children}
    </Text>
)

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
