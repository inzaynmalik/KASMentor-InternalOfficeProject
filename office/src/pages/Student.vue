<script>
import RightSideStudents from "../components/RightSideStudents.vue";
import LeftSideStudents from "../components/LeftSideStudents.vue";

export default {
	components: {
		LeftSideStudents,
		RightSideStudents,
	},
};
</script>

<template>
	<div class="flex min-h-screen">
		<LeftSideStudents />
		<RightSideStudents />
	</div>
</template>
<style scoped>
.min-h-screen {
	min-height: 100vh;
}
</style>
