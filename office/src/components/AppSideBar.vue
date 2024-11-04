<template>
	<div class="sidebar">
		<!-- Sidebar Header -->
		<div class="sidebar-header">
			<!-- <img src="path-to-your-icon.svg" alt="CRM Icon" class="icon" /> -->
			<span class="app-name">CRM</span>
			<span class="user-role">Administrator</span>
		</div>

		<!-- Sidebar Navigation -->
		<nav class="sidebar-nav">
			<SidebarItem icon="users" text="Leads" />
			<SidebarItem icon="zap" text="Deals" />
			<SidebarItem icon="user" text="Contacts" />
			<SidebarItem icon="briefcase" text="Organizations" />
			<SidebarItem icon="file-text" text="Notes" />
			<SidebarItem icon="check-square" text="Tasks" />
			<SidebarItem icon="phone" text="Call Logs" />
			<SidebarItem icon="mail" text="Email Templates" />
		</nav>

		<!-- Sidebar Footer -->
		<div class="sidebar-footer">
			<span>Collapse</span>
		</div>
	</div>
</template>

<script>
import feather from "feather-icons";

const SidebarItem = {
	props: ["icon", "text"],
	mounted() {
		feather.replace();
	},
	template: `
    <div class="sidebar-item">
      <i :data-feather="icon" class="sidebar-icon"></i>
      <span class="sidebar-text">{{ text }}</span>
    </div>
  `,
};

export default {
	components: {
		SidebarItem,
	},
};
</script>

<style scoped>
.sidebar {
	width: 250px;
	display: flex;
	flex-direction: column;
	background-color: #f8f9fa;
	padding: 16px;
}

.sidebar-header {
	display: flex;
	align-items: center;
	padding: 12px 0;
}

.icon {
	width: 32px;
	height: 32px;
	margin-right: 8px;
}

.app-name {
	font-size: 18px;
	font-weight: bold;
}

.user-role {
	font-size: 12px;
	color: #6c757d;
}

.sidebar-nav {
	margin-top: 20px;
}

.sidebar-item {
	display: flex;
	align-items: center;
	padding: 10px 0;
	cursor: pointer;
	color: #495057;
}

.sidebar-icon {
	width: 20px;
	height: 20px;
	margin-right: 10px;
}

.sidebar-text {
	font-size: 16px;
}

.sidebar-footer {
	margin-top: auto;
	font-size: 14px;
	color: #6c757d;
	cursor: pointer;
}
</style>
