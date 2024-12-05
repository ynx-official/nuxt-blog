<script setup lang="ts">
import {getArticleById} from "~/api/article";

const route = useRoute()
const {path} = useRoute()
const articleId = route.params.articleId as string

const article = await getArticleById(Number(articleId)).then((res) => {
  return res.data
});

if (article === null) {
  navigateTo('/404')
}

console.log("文章详情数据信息: ", article)

useHead({
  title: article.articleTitle || '',
  meta: [
    {name: 'description', content: article.articleTitle},
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    {property: 'og:site_name', content: 'Riyad\'s Blog'},
    {hid: 'og:type', property: 'og:type', content: 'website'},
    {
      property: 'og:url',
      content: `https://mrsunshine.cn/${path}`,
    },
    {
      property: 'og:title',
      content: article.articleTitle,
    },
    {
      property: 'og:description',
      content: article.articleTitle,
    },
    {
      property: 'og:image',
      content: article.articleCover,
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    {name: 'twitter:site', content: '@qdnvubp'},
    {name: 'twitter:card', content: 'summary_large_image'},
    {
      name: 'twitter:url',
      content: `https://mrsunshine.cn/${path}`,
    },
    {
      name: 'twitter:title',
      content: article.articleTitle,
    },
    {
      name: 'twitter:description',
      content: article.articleTitle,
    },
    {
      name: 'twitter:image',
      content: article.articleCover || article.articleCover,
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://mrsunshine.cn/${path}`,
    },
  ],
})

// Generate OG Image
defineOgImageComponent('Test', {
  headline: 'Greetings 👋',
  title: article.articleTitle || '',
  description: article.articleTitle || '',
  link: article.articleCover,
})

</script>

<template>
  <div class="px-6 container max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12 ">
    <div class="col-span-12 lg:col-span-9">
      <BlogHeader
        :title="article.articleTitle"
        :image="article.articleCover"
        :alt="article.articleCover"
        :date="article.createTime"
        :description="article.articleTitle"
        :tags="article.tagVOList"
      />
      <div
        class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg
        prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"
      >
<!--        <div>-->
<!--          {{article?.articleContent}}-->
<!--        </div>-->


<!--        <ContentRenderer v-if="article" :value="article">-->
<!--          <template #empty>-->
<!--            <p>No content found.</p>-->
<!--          </template>-->
<!--        </ContentRenderer>-->

          <mavon-editor v-model="article.articleContent" style="width: 100%; height: 800px;"
                        :ishljs="true"
          />
      </div>
    </div>
<!--    <BlogToc/>-->
  </div>
</template>
