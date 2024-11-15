<template>
	<div class="parent-container">
		<div class="content-container">
			<Tabs
			  @update:modelValue="state.index = $event"
			  :tabs="[
			    { label: 'Student Details' },
			    { label: 'Enrollment Details' },
			  ]"
			  v-model="state.index"
			>
			  <template #default="{ tab }">
				  <div class="">
					  <component :is="getComponent"></component>
				  </div>
			  </template>
			</Tabs>
		</div>
	</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { Tabs } from "frappe-ui";
import { reactive, computed } from "vue";
import StudentDetails from "../components/StudentDetails.vue";
import EnrollmentDetails from "../components/EnrollmentDetails.vue";

const route = useRoute();
const userId = route.params.userId;
const state = reactive({ index: 0 }); 

const getComponent = computed(() => {
  return state.index === 0 ? StudentDetails : EnrollmentDetails;
});
</script>

<style scoped>
.parent-container {
  background-color: #f5f7fa;
  padding: 20px;
height: 100vh; 
  border: 2px solid red;
}

.content-container {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  height: 100%

}
</style>
