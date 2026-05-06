import {mapValues, without}  from 'lodash-es'

export interface CommonComponentPropsInterface {
    actionType?: string,
    url?: string,
    isEditing: boolean,

    height?: string,
    width?: string,
    paddingLeft?: string,
    paddingTop?: string,
    paddingBottom?: string,
    paddingRight?: string,

    borderStyle?: string,
    borderColor?: string,
    borderWidth?: string,
    borderRadius?: string,

    boxShadow?: string,
    opacity?: string,
    cursor?: string,

    position?: string,
    top?: string,
    left?: string,
    right?: string,
}

export interface TextComponentPropsInterface extends CommonComponentPropsInterface {
    text?: string,
    fontSize?: string,
    fontWeight?: string,
    fontFamily?: string,
    fontStyle?: string,
    textDecoration?: string,
    lineHeight?: string,
    textAlign?: string,
    color?: string,
    backgroundColor?: string,
}


export const commonDefaultProps: CommonComponentPropsInterface = {
    actionType: '',
    url: '',
    isEditing: false,

    height: '',
    width: '',
    paddingLeft: '0px',
    paddingTop: '0px',
    paddingBottom: '0px',
    paddingRight: '0px',

    borderStyle: 'none',
    borderColor: '#000',
    borderWidth: '0px',
    borderRadius: '0px',

    boxShadow: '0 0 0 #00000033',
    opacity: '1',
    cursor: '',

    position: 'relative',
    top: '0',
    left: '0',
    right: '0',
}

export const textDefaultProps: TextComponentPropsInterface = {
    text: '正文内容1122',
    fontSize: '16px',
    fontWeight: 'normal',
    fontFamily: '',
    fontStyle: 'normal',
    textDecoration: 'none',
    lineHeight: '24px',
    textAlign: 'left',
    color: '#000',
    backgroundColor: '',
    ...commonDefaultProps
}

export interface ImageComponentPropsInterface extends TextComponentPropsInterface {
    src: string
}

export const imageDefaultProps: ImageComponentPropsInterface = {
    src: '',
    ...commonDefaultProps
}

export const transformToComponentProps = <T extends Partial<TextComponentPropsInterface>>(props: T) => {
    return mapValues(props, (item: unknown) => {
        let type;
        if (typeof item === 'string') {
            type = String;
        } else if (typeof item === 'number') {
            type = Number;
        } else if (typeof item === 'boolean') {
            type = Boolean;
        } else {
            type = String;
        }
        return {
            type,
            default: item
        }
    })
}

export const textStypePropNames = without(Object.keys(textDefaultProps), 'actionType', 'url', 'text')
export const imageStylePropNames = without(Object.keys(imageDefaultProps), 'actionType', 'src', 'url', 'text')