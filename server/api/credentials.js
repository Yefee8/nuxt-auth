export default defineEventHandler(async (event) => {
    const userToken = getCookie(event, 'token');

    const data = await $fetch(`sorryicantsharetheapi.com/checkuser?userkey=${userToken}`, { method: 'GET' });

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