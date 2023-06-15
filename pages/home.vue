<template>
    <div class="center">
        <h1>Signed In!</h1>
        <Button @clicked="logOut()">Log Out</Button>
    </div>
</template>

<script setup lang="js">
const router = useRouter()

const logOut = () => {
    useFetch('/api/logout', {
        method: 'get'
    }).then(() => {
        router.push('/');
    });
}
</script>