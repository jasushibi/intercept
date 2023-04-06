function intercept() {
    const { fetch: originalFetch } = window;

    window.fetch = async (...args) => {
        const response = await originalFetch(...args);

        const contentType = response.headers.get('content-type');

        if (contentType && contentType.includes('application/json')) {
            const body = await response.json();
            console.log(body)
        }

        return response;
    };
}
