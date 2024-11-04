<script>
import { TextInput, FormControl } from "frappe-ui";
import { ref } from "vue";

export default {
	components: {
		TextInput,
		FormControl, // Register TextInput component
	},
	data() {
		return {};
	},
};
</script>

<template>
	<div class="profile-container flex items-center p-4 border-b border-gray-300">
		<div class="flex flex-row mr-auto">
			<div class="avatar w-16 h-16">
				<img class="rounded-full" src="@/assets/images/logo.png" alt="User Avatar" />
			</div>

			<div class="ml-4 flex-1">
				<h2 class="text-xl font-semibold">
					Arsalan Patel, <span class="italic">ID-200</span>
				</h2>
				<p class="text-sm text-gray-500">Batch 1 - KAS</p>
				<p class="text-sm text-gray-400">arsalanpatel71@gmail.com</p>
			</div>
		</div>

		<div class="flex space-x-4">
			<div class="flex items-center space-x-1">
				<span class="text-teal-500 font-semibold">Student Details</span>
			</div>

			<div class="flex items-center space-x-1">
				<span class="text-red-500 font-semibold">Enrollment Data</span>
			</div>

			<div class="flex items-center space-x-1">
				<span class="text-yellow-500 font-semibold">Report Data</span>
			</div>
		</div>
	</div>

	<!-- <div class="form-parent">
		<div class="form-section p-4 border border-red-600">
			<div class="grid grid-cols-3 gap-4">
				<div class="p-2">
					<FormControl
						:type="'text'"
						:ref_for="true"
						size="sm"
						variant="subtle"
						placeholder="First Name"
						:disabled="false"
						label="First Name"
					/>
				</div>

				<div class="p-2">
					<FormControl
						:type="'text'"
						:ref_for="true"
						size="sm"
						variant="subtle"
						placeholder="Last Name"
						:disabled="false"
						label="Last Name"
					/>
				</div>
				<div class="p-2">
					<FormControl
						:type="'text'"
						:ref_for="true"
						size="sm"
						variant="subtle"
						placeholder="Gender"
						:disabled="false"
						label="Gender"
					/>
				</div>
			</div>

			<div class="grid grid-cols-3 gap-4 mt-4">
				<div class="p-2">
					<FormControl
						:type="'text'"
						:ref_for="true"
						size="sm"
						variant="subtle"
						placeholder="District"
						:disabled="false"
						label="District"
					/>
				</div>

				<div class="p-2">
					<FormControl
						:type="'text'"
						:ref_for="true"
						size="sm"
						variant="subtle"
						placeholder="Blood Group"
						:disabled="false"
						label="Blood Group"
					/>
				</div>
				<div class="p-2">
					<FormControl
						:type="'date'"
						:ref_for="true"
						size="sm"
						variant="subtle"
						placeholder="Placeholder"
						:disabled="false"
						label="Date of Birth"
						v-model="inputValue"
					/>
				</div>
			</div>
		</div>
	</div> -->
</template>

<style scoped>
.profile-container {
	background-color: white;
	border-radius: 8px;
}

.avatar img {
	object-fit: cover;
}

.profile-container .text-xl {
	font-family: "Inter", sans-serif;
}

.profile-container .text-sm {
	font-family: "Inter", sans-serif;
}

.form-section {
	background-color: #f9f9f9;
	border-radius: 8px;
	padding: 16px;
}

.form-parent {
}

label {
	font-family: "Inter", sans-serif;
	color: #4a5568;
}
</style>
