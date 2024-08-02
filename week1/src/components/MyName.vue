<script setup>
defineProps({
  name: {
    type: String
  }
})
</script>

<template>
    <div class="displayName">
        <h1 class="green">
            {{ name }}
        </h1>
    </div>
</template>

<style>
.displayName h1 {
  text-align: center;
}

</style>