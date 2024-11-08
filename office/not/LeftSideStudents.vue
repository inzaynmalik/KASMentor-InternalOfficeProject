<script setup>
import { ref } from "vue";

const batches = ref([
	{ id: 1, name: "Batch 1", data: "batch1" },
	{ id: 2, name: "Batch 2", data: "batch2" },
]);

const emit = defineEmits(["batch-selected"]);

const batchData = {
	batch1: [
		{
			id: 1,
			name: "John Doe",
			email: "john@doe.com",
			status: "Active",
			role: "Developer",
			user_image: "https://avatars.githubusercontent.com/u/499550",
		},
		{
			id: 2,
			name: "Jane Doe",
			email: "jane@doe.com",
			status: "Inactive",
			role: "HR",
			user_image: "https://avatars.githubusercontent.com/u/499120",
		},
	],
	batch2: [
		{
			id: 1,
			name: "Arsalan Patel",
			email: "arsalan@doe.com",
			status: "Active",
			role: "Developer",
			user_image: "https://avatars.githubusercontent.com/u/499550",
		},
		{
			id: 2,
			name: "Rino Doe",
			email: "rino@doe.com",
			status: "Inactive",
			role: "HR",
			user_image: "https://avatars.githubusercontent.com/u/499120",
		},
	],
};

const emitSelectedBatch = (batch) => {
	emit("batch-selected", batchData[batch.data]);
};
</script>

<template>
	<div class="w-1/8 bg-gray-200 p-4 min-h-screen">
		<h2 class="text-lg font-bold mb-4">KAS Mentor Batches</h2>
		<ul class="space-y-2">
			<li v-for="batch in batches" :key="batch.id">
				<a
					@click.prevent="emitSelectedBatch(batch)"
					class="text-sm hover:text-blue-500 cursor-pointer"
				>
					{{ batch.name }}
				</a>
			</li>
		</ul>
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
