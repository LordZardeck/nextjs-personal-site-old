import React from 'react'
import Layout from '../../../components/layout'
import StoryblokService from '../../../utils/storyblok-service'
import SbEditable from 'storyblok-react'
import marked from 'marked';
import styles from './slug.module.css';
import Prism from "prismjs";

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pageContent: props.page.data.story.content,
        }
    }

    static async getInitialProps({ asPath, query }) {
        StoryblokService.setQuery(query)

        let [page, settings] = await Promise.all([
            StoryblokService.get(`cdn/stories${asPath}`),
            StoryblokService.get(`cdn/stories/${query.language}/settings`)
        ])

        return {
            page,
            settings
        }
    }

    componentDidMount() {
        StoryblokService.initEditor(this);
        Prism.highlightAll();
    }

    markdown(content) {
        return { __html: marked(content) }
    }

    render() {
        const settingsContent = this.props.settings.data.story
        const { pageContent } = this.state;

        console.log(this.props.page)

        return (
            <Layout settings={settingsContent}>
                <SbEditable content={pageContent}>
                    <img className={styles.featuredImage} src={pageContent.featured_image} />
                    <div className={styles.blog}>
                        <h1>{this.props.page.data.story.name}</h1>
                        <div className="sharethis-inline-share-buttons"></div>
                        <div dangerouslySetInnerHTML={this.markdown(pageContent.summary)}></div>
                        <div dangerouslySetInnerHTML={this.markdown(pageContent.content)}></div>
                    </div>
                </SbEditable>
            </Layout>
        )
    }
}