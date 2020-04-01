import NextHead from 'next/head'

const Head = ({ title, description }) => (
    <NextHead>
        <meta charSet="UTF-8" />
        <title>{title || ''}</title>
        <meta name="description" content={description || ''} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="text/javascript" src="https://platform-api.sharethis.com/js/sharethis.js#property=5e83e56a22b9840019ffb3ef&product=inline-share-buttons" async="async"></script>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
    </NextHead>
)

export default Head