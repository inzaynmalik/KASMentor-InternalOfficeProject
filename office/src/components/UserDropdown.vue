<template>
	<Dropdown :options="dropdownOptions" v-bind="$attrs" class="dropdown">
		<template #default>
			<button
				class="flex h-12 items-center rounded-md py-2 duration-300 ease-in-out relative"
				:class="isCollapsed ? 'w-10 justify-center' : 'w-52 px-2 hover:bg-gray-200'"
			>
				<img
					:src="logo"
					alt="Logo"
					class="rounded-full"
					:class="isCollapsed ? 'w-10 h-10' : 'w-8 h-8'"
				/>
				<div
					v-if="!isCollapsed"
					class="flex flex-1 flex-col text-left duration-300 ease-in-out ml-2 w-auto opacity-100"
				>
					<div class="text-base font-medium leading-none text-gray-900">KAS Mentor</div>
					<div class="mt-1 text-sm leading-none text-gray-700">Arsalan Patel</div>
				</div>
				<img
					src="@/assets/icons/arrow-down.svg"
					alt="Arrow"
					class="absolute right-2 w-4 h-4"
					v-if="!isCollapsed"
				/>
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
