<template>
<div class="main">
	<el-container>
		<el-aside width="200px">
			<aside-element />
		</el-aside>
		<el-container>
			<el-header>
				<header-element />
			</el-header>
			<el-main>
				<router-view />
			</el-main>
			<el-footer>
				<footer-element />
			</el-footer>
		</el-container>
	</el-container>
	<div id="popup_instance"></div>
</div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style>
#app {

}

.el-header,
.el-footer {
	text-align: center;
	line-height: 60px;
}

.el-aside {
	text-align: center;
	line-height: 200px;
}

.el-main {
	text-align: center;
	line-height: 160px;
}

body>.el-container {
	margin-bottom: 40px;
	height: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
	line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
	line-height: 320px;
}


</style>
