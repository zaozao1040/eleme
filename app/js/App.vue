<template>
    <div id="app">
	    <keep-alive exclude="sellers">
	      <router-view/>
	    </keep-alive>
    </div>
</template>

<script>
export default {
    name: "app",
}
</script>
