import { ComponentMeta } from '@storybook/react';

import { Article as ArticleComponent, ArticleProps } from './Article';

export default {
  title: 'Article',
  component: ArticleComponent,
  argTypes: {
    author: {
      control: {
        type: 'text'
      },
      defaultValue: 'Title',
    },
    url: {
      control: {
        type: 'text'
      },
      defaultValue: 'https://url.com',
    },
    image: {
      control: {
        type: 'text'
      },
      defaultValue: 'https://picsum.photos/600/400',
    },
    traffic: {
      control: {
        type: 'number'
      },
      defaultValue: 12345,
    },
    id: {
      control: {
        type: 'text'
      },
      defaultValue: 'c0281ed3-160d-4be0-acc7-1dd9a62a4f78',
    },
    navigate: {
      action: true,
    }
  },
} as ComponentMeta<typeof ArticleComponent>;

export const article = (args: ArticleProps) => <ArticleComponent { ...args } />;
