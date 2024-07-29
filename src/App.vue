<script lang="ts" name="App" setup>
import { RouterView } from 'vue-router'
import LoginPage from '@/component/LoginPage.vue'
</script>
<template>
	<div class="bilibili">
		<LoginPage />
		<RouterView></RouterView>
	</div>
</template>

<style scoped></style>
