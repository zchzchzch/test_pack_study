import { pick } from 'lodash-es'
import { computed, type StyleValue } from 'vue'
import {type TextComponentPropsInterface} from '../defaultProps'

const useComponentCommon = <T extends Partial<TextComponentPropsInterface>>(props: T, picks: string[]) => {
    const styleProps = computed<StyleValue>(() => pick(props, picks) as StyleValue)
    const handleClick = () => {
        if(props.actionType === 'url' && !props.isEditing && props.url) {
            window.location.href = props.url
            //window.open(props.url)
        }
    }

    return {
        styleProps,
        handleClick
    }
}

export default useComponentCommon  