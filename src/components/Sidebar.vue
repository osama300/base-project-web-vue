<template>
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 min-h-full w-80 p-4">

      <!-- Header with Avatar and Name -->
      <div class="flex items-center space-x-4 p-4 mb-6">
        <img
          class="w-12 h-12 rounded-full"
          src="https://via.placeholder.com/150"
          alt="User Avatar"
        />
        <div>
          <h2 class="text-lg font-semibold">اسم المستخدم</h2>
          <p class="text-sm text-gray-500">دور المستخدم</p>
        </div>
      </div>

      <!-- Divider -->
      <hr class="mb-4 border-gray-300" />

      <!-- Sidebar content with routing, icons and click effect -->
      <p class="mb-2">وسم</p>
      <li class="mb-2">
        <router-link to="/" @click="closeDrawer" class="flex items-center p-2 rounded hover:bg-gray-300 transition-colors duration-300 ease-in-out">
          <i class="fas fa-home mr-2"></i> <!-- Icon -->
          عنصر الشريط الجانبي 1
        </router-link>
      </li>
      <li class="mb-2">
        <router-link to="/about" @click="closeDrawer" class="flex items-center p-2 rounded hover:bg-gray-300 transition-colors duration-300 ease-in-out">
          <i class="fas fa-info-circle mr-2"></i> <!-- Icon -->
          عنصر الشريط الجانبي 2
        </router-link>
      </li>
      <li class="mb-2">
        <router-link to="/contact" @click="closeDrawer" class="flex items-center p-2 rounded hover:bg-gray-300 transition-colors duration-300 ease-in-out">
          <i class="fas fa-envelope mr-2"></i> <!-- Icon -->
          عنصر الشريط الجانبي 3
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    closeDrawer() {
      // إلغاء تفعيل الـ checkbox لإغلاق الـ drawer
      document.getElementById('my-drawer').checked = false;
    }
  }
};
</script>

<!-- Include Font Awesome CDN -->
