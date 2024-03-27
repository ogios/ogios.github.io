<script lang="ts" setup>
import Tail from '@/components/Tail.vue'
import PageSection from '@/components/PageSection.vue'
</script>

<template>
  <PageSection>
    <h1 class="title">Home</h1>
    <section class="clearfix article">
      <img class="right head_img" src="/imgs/home_amber.gif" width="200px" alt="" />

      <h2>你好</h2>
      <span class="time">2023-06-24</span>
      <div class="a-content">
        <p>这是一位还在上学的人，大三了还在混吃等死的人。</p>
        <p>
          专业是数据科学与大数据技术，但自学的主要是开发(而且学的很拉)。
          平常会逆向点网站写写脚本啥的，最近刚完成的就是另外一个火起来没多久的大语言模型的api逆向:
        </p>
        <p>
          <a href="https://huggingface.co/">Huggingface</a>
          的
          <a href="https://huggingface.co/chat">Huggingchat</a>
          ，可以去我的仓库中查看:
          <a href="https://github.com/ogios/huggingchat-api"> huggingchat-api </a>
          。
        </p>
        <p>
          我正在准备实习和考研的事情，还有期末考试。
          不得不说，实习根本找不到啊www，投了一大堆，结果却没几个回，回了的还有些是机器人，唉。
        </p>
        <p>话说话来，我再多介绍一点自己:</p>
        <p>我比较喜欢看漫画，听歌之类的，还有看小说。不过我觉得这些大部分人应该都会有提点，不是需要说出来的。</p>
        <p>
          主要会Python/Java，C语言会，但还欠缺练习，学过数据结构。
          前端会一些Vue框架之类的，对计算机网络和网安感兴趣但会的不多。
          全栈开发的经历有一些，但是大二那会很久以前的了，不太好意思展示出来。
        </p>
        <p>
          对专业的话，部分内容倒是蛮感兴趣的，比如爬虫，网络编程，深度学习啥的，
          不过个人来说啊，我觉得自己还欠缺了很多，只是相比同专业同年级的人可能会的稍微多一点。
        </p>
        <p>
          这是我在端午节假期抽空做的一个网页，也是第一次做类似个人博客一般的前端网页，之后大概会把这里部署到github上然后当作个人网站一样的吧。
        </p>
      </div>
    </section>

    <hr />
    <Tail></Tail>
  </PageSection>
</template>

<style lang="scss" scoped>
.a-content {
  text-indent: 2em;
}

.article {
  padding-left: 1em;
  padding-right: 1em;
  font-family: 'Times New Roman', 'Source Han Serif SC VF', serif;

  p {
    margin: 0;
    padding: 0;
    font-weight: 0;
    font-size: small;
  }

  .time {
    font-size: x-small;
    font-family: 'Lora', serif;
    color: #9b9b9b;
  }

  a {
    color: black;
    outline: none;
    position: relative;
    /*text-decoration: none;*/
    transition: color 0.1s ease;
  }

  a::after {
    outline: none;
    --scale: 0;
    content: '';
    position: absolute;
    /*position: relative;;*/
    left: 0;
    right: 0;
    top: 100%;
    height: 1px;
    background: #000000;
    transform: scaleX(var(--scale));
    transition: -webkit-transform 0.15s cubic-bezier(0.1, 1, 1, 1);
    text-decoration: none;
  }
  a:hover::after {
    text-decoration: none;
    --scale: 1;
  }
}

.head_img {
  display: block;
  margin: auto;
}

@media screen and (min-width: 780px) {
  .article p {
    margin: 0;
    padding: 0;
    font-size: medium;
  }

  .article .time {
    font-size: small;
    font-family: 'Lora', serif;
    color: #9b9b9b;
  }

  .head_img {
    float: right;
    margin: 1em 0 1em 1em;
  }
}
</style>
