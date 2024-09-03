const fetch = require('node-fetch');

exports.handler = async (event) => {
    const videoUrl = event.queryStringParameters.url;
    if (!videoUrl) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'No video URL provided' }),
        };
    }

    try {
        const response = await fetch(videoUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch video');
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Video download started' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error downloading video', details: error.message }),
        };
    }
};