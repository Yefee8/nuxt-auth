export default defineEventHandler(async (event) => {
    const { userkey } = getQuery(event);

    const data = await $fetch(`https://express-auth-yefee-production-e5a1.up.railway.app/checkuser?userkey=${userkey}`, { method: 'GET' });

    if (data.status === 'true') {
        return { status: 'true'}
    }

    else {
        return { status: 'wrong' }
    }
})