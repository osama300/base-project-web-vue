<template>
    <div class="drawer lg:drawer-open rtl">
      <!-- Toggle for Mobile Sidebar -->
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  
      <!-- Main Content -->
      <div class="drawer-content flex flex-col">
        <!-- Navbar for Mobile -->
        <div class="navbar bg-green-100 w-full lg:hidden">
          <div class="flex-none">
            <label for="my-drawer" class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-6 w-6 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div class="flex-1 mx-2 px-2">عنوان النافذة</div>
          <div class="flex-none">
            <ul class="menu menu-horizontal hidden lg:flex">
              <li><a>عنصر النافذة 1</a></li>
              <li><a>عنصر النافذة 2</a></li>
            </ul>
          </div>
        </div>
  
        <!-- Dynamic Page Content -->
        <div class="p-6">
          <!-- هنا سيتم عرض محتويات الصفحة المتغيرة -->
          <router-view />
        </div>
      </div>
  
      <!-- Sidebar for Desktop -->
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu bg-green-50 min-h-full w-80 p-4">
          <!-- Sidebar content here -->
          <li><a>عنصر الشريط الجانبي 1</a></li>
          <li><a>عنصر الشريط الجانبي 2</a></li>
          <li><a>عنصر الشريط الجانبي 3</a></li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Layout",
  };
  </script>
  
  <style scoped>
  /* أضف أنماطك الخاصة هنا */
  </style>
  