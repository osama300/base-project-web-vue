<template>
  <div class="drawer drawer lg:drawer-open rtl">
    <!-- Toggle for Mobile Sidebar -->
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />

    <!-- Main Content with Navbar and Sidebar -->
    <div class="drawer-content flex flex-col">
      <!-- Navbar Component -->
      <Navbar />

      <!-- Main Page Content -->
      <MainContent />
    </div>

    <!-- Sidebar Component -->
    <Sidebar />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import MainContent from "./components/MainContent.vue";

export default {
  name: "Dashboard",
  components: {
    Navbar,
    Sidebar,
    MainContent,
  },
};
</script>
