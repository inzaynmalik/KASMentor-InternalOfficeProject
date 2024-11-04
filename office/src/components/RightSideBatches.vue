<script setup>
import { ref, computed, h } from "vue"; // Import h from vue
import { useRoute } from "vue-router";
import { ListView, Avatar } from "frappe-ui";

// Route object
const route = useRoute();

// Data for batches and students
const batchData = ref([
	{
		id: 1,
		name: "Batches",
		email: "john@doe.com",
		status: "Active",
		role: "Developer",
		user_image: "https://avatars.githubusercontent.com/u/499550",
	},
	{
		id: 2,
		name: "Batches 2",
		email: "jane@doe.com",
		status: "Inactive",
		role: "HR",
		user_image: "https://avatars.githubusercontent.com/u/499120",
	},
]);

const studentData = ref([
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
]);

// Determine which data to display based on the current route
const listViewData = computed(() => {
	if (route.path.includes("batches")) {
		return batchData.value;
	} else if (route.path.includes("students")) {
		return studentData.value;
	} else {
		return [];
	}
});

// Prefix function to return avatar
const getAvatar = (row) => {
	return h(Avatar, {
		shape: "circle",
		image: row.user_image,
		size: "sm",
	});
};
</script>

<template>
	<div class="w-2/3 bg-white p-4">
		<ListView
			v-if="listViewData.length > 0"
			:columns="[
				{
					label: 'Name',
					key: 'name',
					width: 3,
					getLabel: ({ row }) => row.name,
					prefix: ({ row }) => getAvatar(row), // Use the function from the script
				},
				{
					label: 'Email',
					key: 'email',
					width: '200px',
				},
				{
					label: 'Role',
					key: 'role',
				},
				{
					label: 'Status',
					key: 'status',
				},
			]"
			:rows="listViewData"
			:options="{
				getRowRoute: (row) => ({ name: 'User', params: { userId: row.id } }),
				selectable: true,
				showTooltip: true,
				resizeColumn: true,
			}"
			row-key="id"
		/>
		<div v-else>
			<p>Select a batch or student from the Left Panel</p>
		</div>
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
</style>
