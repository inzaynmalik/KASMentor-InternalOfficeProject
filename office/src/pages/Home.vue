<template>
  <div class="flex min-h-screen">
    <SideBar @batch-selected="handleBatchSelection" />
    <div class="flex-1">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SideBar from "../components/SideBar.vue";
import { useRouter } from "vue-router";

const selectedBatchData = ref(null);
const router = useRouter();

const handleBatchSelection = (data) => {
  selectedBatchData.value = data;
  router.push({ name: "BatchDetail", params: { batchName: data.name } });
};
</script>

<style scoped>
.min-h-screen {
  min-height: 100vh;
}
</style>
