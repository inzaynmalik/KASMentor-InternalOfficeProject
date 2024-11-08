<script setup>
import { ref, h } from "vue"; // Import h from vue
import { ListView, Avatar } from "frappe-ui";

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

const getAvatar = (row) => {
	return h(Avatar, {
		shape: "circle",
		image: row.user_image,
		size: "sm",
	});
};
</script>

<template>
	<div class="flex flex-col w-full">
		<div class="flex items-center justify-between h-10 px-4">
			<h1 class="font-bold">Students</h1>
		</div>
		<hr style="border: none; border-top: 1px solid #efefef" />
		<div class="w-full bg-white px-4 mt-5">
			<ListView
				:columns="[
					{
						label: 'Name',
						key: 'name',
						width: 3,
						getLabel: ({ row }) => row.name,
						prefix: ({ row }) => getAvatar(row),
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
				:rows="studentData"
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
