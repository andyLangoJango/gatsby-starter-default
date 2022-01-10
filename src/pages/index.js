import * as React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Helmet>
    <script
      type="text/javascript"
      id="botcopy-embedder-d7lcfheammjct"
      className="botcopy-embedder-d7lcfheammjct" 
      data-botid="61b7d8f1f34a7e00096b54cc"
      src = 'https://widget.botcopy.com/js/injection.js'
      dangerouslySetInnerHTML={{
        __html: `
              var s = document.createElement('script'); 
              s.type = 'text/javascript'; s.async = true; 
              s.src = 'https://widget.botcopy.com/js/injection.js'; 
              document.getElementById('botcopy-embedder-d7lcfheammjct').appendChild(s);
            `,
      }}
    />

    </Helmet>

  </Layout>
)

export default IndexPage
