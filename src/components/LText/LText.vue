<template>
  <component :is="tag" :style="styleProps" @click="handleClick" class="l-text-component">
    {{ text }}
  </component>
</template>

<script setup lang="ts">
import { textDefaultProps, transformToComponentProps, textStypePropNames } from '../../defaultProps'
import useComponentCommon from '../../hooks/useComponentCommon'
import {type TextComponentPropsInterface} from '../../defaultProps'

const props = defineProps({
  tag: {
    type: String,
    default: 'div'
  },
  ...transformToComponentProps(textDefaultProps)
})
const myprops = props as TextComponentPropsInterface
const { styleProps, handleClick } = useComponentCommon(myprops, textStypePropNames)

</script>