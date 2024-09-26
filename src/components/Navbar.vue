<template>
  <div class="navbar bg-base-100 w-full lg:hidden">
    <div class="flex-none">
      <label for="my-drawer" class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-6 w-6 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </label>
    </div>
    <!-- <div class="flex-1 mx-2 px-2">وسم</div> -->
    <div class="flex-none flex space-x-4">
      <!-- أيقونة الإشعارات -->
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
          <span class="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>

      <!-- أيقونة البروفايل -->
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://www.gravatar.com/avatar/112e28edfaa501b1942f68247921fcec?s=80&d=mm&r=g" />
          </div>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
          <li><a>الملف الشخصي</a></li>
          <li><a>الإعدادات</a></li>
          <li><a>تسجيل الخروج</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
