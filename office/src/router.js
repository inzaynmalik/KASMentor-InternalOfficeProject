import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import Home from "./pages/Home.vue";
import User from "./pages/User.vue";
import Students from "./pages/Students.vue";

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
			component: Home,
			children: [
				{
					path: "batches",
					name: "Batches",
					component: () => import("./components/AllBatches.vue"),
				},
				{
					path: "batches/:batchName",
					name: "BatchDetail",
					component: Students,
					props: (route) => ({ batchData: route.params.batchData }),
				},
				{
					path: "students",
					name: "AllStudents",
					component: () => import("./components/AllStudents.vue"),
				},
			],
		},
		{
			path: "/user/:userId",
			name: "User",
			component: User,
			props: true,
		},
	],
});

export default router;
