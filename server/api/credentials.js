export default defineEventHandler(async (event) => {
    const userToken = getCookie(event, 'token');

    const data = await $fetch(`https://express-auth-yefee-production-e5a1.up.railway.app/checkuser?userkey=${userToken}`, { method: 'GET' });

    if (data.status === 'true') {
        return { status: 'data is true' }
    }

    else {
        setCookie(event, 'token', '', {
            httpOnly: true,
            // secure: true
        });
        return { status: 'wrong' }
    }
})