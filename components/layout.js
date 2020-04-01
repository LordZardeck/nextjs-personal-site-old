import Head from '../components/head'
import Nav from '../components/nav'
import StoryblokService from '../utils/storyblok-service'

export default ({ children, settings = {} }) => (
  <div>
    <Head />
    <Nav settings={settings} />
    <div className="util__container">
      {children}
    </div>

    <style jsx global>{`
      * {
          box-sizing: border-box;
      }

      body {
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        margin: 0;
      }
    `}</style>
    {StoryblokService.bridge()}
  </div>
)