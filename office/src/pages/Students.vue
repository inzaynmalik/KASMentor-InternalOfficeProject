<template>
	<div class="flex flex-col w-full">
		<div class="flex items-center justify-between h-10 px-4">
			<Story :layout="{ type: 'grid', width: 500 }">
				<Variant title="With onClick option">
					<Breadcrumbs
						:items="[
							{
								label: 'Batches',
								onClick: navigateToBatches, // Set onClick function for navigation
							},
							{
								label: batchName,
								// onClick: () => logEvent('onClick', 'Batch Detail'),
							},
						]"
					/>
				</Variant>
			</Story>
		</div>
		<hr style="border: none; border-top: 1px solid #efefef" />

		<div class="w-full bg-white px-4 mt-5">
			<!-- Display batch name dynamically -->
			<ListView
				:columns="[
					{
						label: 'Name',
						key: 'name',
						width: 3,
						getLabel: ({ row }) => row.name,
						prefix: ({ row }) => {
							return h(Avatar, {
								shape: 'circle',
								image: row.user_image,
								size: 'sm',
							});
						},
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
				:rows="batchData"
				:options="{
					getRowRoute: (row) => ({ name: 'User', params: { userId: row.id } }),
					selectable: true,
					showTooltip: true,
					resizeColumn: true,
				}"
				row-key="id"
			/>
		</div>
	</div>
</template>

<script setup>
import { Breadcrumbs } from "frappe-ui";
import { ref, h } from "vue";
import { ListView, Avatar } from "frappe-ui";
import { useRoute, useRouter } from "vue-router"; // Import useRouter

const route = useRoute();
const router = useRouter(); // Initialize router
const batchName = route.params.batchName; // Get batch name from route params

// Define a function to navigate to home/batches
const navigateToBatches = () => {
	router.push({ path: "/home/batches" });
};

// Sample data
const batchData = ref([
	{
		id: 1,
		name: "Student1",
		email: "john@doe.com",
		status: "Active",
		role: "Developer",
		user_image: "https://avatars.githubusercontent.com/u/499550",
	},
	{
		id: 2,
		name: "Student2",
		email: "jane@doe.com",
		status: "Inactive",
		role: "HR",
		user_image: "https://avatars.githubusercontent.com/u/499120",
	},
]);
</script>
