<template>
  <div class="header">
    <ul><li v-for="(tab, idx) in tabs" :key="idx" @click="clickckk(this)">
        <router-link :active="isActive" :to="tab.route">
            {{tab.title}}
        </router-link>
    </li></ul>
  </div>
</template>

<script>

export default {
  name: 'header',
  data: () => ({
    tabs: [
        { title: 'Utforska', icon: NaN, route: '/' },
        { title: 'Kategorier', icon: NaN, route: '/Kategorier' },
        { title: 'Kundvagn', icon: NaN, route: '/Kundvagn' }]
  })
}
</script>

<style scoped>
    .header {
        box-shadow: 0 0 4px rgba(122, 122, 122, 0.2);
        background-color: white;
        width: 100%;
        height: 50px;
        line-height: 50px;
        position: fixed;
        top: calc(100% - 50px);
    }
    ul { 
        margin: auto;
        max-width: 600px;
        list-style-type: none;
        padding: 0;
        overflow: hidden;
        height: 100%;
    }

    li {
        float: left;
        height: 100%;
        width: calc(100% / 3);
        cursor: pointer;
    }

    li a {
        height: 100%;
        width: 100%;
        font-size: 10px;
        font-weight: bold;
        display: block;
        color: black;
        text-align: center;
        text-decoration: none;
        transition: background-color 0.2s;
    }

    li a:hover {
        /* background-color: rgba(119, 119, 119, 0.1); */
    }

    .router-link-active {
        color: #00bbaa;
    }
</style>
