<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="js">
const route = useRoute();
const router = useRouter();

useFetch('/api/credentials', {
  method: 'get'
}).then(response => {
  // response.data.value.status
  console.log(response.data.value.status);
  if (response.data.value.status === 'data is true' && route.path !== '/home') {
    router.push('/home');
  }
  else if (route.path === '/home' && response.data.value.status !== 'data is true') {
    router.push('/');
  }
});
</script>