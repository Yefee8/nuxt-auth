export default defineEventHandler(async (event) => {
    setCookie(event, 'token', '', {
        httpOnly: true,
        // secure: true
    });

    return{
        status: 'succeed'
    }
})