<template>
  <p>{{ $page.props.flash.message }}</p>
  <div>
    <h1>welcome back {{ $page.props.auth.user.name }}</h1>
  </div>
</template>