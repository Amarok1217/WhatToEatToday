<template>
    <el-container>
        <el-aside width="200px">
            <Menu />
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import Menu from '@/components/menu/Menu.vue'
</script>
<style lang="scss" scoped>
@import "./Main.scss";
</style>