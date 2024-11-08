<template>
	<Dropdown :options="dropdownOptions" v-bind="$attrs" class="dropdown">
		<template #default>
			<button
				class="flex h-12 items-center rounded-md py-2 duration-300 ease-in-out"
				:class="isCollapsed ? 'w-auto px-0' : 'w-52 px-2 hover:bg-gray-200'"
			>
				<img :src="logo" alt="Logo" class="size-8 flex-shrink-0 rounded" />

				<!-- Display only when sidebar is not collapsed -->
				<div
					v-if="!isCollapsed"
					class="flex flex-1 flex-col text-left duration-300 ease-in-out ml-2 w-auto opacity-100"
				>
					<div class="text-base font-medium leading-none text-gray-900">KAS Mentor</div>
					<div class="mt-1 text-sm leading-none text-gray-700">Arsalan Patel</div>
				</div>

				<!-- Display only when sidebar is not collapsed -->
				<div v-if="!isCollapsed" class="duration-300 ease-in-out ml-2 w-auto opacity-100">
					<img src="@/assets/icons/arrow-down.svg" alt="KAS Mentor Logo" />
				</div>
			</button>
		</template>
	</Dropdown>
</template>

<script setup>
import { ref } from "vue";
import logo from "../assets/images/logo.png";

const props = defineProps({
	isCollapsed: {
		type: Boolean,
		default: false,
	},
});

let dropdownOptions = ref([
	{
		group: "Manage",
		hideLabel: true,
		items: [
			{ icon: "life-buoy", label: "Support" },
			{ icon: "book-open", label: "Docs" },
		],
	},
	{
		group: "Others",
		hideLabel: true,
		items: [
			{ icon: "settings", label: "Settings" },
			{ icon: "log-out", label: "Log-Out" },
		],
	},
]);
</script>
