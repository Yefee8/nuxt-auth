<template>
    <div class="center">
        <div class="loading active" id="loading">
            <div class="spinner"></div>
        </div>

        <h1>Signed In!</h1>
        <Button @clicked="logOut()">Log Out</Button>
    </div>
</template>

<script>
export default {
    methods: {
        logOut() {
            localStorage.setItem('userKey', '');
            this.$router.push('/');
        }
    },
    data() {
        return {
            response: true
        }
    },
    created() {
        if (typeof localStorage !== undefined) {
            setTimeout(() => {
                const { data } = useFetch(`/api/getuserkey?userkey=${localStorage.getItem('userKey')}`);
                this.response = data;
            }, 250)
        }
    },
    watch: {
        response(newValue, oldValue) {
            if (newValue.status) {
                if (newValue.status === 'wrong') {
                    this.$router.push('/');
                    localStorage.setItem('userKey', '');
                }
                else{
                    document.getElementById('loading').classList = 'loading';
                }
            }
        }
    }
}
</script>

<style scoped>
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