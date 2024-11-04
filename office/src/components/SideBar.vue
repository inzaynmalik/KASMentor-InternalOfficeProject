<script setup>
import { ref } from "vue";
import * as feather from "feather-icons";
import UserDropdown from "@/components/UserDropdown.vue";
import LeadsIcon from "@/assets/icons/LeadsIcon.vue";
import ContactIcon from "@/assets/icons/ContactIcon.vue";

const SidebarItem = {
	props: ["icon", "text", "size"],
	mounted() {
		feather.replace();
		const iconElement = this.$el.querySelector("[data-feather]");
		if (iconElement && this.size) {
			iconElement.setAttribute("width", this.size);
			iconElement.setAttribute("height", this.size);
		}
	},
	template: `
    <div class="sidebar-item flex items-center space-x-2">
      <i :data-feather="icon" class="sidebar-icon"></i>
      <span class="sidebar-text">{{ text }}</span>
    </div>
  `,
};
</script>

<template>
	<div class="w-1/5 bg-gray-200 min-h-screen flex flex-col">
		<div>
			<UserDropdown class="p-2 mb-6" />
		</div>
		<div class="flex justify-center flex-grow">
			<ul class="space-y-3">
				<li>
					<router-link
						class="text-sm cursor-pointer flex items-center sidebartext py-1.5 w-52"
						to="/home/students"
						active-class="active-link"
					>
						<ContactIcon class="sidebar-icon mr-3" />
						<span class="sidebar-text">Students</span>
					</router-link>
				</li>
				<li>
					<router-link
						class="text-sm cursor-pointer flex items-center sidebartext py-1.5 w-52"
						to="/home/batches"
						active-class="active-link"
					>
						<LeadsIcon class="sidebar-icon mr-3" />
						<span class="sidebar-text">Batches</span>
					</router-link>
				</li>
			</ul>
		</div>
		<!-- Collapse Button -->
		<div class="p-2">
			<button
				class="collapse-button w-full py-1.5 hover:bg-gray-100 transition duration-300"
			>
				Collapse
			</button>
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
.collapse-button {
	color: #6d6d6d;
	border-radius: 0.5rem; /* Slightly rounded corners */
	text-align: center; /* Center text */
}

.min-h-screen {
	min-height: 100vh;
}
.sidebar-item {
	display: flex;
	align-items: center;
}
.space-x-2 > *:not(:last-child) {
	margin-right: 0.5rem;
}

.active-link {
	background-color: #ffffff;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
	transition:
		background-color 0.3s,
		color 0.3s;
}

.active-link .sidebar-text {
	color: #6d6d6d;
}

.active-link .sidebar-icon {
	color: #6d6d6d;
}
.sidebartext {
	color: #6d6d6d;
	border-radius: 10px;
	padding-left: 1em;
}
</style>
