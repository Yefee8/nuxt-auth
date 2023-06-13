export default defineEventHandler(async (event) => {
    const { userkey } = getQuery(event);

    const data = await $fetch(`https://expressjs-server-production-4dda.up.railway.app/checkuser?userkey=${userkey}`, { method: 'GET' });

    if (data.status === 'true') {
        return { status: 'true'}
    }

    else {
        return { status: 'wrong' }
    }
})