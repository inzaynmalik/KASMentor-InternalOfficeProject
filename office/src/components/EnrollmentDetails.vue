<script>
import { TextInput, FormControl } from "frappe-ui";
import { ref } from "vue";

export default {
	components: {
		TextInput,
		FormControl,
	},
	data() {
		return {};
	},
};
</script>

<template>
	<div class="form-parent">
		<div class="form-section p-4 border border-red-600">
			<div class="grid grid-cols-3 gap-4">
				<div class="p-2">
					<FormControl
						:type="'text'"
						:ref_for="true"
						size="sm"
						variant="subtle"
						placeholder=" 25-09-2024 12:56:50"
						:disabled="false"
						label="Created Date & Time"
					/>
				</div>

				<div class="p-2">
					<FormControl
						:type="'text'"
						:ref_for="true"
						size="sm"
						variant="subtle"
						placeholder="STD-ID-00002"
						:disabled="false"
						label="Student ID"
					/>
				</div>
				<div class="p-2">
					<FormControl
						:type="'text'"
						:ref_for="true"
						size="sm"
						variant="subtle"
						placeholder="STD-ADM-0942-00002"
						:disabled="false"
						label="Admission ID"
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
						placeholder="Test"
						:disabled="false"
						label="Product Type"
					/>
				</div>
				<div class="p-2">
					<FormControl
						:type="'text'"
						:ref_for="true"
						size="sm"
						variant="subtle"
						placeholder="App"
						:disabled="false"
						label="Product Channel"
					/>
				</div>
				<div class="p-2">
					<FormControl
						:type="'text'"
						:ref_for="true"
						size="sm"
						variant="subtle"
						placeholder="Single Payment"
						:disabled="false"
						label="Payment Type"
					/>
				</div>
			</div>
		</div>
	</div>
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
