<script lang="ts" setup>

import {getArticlePage} from "~/api/article";
import type {IArticle} from "~/api/article/types";

const { data } = await getArticlePage({
  size: 6,
});
const articles = ref<IArticle[]>(data.records);
useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        'Welcome To My Blog Site. Get Web Development, Javascript, Typescript, NodeJs, Vue, and Nuxt, Related Articles, Tips, Learning resources and more.',
    },
  ],
  titleTemplate: 'Riyad\'s Blog - %s',
})
</script>

<template>
  <div class="px-4">
    <div class="flex flex-row items-center space-x-3 pt-5 pb-3">
      <Icon name="mdi:star-three-points-outline" size="2em" class="text-black dark:text-zinc-300  " />
      <h2 class="text-4xl font-semibold text-black dark:text-zinc-300  ">
        Trending Post
      </h2>
    </div>
    <div class="grid grid-cols-1 ">
      <template v-for="article in articles" :key="article.articleTitle">
        <ArchiveCard
          :path="'article/' + article.id.toString()"
          :title="article.articleTitle"
          :date="article.createTime"
          :description="article.articleContent"
          :image="article.articleCover"
          :alt="article.articleCover"
          :og-image="article.articleCover"
          :published="true"
        />
      </template>
      <template v-if="articles?.length === 0">
        <BlogEmpty />
      </template>
    </div>
  </div>
</template>
