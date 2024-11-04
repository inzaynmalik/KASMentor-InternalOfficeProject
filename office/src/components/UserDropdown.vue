<template>
	<Dropdown :options="dropdownOptions" v-bind="$attrs" class="dropdown">
		<template v-slot="{ open }">
			<button
				class="flex h-12 items-center rounded-md py-2 duration-300 ease-in-out"
				:class="
					isCollapsed
						? 'w-auto px-0'
						: open
							? 'w-52 bg-white px-2 shadow-sm'
							: 'w-52 px-2 hover:bg-gray-200'
				"
			>
				<img :src="logo" alt="Logo" class="size-8 flex-shrink-0 rounded" />
				<div
					class="flex flex-1 flex-col text-left duration-300 ease-in-out"
					:class="
						isCollapsed
							? 'ml-0 w-0 overflow-hidden opacity-0'
							: 'ml-2 w-auto opacity-100'
					"
				>
					<div class="text-base font-medium leading-none text-gray-900">KAS Mentor</div>
					<div class="mt-1 text-sm leading-none text-gray-700">Arsalan Patel</div>
				</div>
				<div
					class="duration-300 ease-in-out"
					:class="
						isCollapsed
							? 'ml-0 w-0 overflow-hidden opacity-0'
							: 'ml-2 w-auto opacity-100'
					"
				>
					<img src="@/assets/icons/arrow-down.svg" alt="KAS Mentor Logo" />
				</div>
			</button>
		</template>
	</Dropdown>
	<SettingsModal v-if="showSettingsModal" v-model="showSettingsModal" />
</template>

<script setup>
import { Dropdown } from "frappe-ui";
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
			// {
			// 	icon: "life-buoy",
			// 	label: "Manage",
			// },
			{
				icon: "life-buoy",
				label: "Support",
			},
			{
				icon: "book-open",
				label: "Docs",
			},
		],
	},
	{
		group: "Others",
		hideLabel: true,
		items: [
			{
				icon: "settings",
				label: "settings",
			},
			{
				icon: "log-out",
				label: "Log-Out",
			},
		],
	},
]);
</script>

<style>
.dropdown {
	/* border: 2px solid red; */
	width: 100%;
}
</style>
