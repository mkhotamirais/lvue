<script setup>
</script>

<template>
  <Head>
    <title>Laravelll</title>
    <meta
      head-key="description default"
      name="description"
      content="Laravel description"
    />
  </Head>
  <div>
    <!-- Header -->
    <header>
      <nav>
        <div>
          <Link
            :href="route('home')"
            :class="{ 'bg-gray-500': $page.component === 'Home' }"
            >Home</Link
          >
          <Link
            :href="route('about')"
            :class="{ 'bg-gray-500': $page.component === 'About' }"
            >About</Link
          >
          <div v-if="$page.props.auth.user">
            <img
              :src="
                $page.props.auth.user.avatar
                  ? 'storage/' + $page.props.auth.user.avatar
                  : 'storage/avatars/default.jpg'
              "
              alt="profile foto"
              class="w-32"
            />
            <Link :href="route('dashboard')">Dashboard</Link>
            <Link
              :href="route('logout')"
              method="post"
              as="button"
              class="cursor-pointer"
              >Logout</Link
            >
          </div>
          <div v-else>
            <Link
              :href="route('register')"
              :class="{ 'bg-gray-500': $page.component === 'auth/Register' }"
              >Register</Link
            >
            <Link
              :href="route('login')"
              :class="{ 'bg-gray-500': $page.component === 'auth/Login' }"
              >Login</Link
            >
          </div>
        </div>
      </nav>
    </header>

    <!-- Main -->
    <main>
      <slot></slot>
    </main>
  </div>
</template>