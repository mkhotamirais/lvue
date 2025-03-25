<script setup>
import { ref, watch } from "vue";
import PaginationLinks from "../components/PaginationLinks.vue";
import { router } from "@inertiajs/vue3";
import { throttle, debounce } from "lodash";

const props = defineProps({
  users: Object,
  searchTerm: String,
  can: Object,
});

const search = ref(props.searchTerm);
// watch(
//   search,
//   throttle(
//     (q) => router.get(route("home"), { search: q }, { preserveState: true }),
//     1000
//   )
// );
watch(
  search,
  debounce(
    (q) => router.get(route("home"), { search: q }, { preserveState: true }),
    500
  )
);

const getDate = (date) => {
  return new Date(date).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

<template>
  <Head :title="` | ${$page.component}`" />
  <div class="">home page</div>
  <p>{{ $page.props.flash.message }}</p>

  <!-- search -->
  <div>
    <input type="search" placeholder="search" v-model="search" class="border" />
  </div>
  <!-- list -->
  <div class="grid grid-cols-3">
    <div v-for="user in users.data" :key="user.id" class="border mb-1">
      {{ user.name }}
      {{ getDate(user.created_at) }}
      <button v-if="can.delete_user" class="border">del</button>
    </div>
  </div>
  <!-- paginator -->
  <div>
    <Link
      v-for="(link, i) in users.links"
      :key="i"
      :href="link.url"
      v-html="link.label"
      class="p-1 mx-1"
      :class="{ 'text-slate-300': !link.url, 'bg-slate-300': link.active }"
    >
    </Link>
    <p>
      showing {{ users.from }} to {{ users.to }} of {{ users.total }} results
    </p>
  </div>

  <PaginationLinks :paginator="users" />

  <Link :href="route('home')" class="mt-[1400px] mb-10 block" preserve-scroll
    >Refresh</Link
  >
</template>