<template>
  <div class="select-item">
    <div class="tabs-iview-item">
      <div class="ti-img">
        <img :src="img" class="img">
      </div>
      <div class="ti-right">
        <div class="ti-title">{{title}}</div>
        <div class="ti-describe">
          <span class="span1">{{span1}}</span>
          <div class="span2">{{span2}}</div>
        </div>
        <div class="ti-guide">
          <span class="span1">{{span3}}</span>
          <span class="span2">{{span4}}</span>
        </div>
        <div class="ti-button">
          <span>{{button}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    img: {
      type: String,
      default: "bbb"
    },
    span1: {
      type: String,
      default: "bbb"
    },
    span2: {
      type: String,
      default: "aaa"
    },
    span3: {
      type: String,
      default: "aaa"
    },
    span4: {
      type: String,
      default: "aaa"
    },
    title: {
      type: String,
      default: "aaa"
    },
    button: {
      type: String,
      default: "aaa"
    }
  }
};
</script>
<style lang="less" scoped>
.select-item {
  .tabs-iview-item {
    width: 900px;
    margin-left: 10px;
    height: 280px;
    background: #f6f6f6;
    margin-top: 10px;
    display: flex;
    flex-flow: row;
    align-items: center;
    .ti-img {
      width: 150px;
      height: 249px;
      .img {
        width: 150px;
        height: 249px;
      }
    }
    .ti-right {
      display: flex;
      flex-flow: column;
      align-items: flex-start;
      margin-left: 15px;
      margin-top: 30px;
      height: 260px;
      width: 50%;
      .ti-title {
        color: black;
        font-size: 18px;
      }
      .ti-describe {
        display: flex;
        flex-flow: row;
        width: 260px;
        height: 44px;
        margin-top: 15px;
        .span1 {
          width: 60px;
          color: black;
        }
        .span2 {
          display: flex;
          flex-wrap: wrap;
          color: #999999;
          margin-left: 15px;
          width: 200px;
        }
      }
      .ti-guide {
        display: flex;
        flex-flow: row;
        width: 230px;
        height: 30px;
        .span1 {
          width: 60px;
          color: black;
        }
        .span2 {
          color: #5485f7;
          margin-left: 14px;
          width: 140px;
        }
      }
      .ti-button {
        cursor: pointer;
        width: 90px;
        height: 28px;
        background: #66aaff;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 14px;
        margin-top: 80px;
        margin-left: 230px;
      }
    }
  }
}
</style>
