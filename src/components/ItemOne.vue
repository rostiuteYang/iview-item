<template>
  <div class="mountNode">
    <div class="mountNode-title">
      <span class="title1">发布新作品</span>
      <span class="title2">内容质量与粉丝效果好的作品可以得到更多频道曝光?</span>
    </div>
    <Tabs value="name1" class="tabs">
      <TabPane label="帖子" class="name1" icon="logo-apple">
        <div class="tabs-iview">
          <select-item
            v-for="(item,index) in userList"
            :key="index"
            :img="item.img"
            :title="item.title"
            :span1="item.span1"
            :span2="item.span2"
            :span3="item.span3"
            :span4="item.span4"
            :button="item.button"
          ></select-item>
        </div>
      </TabPane>
      <TabPane label="短视频" class="name2" icon="logo-tux">
        <div class="tabs-iview">
          <select-item
            v-for="(item,index) in userList"
            :key="index"
            :img="item.img"
            :title="item.title"
            :span1="item.span1"
            :span2="item.span2"
            :span3="item.span3"
            :span4="item.span4"
            :button="item.button"
          ></select-item>
        </div>
      </TabPane>
      <TabPane label="搭配" class="name3" icon="logo-windows">标签三的内容</TabPane>
      <TabPane label="单品" class="name4" icon="logo-tux">标签4的内容</TabPane>
      <TabPane label="问答" class="name5" icon="logo-apple">标签5的内容</TabPane>
      <TabPane label="转发" class="name6" icon="logo-windows">标签6的内容</TabPane>
    </Tabs>
  </div>
</template>
<script>
import SelectItem from "./SelectItem";
export default {
  data() {
    return {
      userList: [
        {
          img: "https://s1.ax1x.com/2018/12/25/Fc6TsA.jpg",
          title: "长文章",
          span1: "模板描述",
          span2: "创作自由度高。创作自由度高。",
          span3: "创作指导",
          span4: "好的长文章应该怎么写？",
          button: "立即创作"
        },
        {
          img: "https://s1.ax1x.com/2018/12/25/Fc6TsA.jpg",
          title: "长文章",
          span1: "模板描述",
          span2: "创作自由度高。创作自由度高。",
          span3: "创作指导",
          span4: "好的长文章应该怎么写？",
          button: "立即创作"
        },
        {
          img: "https://s1.ax1x.com/2018/12/25/Fc6TsA.jpg",
          title: "长文章",
          span1: "模板描述",
          span2: "创作自由度高。创作自由度高。",
          span3: "创作指导",
          span4: "好的长文章应该怎么写？",
          button: "立即创作"
        },
        {
          img: "https://s1.ax1x.com/2018/12/25/Fc6TsA.jpg",
          title: "长文章",
          span1: "模板描述",
          span2: "创作自由度高。创作自由度高。",
          span3: "创作指导",
          span4: "好的长文章应该怎么写？",
          button: "立即创作"
        },
        {
          img: "https://s1.ax1x.com/2018/12/25/Fcaxx0.jpg",
          title: "长文章",
          span1: "模板描述",
          span2: "创作自由度高。创作自由度高。",
          span3: "创作指导",
          span4: "好的长文章应该怎么写？",
          button: "立即创作"
        }
      ]
    };
  },
  components: { SelectItem }
};
</script>
<style lang="less" scoped>
.mountNode {
  width: 100%;
  height: 1000px;
  .mountNode-title {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: start;
    margin-top: -40px;
    .title1 {
      font-size: 16px;
      margin-left: 15px;
    }
    .title2 {
      margin-left: 15px;
      color: #9999b3;
    }
  }
  .tabs {
    margin-left: 15px;
    margin-top: 20px;
    .tabs-iview {
      width: 100%;
      height: 900px;
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>

