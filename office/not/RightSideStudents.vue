<script>
import { TextInput, FormControl, Tabs } from "frappe-ui";
import StudentInfo from "../../not/StudentDetails.vue";
import EnrollmentDetails from "../../not/EnrollmentDetails.vue";

export default {
	components: {
		Tabs,
		TextInput,
		FormControl,
		StudentInfo,
		EnrollmentDetails,
	},
	data() {
		return {
			state: {
				index: 0,
			},
			tabs: [
				{
					label: "Student Details",
					content: "student-details",
				},
				{
					label: "Enrollment Details",
					content: "enrollment-details",
				},
				{
					label: "Report Card",
					content: "Report Card",
				},
			],
		};
	},
};
</script>

<template>
	<Tabs v-model="state.index" :tabs="tabs">
		<template #default="{ tab }">
			<div class="p-5">
				<template v-if="tab.content === 'student-details'">
					<StudentInfo />
				</template>
				<template v-else-if="tab.content === 'enrollment-details'">
					<EnrollmentDetails />
				</template>
				<template v-else>
					{{ tab.content }}
				</template>
			</div>
		</template>
	</Tabs>
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

label {
	font-family: "Inter", sans-serif;
	color: #4a5568;
}
</style>
