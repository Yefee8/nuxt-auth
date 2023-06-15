<template>
    <div class="center">

        <div class="loading" :class="{
            active: isLoading
        }">
            <div class="spinner"></div>
        </div>

        <form class="card" @submit.prevent="onSubmit()">
            <h1>Sign In</h1>
            <Input v-model="user.username" type="text" placeholder="Username" />
            <Input v-model="user.password" type="password" placeholder="Password" />
            <Button>Sign In</Button>
        </form>
    </div>
</template>


<script setup lang="js">
const router = useRouter()

const user = reactive({
    username: '',
    password: ''
});

const isLoading = ref(false);

const onSubmit = () => {
    isLoading.value = true;

    useFetch('/api/signin', {
        method: 'post',
        body: user
    }).then(response => {
        if (response.data.value.status === 'succeed') {
            alert('Signed In 🚀');
            router.push({ path: "/home" });
        }

        else {
            alert('Username is Already Taken 😟...');
            router.push({ path: "/" });
        }
    });
}
</script>

<style scoped>
.card {
    padding: 32px;
    background-color: #7149c62d;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

h1 {
    text-align: center;
}

.loading {
    position: fixed;
    background-color: #0000007a;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    opacity: 0;
    display: none;
    transition: 200ms;
}

.active {
    display: flex !important;
    opacity: 1 !important;
}

.spinner {
    display: inline-block;
    width: 80px;
    height: 80px;
}

.spinner::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: spinnin 1.2s linear infinite;
}

@keyframes spinnin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>