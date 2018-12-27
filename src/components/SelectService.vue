<template>
  <div class="service">
    <div class="ItemTwo-select">
      <div class="Is-title">
        <span class="Is-title-left">
          <span>{{title}}</span>
        </span>
        <div class="Is-title-right">
          <div class="ir-writing">{{writing}}</div>
        </div>
      </div>
      <div class="Is-body">{{body}}</div>
      <div class="Is-foot">
        <div class="Is-foot-left">
          <div>
            <img :src="img" class="img">
          </div>
          <span>{{assist}}</span>
        </div>
        <div class="Is-foot-right">
          <div>
            <img :src="img1" class="img">
          </div>
          <span>{{apply}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "a"
    },
    writing: {
      type: String,
      default: "a"
    },
    body: {
      type: String,
      default: "a"
    },
    img: {
      type: String,
      default: "a"
    },
    assist: {
      type: String,
      default: "a"
    },
    img1: {
      type: String,
      default: "a"
    },
    apply: {
      type: String,
      default: "a"
    }
  }
};
</script>
<style lang="less" scoped>
.service {
  .ItemTwo-select {
    display: flex;
    flex-flow: column;
    width: 600px;
    height: 200px;
    background: white;
    border: 1px solid white;
    border-radius: 5px;
    margin-top: 10px;
    margin-left: 10px;
    .Is-title {
      display: flex;
      flex-flow: row;
      height: 50px;
      align-items: center;
      .Is-title-left {
        font-size: 15px;
        font-weight: bold;
        width: 300px;
        span {
          margin-left: -200px;
        }
      }
      .Is-title-right {
        width: 300px;

        .ir-writing {
          width: 60px;
          height: 25px;
          background: #fcf1f6;
          color: #e16caa;
          margin-left: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #e16caa;
          border-radius: 14px;
        }
      }
    }
    .Is-body {
      height: 80px;
      color: #9ca5ae;
      margin-left: -280px;
    }
    .Is-foot {
      display: flex;
      flex-flow: row;
      font-size: 15px;
      .Is-foot-left {
        width: 300px;
        height: 74px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid white;
        border-top-color: #e8e8eb;
        border-right-color: #e8e8eb;
        span {
          font-size: 15px;
          margin-left: 10px;
        }
        .img {
          margin-top: 5px;
          width: 20px;
          height: 20px;
        }
      }
      .Is-foot-right {
        width: 300px;
        height: 74px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid white;
        border-top-color: #e8e8eb;
        span {
          font-size: 15px;
          margin-left: 10px;
        }
        .img {
          margin-top: 5px;
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}
</style>
