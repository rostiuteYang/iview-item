<template>
  <div class="ItemTwo">
    <select-service
      v-for="(item,index) in userList"
      :key="index"
      :title="item.title"
      :writing="item.writing"
      :body="item.body"
      :img="item.img"
      :assist="item.assist"
      :img1="item.img"
      :apply="item.apply"
    ></select-service>
    <!-- <div class="ItemTwo-select" v-for="(item,index) in userList" :key="index">
      <div class="Is-title">
        <span class="Is-title-left">
          <span>{{item.title}}</span>
        </span>
        <div class="Is-title-right">
          <div class="ir-writing">{{item.writing}}</div>
        </div>
      </div>
      <div class="Is-body">{{item.body}}</div>
      <div class="Is-foot">
        <div class="Is-foot-left">
          <div>
            <img :src="item.img" class="img">
          </div>
          <span>{{item.assist}}</span>
        </div>
        <div class="Is-foot-right">
          <div>
            <img :src="item.img1" class="img">
          </div>
          <span>{{item.apply}}</span>
        </div>
      </div>
    </div>-->
  </div>
</template>
<script>
import SelectService from "./SelectService";
export default {
  data() {
    return {
      userList: [
        {
          title: "服务名称",
          writing: "精选",
          body: "这里是一段相关的服务简介，介绍产品的功能、特点",
          img: "https://s1.ax1x.com/2018/12/26/FgLXc9.png",
          assist: "文档帮助",
          img1: "https://s1.ax1x.com/2018/12/26/FgLjXR.png",
          apply: "权限申请"
        },
        {
          title: "服务名称",
          writing: "精选",
          body: "这里是一段相关的服务简介，介绍产品的功能、特点",
          img: "https://s1.ax1x.com/2018/12/26/FgLXc9.png",
          assist: "文档帮助",
          img1: "https://s1.ax1x.com/2018/12/26/FgLjXR.png",
          apply: "权限申请"
        },
        {
          title: "服务名称",
          writing: "精选",
          body: "这里是一段相关的服务简介，介绍产品的功能、特点",
          img: "https://s1.ax1x.com/2018/12/26/FgLXc9.png",
          assist: "文档帮助",
          img1: "https://s1.ax1x.com/2018/12/26/FgLjXR.png",
          apply: "权限申请"
        },
        {
          title: "服务名称",
          writing: "精选",
          body: "这里是一段相关的服务简介，介绍产品的功能、特点",
          img: "https://s1.ax1x.com/2018/12/26/FgLXc9.png",
          assist: "文档帮助",
          img1: "https://s1.ax1x.com/2018/12/26/FgLjXR.png",
          apply: "权限申请"
        },
        {
          title: "服务名称",
          writing: "精选",
          body: "这里是一段相关的服务简介，介绍产品的功能、特点",
          img: "https://s1.ax1x.com/2018/12/26/FgLXc9.png",
          assist: "文档帮助",
          img1: "https://s1.ax1x.com/2018/12/26/FgLjXR.png",
          apply: "权限申请"
        },
        {
          title: "服务名称",
          writing: "精选",
          body: "这里是一段相关的服务简介，介绍产品的功能、特点",
          img: "https://s1.ax1x.com/2018/12/26/FgLXc9.png",
          assist: "文档帮助",
          img1: "https://s1.ax1x.com/2018/12/26/FgLjXR.png",
          apply: "权限申请"
        }
      ]
    };
  },
  components: { SelectService }
};
</script>
<style lang="less" scoped>
.ItemTwo {
  width: 100%;
  height: 430px;
  background: #f5f5f5;
  display: flex;
  flex-wrap: wrap;
  //   .ItemTwo-select {
  //     display: flex;
  //     flex-flow: column;
  //     width: 600px;
  //     height: 200px;
  //     background: white;
  //     border: 1px solid white;
  //     border-radius: 5px;
  //     margin-top: 10px;
  //     margin-left: 10px;
  //     .Is-title {
  //       display: flex;
  //       flex-flow: row;
  //       height: 50px;
  //       align-items: center;
  //       .Is-title-left {
  //         font-size: 15px;
  //         font-weight: bold;
  //         width: 300px;
  //         span {
  //           margin-left: -200px;
  //         }
  //       }
  //       .Is-title-right {
  //         width: 300px;

  //         .ir-writing {
  //           width: 60px;
  //           height: 25px;
  //           background: #fcf1f6;
  //           color: #e16caa;
  //           margin-left: 220px;
  //           display: flex;
  //           align-items: center;
  //           justify-content: center;
  //           border: 1px solid #e16caa;
  //           border-radius: 14px;
  //         }
  //       }
  //     }
  //     .Is-body {
  //       height: 80px;
  //       color: #9ca5ae;
  //       margin-left: -280px;
  //     }
  //     .Is-foot {
  //       display: flex;
  //       flex-flow: row;
  //       font-size: 15px;
  //       .Is-foot-left {
  //         width: 300px;
  //         height: 74px;
  //         display: flex;
  //         align-items: center;
  //         justify-content: center;
  //         border: 1px solid white;
  //         border-top-color: #e8e8eb;
  //         border-right-color: #e8e8eb;
  //         span {
  //           font-size: 15px;
  //           margin-left: 10px;
  //         }
  //         .img {
  //           margin-top: 5px;
  //           width: 20px;
  //           height: 20px;
  //         }
  //       }
  //       .Is-foot-right {
  //         width: 300px;
  //         height: 74px;
  //         display: flex;
  //         align-items: center;
  //         justify-content: center;
  //         border: 1px solid white;
  //         border-top-color: #e8e8eb;
  //         span {
  //           font-size: 15px;
  //           margin-left: 10px;
  //         }
  //         .img {
  //           margin-top: 5px;
  //           width: 20px;
  //           height: 20px;
  //         }
  //       }
  //     }
  //   }
}
</style>

