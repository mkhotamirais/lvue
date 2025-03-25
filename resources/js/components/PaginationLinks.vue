<script setup>
defineProps({
  paginator: {
    type: Object,
    required: false,
  },
});

const makeLabel = (label) => {
  if (label.includes("Previous")) {
    return "<<";
  } else if (label.includes("Next")) {
    return ">>";
  } else {
    return label;
  }
};
</script>

<template>
  <div class="flex justify-between items-start">
    <div class="flex items-center rounded-md overflow-hidden shadow-lg">
      <div v-for="link in paginator.links" :key="link.url">
        <component
          :is="link.url ? 'Link' : 'span'"
          :href="link.url"
          v-html="makeLabel(link.label)"
          class="border-x border-slate-50 w-12 h-12 grid place-items-center bg-white"
          :class="
            link.url
              ? 'hover:bg-slate-300'
              : !link.url
              ? 'bg-red-400'
              : link.active
              ? 'font-bold text-blue-500'
              : ''
          "
        />
      </div>
    </div>
    <p>
      showing {{ paginator.from }} to {{ paginator.to }} of
      {{ paginator.total }} results
    </p>
  </div>
</template>