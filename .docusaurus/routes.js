import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '447'),
    exact: true
  },
  {
    path: '/blog/change-ssh-port-in-linux-centos',
    component: ComponentCreator('/blog/change-ssh-port-in-linux-centos', '660'),
    exact: true
  },
  {
    path: '/blog/index-dsjfs',
    component: ComponentCreator('/blog/index-dsjfs', 'db6'),
    exact: true
  },
  {
    path: '/blog/markdown-page',
    component: ComponentCreator('/blog/markdown-page', 'e34'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'c33'),
    exact: true
  },
  {
    path: '/blog/tags/firewalld',
    component: ComponentCreator('/blog/tags/firewalld', '0f6'),
    exact: true
  },
  {
    path: '/blog/tags/linux',
    component: ComponentCreator('/blog/tags/linux', '1fa'),
    exact: true
  },
  {
    path: '/blog/tags/semanage',
    component: ComponentCreator('/blog/tags/semanage', '4de'),
    exact: true
  },
  {
    path: '/blog/tags/ssh',
    component: ComponentCreator('/blog/tags/ssh', '0f5'),
    exact: true
  },
  {
    path: '/blog/docs',
    component: ComponentCreator('/blog/docs', 'f1b'),
    routes: [
      {
        path: '/blog/docs/category/tutorial---basics',
        component: ComponentCreator('/blog/docs/category/tutorial---basics', 'ca7'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/blog/docs/category/tutorial---extras',
        component: ComponentCreator('/blog/docs/category/tutorial---extras', 'e03'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/blog/docs/intro',
        component: ComponentCreator('/blog/docs/intro', '7c7'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/blog/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/blog/docs/tutorial-basics/congratulations', 'ec4'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/blog/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/blog/docs/tutorial-basics/create-a-blog-post', '7b5'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/blog/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/blog/docs/tutorial-basics/create-a-document', 'd31'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/blog/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/blog/docs/tutorial-basics/create-a-page', '6f2'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/blog/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/blog/docs/tutorial-basics/deploy-your-site', 'cbf'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/blog/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/blog/docs/tutorial-basics/markdown-features', 'b11'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/blog/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/blog/docs/tutorial-extras/manage-docs-versions', '485'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/blog/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/blog/docs/tutorial-extras/translate-your-site', '031'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/blog/',
    component: ComponentCreator('/blog/', '6eb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
