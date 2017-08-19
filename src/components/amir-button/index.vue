<template>
		<button class="btn" @click="emitClick">
			<slot>确定</slot>
		</button>
</template>

<script>
	export default {
		methods: {
			emitClick() {
				this.$emit('click', 'sunyuhui');
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../style/common.less';
	

</style>