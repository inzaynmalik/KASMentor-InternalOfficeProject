import { createRouter, createWebHistory } from "vue-router";

import Login from "./pages/Login.vue";
import Home from "./pages/Home.vue";
import User from "./pages/User.vue";
import timepass from "./pages/timepass.vue";
import Student from "./pages/Student.vue";
import AppSideBar from "./components/AppSideBar.vue";
import SideBar from "./components/SideBar.vue";
// import RightSideBatches from "./components/RightSideBatches.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "Login",
			component: Login,
		},

		{
			path: "/home",
			name: "Home",
			component: Home,
			children: [
				{
					path: "batches",
					name: "Batches",
					component: () => import("./components/AllBatches.vue"), // load component dynamically
				},
				{
					path: "students",
					name: "Students",
					component: () => import("./components/AllStudents.vue"), // same component, different data
				},
			],
		},
		{
			path: "/user/:userId",
			name: "User",
			component: User,
			props: true,
		},
		{
			path: "/student",
			name: "Student",
			component: Student,
		},
		{
			path: "/timepass",
			name: "timepass",
			component: timepass,
		},
	],
});

export default router;
