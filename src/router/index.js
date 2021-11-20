import { createRouter, createWebHistory } from "vue-router";
import Divisions from "../views/Divisions.vue";
import Home from "../static/StaticHome";

import store from "../store";
const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/projects",
		name: "AllProjects",
		component: () => import("../static/AllProjects.vue"),
	},
	{
		path: "/profile/:user_code",
		name: "StaticProfile",
		component: () => import("../static/StaticProfile"),
		props: true,
	},
	{
		path: "/teams",
		name: "Teams",
		component: () => import("../static/Teams.vue"),
	},
	{
		path: "/teams/:division",
		name: "StaticDivision",
		component: () => import("../static/StaticDivision"),
		props: true,
	},
	{
		path: "/members",
		name: "Members",
		component: () => import("../static/Members"),
		props: true,
	},
	{
		path: "/portal/divisions",
		name: "Divisions",
		component: Divisions,
	},
	{
		path: "/portal/divisions/:division",
		name: "Projects",
		component: () => import("../views/Projects.vue"),
		props: true,
	},
	{
		path: "/portal/profile/:user_code",
		name: "Profile",
		component: () => import("../views/Profile.vue"),
		props: true,
	},
	{
		path: "/portal/projects/:projectCode",
		name: "Tasks",
		component: () => import("../views/Tasks.vue"),
		props: true,
	},
	{
		path: "/portal/me",
		name: "Me",
		component: () => import("../views/Me.vue"),
	},
	{
		path: "/portal/adminme",
		name: "AdminMe",
		component: () => import("../views/AdminMe.vue"),
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("../views/Login.vue"),
	},
	{
		path: "/adminlogin",
		name: "AdminLogin",
		component: () => import("../views/AdminLogin.vue"),
	},
	{
		path: "/portal/admin",
		name: "Admin",
		component: () => import("../views/Admin.vue"),
	},
	{
		path: "/register",
		name: "Register",
		component: () => import("../views/Register.vue"),
	},
	{
		path: "/portal/editProject/:projectCode",
		name: "UpdateProject",
		component: () => import("../views/UpdateProject.vue"),
	},
	{
		path: "/portal/edit-profile",
		name: "UpdateProfile",
		component: () => import("../views/UpdateProfile.vue"),
	},
	{
		path: "/portal/admin-edit-profile",
		name: "UpdateAdminProfile",
		component: () => import("../views/UpdateAdminProfile.vue"),
	},
	{
		path: "/portal/adminProjects",
		name: "AdminProjects",
		component: () => import("../views/AdminProjects.vue"),
	},
	{
		path: "/portal/generate",
		name: "GenerateToken",
		component: () => import("../views/GenerateToken.vue"),
	},
	{
		path: "/portal/events",
		name: "Events",
		component: () => import("../views/Events.vue"),
	},
	{
		path: "/portal/events/:event_id",
		name: "EventDetail",
		component: () => import("../views/EventDetail.vue"),
		props: true,
	},
	{
		path: "/portal/updateEvent",
		name: "UpdateEvent",
		component: () => import("../views/UpdateEvent.vue"),
	},
	{
		path: "/404",
		name: "404",
		component: () => import("../views/404.vue"),
	},
	{
		path: "/redirect/:url",
		name: "External-Link",
		beforeEnter(to) {
			// Put the full page URL including the protocol http(s) below
			window.location.replace(to.params.url);
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

var staticPages = [
	"Home",
	"Login",
	"Register",
	"AdminLogin",
	"AllProjects",
	"Teams",
	"StaticDivision",
	"StaticProfile",
	"Members",
];
router.beforeEach((to, from, next) => {
	if (
		!store.getters["auth/isAuthenticated"] &&
		!staticPages.includes(to.name)
	) {
		next({ name: "Login" });
	} else {
		next();
	}
});

export default router;
