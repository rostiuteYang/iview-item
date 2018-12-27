<template>
  <div class="Item-Three">
    <div class="it-title">
      <div class="it-left">方案名称:</div>
      <input type="text" class="it-mid" placeholder="请输入方案名称">
      <div class="it-right">查询</div>
    </div>
    <div class="it-body">
      <div class="ib-item-one">
        <div class="ib-img">
          <img src="https://s1.ax1x.com/2018/12/27/FRV55D.png" class="img">
        </div>
        <div class="ib-title">新增测试方案</div>
      </div>
      <div class="ib-item-two" v-for="(item,index) in userList" :key="index">
        <div class="it-top">
          <div class="it-up">{{item.tp}}</div>
          <div class="it-foot">{{item.tfoot}}</div>
        </div>
        <div class="it-body">
          <div class="ib-up">{{item.bup}}</div>
          <div class="ib-mid">{{item.bmid}}</div>
          <div class="ib-foot">
            <span>{{item.fspan}}</span>
            
            <img :src="item.img" class="img">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userList: [
        {
          tup: "淘宝首页-P0",
          tfoot: "产品方案-共0个埋点",
          bup: "创建人：张明",
          bmid: "技术负责人：淘小宝",
          fspan: "创建时间：2017-06-05 14：03;",
          img: "https://s1.ax1x.com/2018/12/27/FRZgJg.png"
        },
        {
          tup: "淘宝首页-P0",
          tfoot: "产品方案-共0个埋点",
          bup: "创建人：张明",
          bmid: "技术负责人：淘小宝",
          fspan: "创建时间：2017-06-05 14：03;",
          img: "https://s1.ax1x.com/2018/12/27/FRZgJg.png"
        },
        {
          tup: "淘宝首页-P0",
          tfoot: "产品方案-共0个埋点",
          bup: "创建人：张明",
          bmid: "技术负责人：淘小宝",
          fspan: "创建时间：2017-06-05 14：03;",
          img: "https://s1.ax1x.com/2018/12/27/FRZgJg.png"
        },
        {
          tup: "淘宝首页-P0",
          tfoot: "产品方案-共0个埋点",
          bup: "创建人：张明",
          bmid: "技术负责人：淘小宝",
          fspan: "创建时间：2017-06-05 14：03;",
          img: "https://s1.ax1x.com/2018/12/27/FRZgJg.png"
        },
        {
          tup: "淘宝首页-P0",
          tfoot: "产品方案-共0个埋点",
          bup: "创建人：张明",
          bmid: "技术负责人：淘小宝",
          fspan: "创建时间：2017-06-05 14：03;",
          img: "https://s1.ax1x.com/2018/12/27/FRZgJg.png"
        },
        {
          tup: "淘宝首页-P0",
          tfoot: "产品方案-共0个埋点",
          bup: "创建人：张明",
          bmid: "技术负责人：淘小宝",
          fspan: "创建时间：2017-06-05 14：03;",
          img: "https://s1.ax1x.com/2018/12/27/FRZgJg.png"
        },
        {
          tup: "淘宝首页-P0",
          tfoot: "产品方案-共0个埋点",
          bup: "创建人：张明",
          bmid: "技术负责人：淘小宝",
          fspan: "创建时间：2017-06-05 14：03;",
          img: "https://s1.ax1x.com/2018/12/27/FRZgJg.png"
        },
        {
          tup: "淘宝首页-P0",
          tfoot: "产品方案-共0个埋点",
          bup: "创建人：张明",
          bmid: "技术负责人：淘小宝",
          fspan: "创建时间：2017-06-05 14：03;",
          img: "https://s1.ax1x.com/2018/12/27/FRZgJg.png"
        },
        {
          tup: "淘宝首页-P0",
          tfoot: "产品方案-共0个埋点",
          bup: "创建人：张明",
          bmid: "技术负责人：淘小宝",
          fspan: "创建时间：2017-06-05 14：03;",
          img: "https://s1.ax1x.com/2018/12/27/FRZgJg.png"
        },
        {
          tup: "淘宝首页-P0",
          tfoot: "产品方案-共0个埋点",
          bup: "创建人：张明",
          bmid: "技术负责人：淘小宝",
          fspan: "创建时间：2017-06-05 14：03;",
          img: "https://s1.ax1x.com/2018/12/27/FRZgJg.png"
        },
        {
          tup: "淘宝首页-P0",
          tfoot: "产品方案-共0个埋点",
          bup: "创建人：张明",
          bmid: "技术负责人：淘小宝",
          fspan: "创建时间：2017-06-05 14：03;",
          img: "https://s1.ax1x.com/2018/12/27/FRZgJg.png"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.Item-Three {
  width: 100%;
  height: 1000px;
  background: #f5f5f5;
  margin-top: -50px;
  .it-title {
    display: flex;
    flex-flow: row;
    align-items: center;
    height: 100px;
    background: white;
    .it-left {
      font-weight: bold;
      font-size: 16px;
      letter-spacing: 1px;
      margin-left: 50px;
    }
    .it-mid {
      width: 400px;
      height: 40px;
      border: 1px solid #ebecec;
      margin-left: 100px;
      border-radius: 5px;
    }
    .it-right {
      cursor: pointer;
      background: #297cfc;
      color: white;
      border: 1px solid #297cfc;
      border-radius: 20px;
      width: 80px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 100px;
    }
  }
  .it-body {
    margin-top: 20px;
    height: 800px;
    display: flex;
    flex-wrap: wrap;
    .ib-item-one {
      margin-left: 15px;
      width: 460px;
      height: 245px;
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
      .ib-img {
        .img {
          width: 35px;
          height: 35px;
        }
      }
    }
    .ib-item-two {
      display: flex;
      flex-flow: column;
      width: 460px;
      height: 245px;
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 15px;
      .it-top {
        width: 430px;
        height: 100px;
        border: 1px solid white;
        border-bottom-color: #e9e9e9;
        display: flex;
        align-items: flex-start;
        flex-flow: column;
        justify-content: center;
        .it-up {
          margin-left: 15px;
          font-weight: bolder;
          font-size: 16px;
        }
        .it-foot {
          margin-top: 10px;
          margin-left: 15px;
        }
      }
      .it-body {
        margin-top: -10px;
        display: flex;
        align-items: flex-start;
        flex-flow: column;
        justify-content: space-evenly;
        width: 430px;
        height: 145px;
        font-size: 15px;
        .ib-up {
          margin-left: 15px;
        }
        .ib-mid {
          margin-left: 15px;
        }
        .ib-foot {
          display: flex;
          flex-flow: row;
          margin-left: 15px;
          .img {
            width: 20px;
            height: 20px;
            margin-left: 170px;
          }
        }
      }
    }
  }
}
</style>
