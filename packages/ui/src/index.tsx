import { ReactNode } from 'react'
import { StyleSheet, StyleProp, TextStyle, Text, TextProps } from 'react-native'

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
 interface ParagraphProps extends TextProps {
    children?: ReactNode
    style?: StyleProp<TextStyle>
    [moreProps: number]: TextProps[]
}

export const Paragraph = ({ children, style, ...rest }: ParagraphProps) => (
    <Text {...rest} style={[styles.paragraph, style]}>
        {children}
    </Text>
)

export const Strong = ({ children, style, ...props }: ParagraphProps) => (
    <Text {...props} style={[styles.strong, style]}>
        {children}
    </Text>
)
