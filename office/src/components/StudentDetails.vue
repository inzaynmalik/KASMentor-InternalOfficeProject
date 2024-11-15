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
		<div class="form-section ">
			<div class="grid grid-cols-3 gap-4 mt-4">
				<div class="">
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

				<div class="">
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
				<div class="">
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
				<div class="">
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

				<div class="">
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
				<div class="">
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
	/* background-color:; */
	border-radius: 8px;
	padding: 16px;
}

label {
	font-family: "Inter", sans-serif;
	color: red;
}
</style>
