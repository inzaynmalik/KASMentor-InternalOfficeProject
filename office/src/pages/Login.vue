<script setup>
import { TextInput, Button } from "frappe-ui";
import { ref } from "vue";

const email = ref("");
const password = ref("");
</script>

<template>
	<div class="min-h-screen flex items-center justify-center bg-gray-100">
		<div class="w-full max-w-md bg-white p-8 shadow-md rounded-md">
			<div class="flex justify-center mb-6">
				<img src="@/assets/images/logo.png" alt="KAS Mentor Logo" class="h-11 mb-5" />
			</div>
			<h2 class="text-center text-2xl font-bold mb-6">Login to KAS Mentor</h2>

			<div class="mb-4">
				<div class="mb-4">
					<TextInput
						type="text"
						size="sm"
						variant="subtle"
						placeholder="jane@example.com"
						modelValue="email"
						class="w-full"
						:disabled="false"
					>
						<template #prefix>
							<img src="@/assets/icons/mail.svg" alt="KAS Mentor Logo" />
						</template>
					</TextInput>
				</div>
			</div>

			<div class="mb-4">
				<TextInput
					type="password"
					size="sm"
					variant="subtle"
					placeholder="••••••••"
					modelValue="password"
					class="w-full"
					:disabled="false"
				>
					<template #prefix>
						<img src="@/assets/icons/lock.svg" alt="KAS Mentor Logo" />
					</template>
				</TextInput>
			</div>

			<div class="text-right mb-6">
				<a href="#" class="text-blue-500 text-sm">Forgot Password?</a>
			</div>

			<div class="mb-8">
				<router-link to="/home">
					<Button
						variant="solid"
						theme="blue"
						size="md"
						label="Login"
						class="w-full"
						:loading="false"
						:disabled="false"
					>
						Login
					</Button>
				</router-link>

				<div class="text-center m-4">
					<p>or</p>
				</div>
				<Button
					:variant="'subtle'"
					theme="gray"
					size="md"
					class="w-full"
					label="Login with Office 365"
					:loading="false"
					:loadingText="null"
					:disabled="false"
					:link="null"
				>
					<i class="mr-2 fas fa-microsoft"></i>
					Login with Office 365
				</Button>
			</div>

			<div class="text-center">
				<p class="text-sm">
					Don't have an account?
					<a href="#" class="text-blue-500">Sign up</a>
				</p>
			</div>
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
</style>
