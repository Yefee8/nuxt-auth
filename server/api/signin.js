export default defineEventHandler(async (event) => {
    const { username, password } = getQuery(event);

    const data = await $fetch(`http://localhost:3003/register?username=${username}&password=${password}`, { method: 'POST' });

    if (data.status === 'succeed') {
        return { status: 'succeed', key: data.key }
    }

    else {
        return { status: 'already' }
    }
})