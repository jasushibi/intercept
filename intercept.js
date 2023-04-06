function intercept() {
    const { fetch: originalFetch } = window;

    window.fetch = async (...args) => {
        let [resource, config ] = args;
        // request interceptor here
        const response = await originalFetch(resource, config);
        // response interceptor here
        console.log(await response.json());
        return response;
    };
}
