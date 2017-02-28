<template>
    <div class="out-block pt-max pb-max">
        <p class="mid-txt" v-text="txt"></p>
        <h2 v-text="h2"></h2>
        <a :href="btn.link" target="_blank" class="btn" v-text="btn.txt"></a>
    </div>
</template>
<script>
export default {
    props: ['txt', 'h2', 'btn']
}
</script>
<style lang="stylus">
</style>