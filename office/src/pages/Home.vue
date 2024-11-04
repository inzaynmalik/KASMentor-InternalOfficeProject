<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import SideBar from "../components/SideBar.vue";
import AllBatches from "@/components/AllBatches.vue";
import AllStudents from "@/components/AllStudents.vue";
const selectedBatchData = ref(null);
const route = useRoute(); // Get the current route

const handleBatchSelection = (data) => {
	selectedBatchData.value = data;
};

const isBatchesRoute = computed(() => route.path === "/home/batches");
const isStudentsRoute = computed(() => route.path === "/home/students");
</script>

<template>
	<div class="flex min-h-screen">
		<SideBar @batch-selected="handleBatchSelection" />
		<AllBatches v-if="isBatchesRoute" :batchData="selectedBatchData" />
		<AllStudents v-if="isStudentsRoute" :batchData="selectedBatchData" />
	</div>
</template>

<style scoped>
@font-face {
	font-family: "Inter";
	src:
		url("/fonts/Inter-Regular.woff2") format("woff2"),
		url("/fonts/Inter-Regular.woff") format("woff");
	font-weight: 400;
	font-style: normal;
}
body {
	font-family: "Inter", sans-serif;
}
.min-h-screen {
	min-height: 100vh;
}
</style>
