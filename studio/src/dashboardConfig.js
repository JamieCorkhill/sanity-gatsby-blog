export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eea947224c20b0257a210cc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pzudysgi',
                  apiId: '338e10f2-cbc1-4dd7-af78-c9cc92df671d'
                },
                {
                  buildHookId: '5eea9472fab4900232339b82',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-546fd39q',
                  apiId: 'ee7d5812-f735-43c0-97b9-d9de05e0c7e7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JamieCorkhill/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-546fd39q.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
