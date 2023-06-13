export default defineEventHandler(async (event) => {
    const { username, password } = getQuery(event);

    const data = await $fetch(`https://expressjs-server-production-4dda.up.railway.app/register?username=${username}&password=${password}`, { method: 'POST' });

    if (data.status === 'succeed') {
        return { status: 'succeed', key: data.key }
    }

    else {
        return { status: 'already' }
    }
})