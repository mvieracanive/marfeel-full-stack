import { ComponentMeta } from '@storybook/react';

import { ArticleV2 as ArticleComponent, ArticleV2Props } from './ArticleV2';

export default {
  title: 'ArticleV2',
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
    }
  },
} as ComponentMeta<typeof ArticleComponent>;

export const articleV2 = (args: ArticleV2Props) => <ArticleComponent { ...args } />;
