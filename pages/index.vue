<template>
  <div class="center">
    <h1>Auth App</h1>
    <div class="buttons">
      <NuxtLink href="/register"><Button>Sign Up</Button></NuxtLink>
      <NuxtLink href="/login"><Button>Sign In</Button></NuxtLink>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');

* {
  font-family: Poppins;
  font-weight: 400;
}

h1 {
  font-weight: 500;
  font-size: 48px;
  color: #7149C6;
}

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  gap: 32px;
}

.buttons {
  gap: 16px;
  display: flex;
}
</style>
