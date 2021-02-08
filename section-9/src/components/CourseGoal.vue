<template>
    <ul>
        <li v-for="goal in goals" :key="goal">{{ goal }}
            <slot></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            goals : ['Finish the Goal' , 'Learn Vue!'],
        };
    },
}
</script>