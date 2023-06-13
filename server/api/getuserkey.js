export default defineEventHandler(async (event) => {
    const { userkey } = getQuery(event);

    const data = await $fetch(`http://localhost:3003/checkuser?userkey=${userkey}`, { method: 'GET' });

    if (data.status === 'true') {
        return { status: 'true'}
    }

    else {
        return { status: 'wrong' }
    }
})