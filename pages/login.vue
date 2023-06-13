<template>
    <div class="center">

        <div :class="`loading`" id="loading">
            <div class="spinner"></div>
        </div>
        <div class="card">
            <h1>Log In</h1>
            <Input @change="(e) => usernameChanged(e)" type="text" placeholder="Username" />
            <Input @change="(e) => passwordChanged(e)" type="password" placeholder="Password" />
            <Button @clicked="log(logIn(username.target.value, password.target.value))">Log In</Button>
        </div>
    </div>
</template>


<script setup>
const logIn = (username, password) => {
    const { data } = useFetch(`/api/login?username=${username}&password=${password}`);

    return data;
}
</script>

<script>

export default {
    methods: {
        usernameChanged(e) {
            this.username = e;
        },
        passwordChanged(e) {
            this.password = e;
        },
        log(r) {
            document.getElementById('loading').classList += ' active';
            this.response = r;
        }
    },

    data() {
        return {
            username: '',
            password: '',
            response: '',
        }
    },
    watch: {
        response(newValue, oldValue) {
            if (newValue.status) {
                console.log(newValue);
                if (newValue.status === 'succeed') {
                    alert('Logged In 🚀');
                    localStorage.setItem('userKey', newValue.key);
                    this.$router.push({ path: "/home" });
                }

                else {
                    alert('Datas are wrong 😟...');
                    this.$router.push({ path: "/" });
                }
            }
        }
    }
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