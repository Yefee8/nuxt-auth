export default defineEventHandler(async (event) => {
    const { username, password } = await readBody(event);

    const data = await $fetch(`sorryicantsharetheapi.com/register?username=${username}&password=${password}`, { method: 'POST' });

    if (data.status === 'succeed') {
        setCookie(event, 'token', data.key, {
            httpOnly: true,
            // secure: true
        });
        return { status: 'succeed' }
    }

    else {
        return { status: 'already' }
    }
})