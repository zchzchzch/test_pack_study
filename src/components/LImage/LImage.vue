<template>
    <img :src="String(src)" :style="styleProps" @click.prevent="handleClick" />
</template>

<script setup lang="ts"> 
import { imageDefaultProps, transformToComponentProps, imageStylePropNames } from '../../defaultProps'
import useComponentCommon from '../../hooks/useComponentCommon'
import {type ImageComponentPropsInterface} from '../../defaultProps'


const props = defineProps({
  ...transformToComponentProps(imageDefaultProps)
})
const myprops = props as ImageComponentPropsInterface
// const { src } = props as ImageComponentPropsInterface
const { styleProps, handleClick } = useComponentCommon(myprops, imageStylePropNames)

</script>