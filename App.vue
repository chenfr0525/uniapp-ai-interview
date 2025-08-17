<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	.image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	view,scroll-view {
		box-sizing: border-box;
	}
</style>