import Head from 'next/head';

const Meta = () => (
  <Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Collaborative creativity, knowledge sharing, and positive global impact. Igniting innovation through open source collaboration with Mindfire." />
    <meta name="keywords" content="open source, collaboration, creativity, knowledge sharing, positive global impact, innovation, Mindfire" />
    <meta name="author" content="Mindfire Digital LLP" />
    {/* Facebook Open Graph meta tags */}
    <meta property="og:title" content="Mindfire | Open Source Collaboration" />
    <meta property="og:description" content="Mindfire FOSS | Collaborative creativity, knowledge sharing, and positive global impact. Igniting innovation through open source collaboration with Mindfire." />
    <meta property="og:image" content="https://mindfiredigital.github.io/_next/static/media/mindfire_foss_logo.0c507a60.png" />
    <meta property="og:image:width" content="500" />
    <meta property="og:image:height" content="219" />
    <meta property="og:url" content="https://mindfiredigital.github.io/" />
    <meta property="og:type" content="website" />

    {/* Instagram meta tags */}
    <meta property="og:site_name" content="Mindfire" />
    <meta property="og:locale" content="en_US" />

    {/* Twitter Card meta tags */}
    <meta name="twitter:card" content="Mindfire FOSS" />
    <meta name="twitter:title" content="Mindfire | Open Source Collaboration" />
    <meta name="twitter:description" content="Collaborative creativity, knowledge sharing, and positive global impact. Igniting innovation through open source collaboration with Mindfire." />
    <meta name="twitter:image" content="https://pbs.twimg.com/profile_images/2228473920/flame2.1_400x400.jpg" />
    <meta name="twitter:image:width" content="400" />
    <meta name="twitter:image:height" content="400" />
    <meta name="twitter:site" content="@mindfires" />
    <meta name="twitter:creator" content="@mindfires" /> 

    {/* GitHub meta tags */}
    <meta property="og:site_name" content="Mindfire FOSS GitHub" />
    <meta property="og:type" content="object" />
    <meta property="og:image" content="https://avatars.githubusercontent.com/u/146419203?s=200&v=4" />
    <meta property="og:url" content="https://github.com/mindfiredigital/mindfiredigital.github.io" />
    <meta property="og:title" content="Mindfire GitHub Repository" />
    <meta property="og:description" content="Explore our open source projects and contributions on GitHub." />
  </Head>
);

export default Meta;