<template>
	<div
		:class="[
			'sidebar',
			isCollapsed ? 'w-16' : 'w-1/8',
			'min-h-screen',
			'bg-gray-200',
			'flex',
			'flex-col',
		]"
	>
		<div
			:class="[
				'mt-3',
				'flex',
				isCollapsed ? 'justify-center' : 'justify-start',
				
			]"
		>
			<UserDropdown :isCollapsed="isCollapsed" />
		</div>
		<div class="flex justify-center flex-grow mt-10">
			<ul class="space-y-3">
				<li>
					<router-link
						class="text-sm cursor-pointer flex items-center sidebartext py-1.5"
						:class="isCollapsed ? 'w-16 justify-center' : 'w-52'"
						to="/home/students"
						active-class="active-link"
					>
						<ContactIcon class="sidebar-icon mr-3" />
						<span v-if="!isCollapsed" class="sidebar-text">Students</span>
					</router-link>
				</li>
				<li>
					<router-link
						class="text-sm cursor-pointer flex items-center sidebartext py-1.5"
						:class="isCollapsed ? 'w-16 justify-center' : 'w-52'"
						to="/home/batches"
						active-class="active-link"
					>
						<LeadsIcon class="sidebar-icon mr-3" />
						<span v-if="!isCollapsed" class="sidebar-text">Batches</span>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="p-2">
			<button
				@click="toggleCollapse"
				class="collapse-button w-full py-1.5 hover:bg-gray-100 transition duration-300"
			>
				Collapse
			</button>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import UserDropdown from "@/components/UserDropdown.vue";
import ContactIcon from "@/assets/icons/ContactIcon.vue";
import LeadsIcon from "@/assets/icons/LeadsIcon.vue";

const isCollapsed = ref(false);

const toggleCollapse = () => {
	isCollapsed.value = !isCollapsed.value;
};
</script>

<style scoped>
.sidebar {
	transition: width 0.6s;
}

.collapse-button {
	color: #6d6d6d;
	border-radius: 0.5rem;
	text-align: center;
}

.min-h-screen {
	min-height: 100vh;
}

.sidebartext {
	color: #6d6d6d;
	border-radius: 2em;
	padding-left: 1em;
	width: 10vw;
}

.active-link {
	background-color: #ffffff;
	border-radius: 10px;
	color: #333333;
	width: 100%;
}

.active-link:hover {
	background-color: #f5f5f5;
}
</style>
