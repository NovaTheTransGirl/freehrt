const path = require("path");

module.exports = {
    reactStrictMode: true,
    async headers() {
        return [
            {
                source: "/videomain.mp4",
                headers: [
                    { key: "Content-Type", value: "video/mp4" }
                ]
            }
        ];
    }
};
