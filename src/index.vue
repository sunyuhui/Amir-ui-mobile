<template>
  <div class="container">
    <p class="title">Amir -- Vue组件库</p>

    <div class="all-demos">
      <div v-for="item in componentsNav" class="item-container">
        <p class="title">{{item.category}}</p>
        <template v-for="components in item.map">
          <a :href="components.url" class="component-link">{{components.name}}</a>
        </template>
      </div>
    </div>
    <p class="clear">
      <a target="_blank" href="https://wiki.sankuai.com/pages/viewpage.action?pageId=554056342">移动端设计规范</a>
    </p>
    
  </div>
</template>

<script>
  import componentsNav from './common/componentsNav'
	export default {
		name: 'app',
    data: function () {
      return {
        componentsNav: componentsNav
      }
    }
	}
</script>

<style lang="less" scoped>
@mainColor: #3dc6b6;
.container {
  margin:20px;
  .title {
    font-size: 30px; /*px*/
    margin:0;
  }

  a {
    font-size: 14px; /*px*/
    text-decoration: none;
    color:#000;
    display: block;
    text-align: center;
  }

  .all-demos {
    margin-bottom: 20px;

    .item-container {
      margin-top: 20px;
      .title {
        font-size: 20px; /*px*/
        color:@mainColor;
        margin: 20px 0;
      }
      .component-link {
        display: block;
        color:#000;
        border-radius: 4px;
        margin-bottom: 5px;
        background: @mainColor;
        text-align: left;
      }
    }
  }
}
</style>