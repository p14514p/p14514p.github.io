window.config = {
  list: {},
  version: '1.7.6',
  host: "https://vpn.shaoming.asia", // 后端接口地址,务必用https协议
  title: "奶酪加速", // 网站标题
  logo: '', // 网站logo
  logo2: '', // 网站logo
  language: 'zh', //设置默认访问语言：zh, en
  email: 'j68769778@gmail.com',
  crisp: '', //填写了会加载crisp
  // 系统公告弹窗
  index_notice: `<div>
      <h2>欢迎使用奶酪加速</h2>
      <div>高速低延迟无卡顿，每天只要0.3元起！</div>
      <div style="font-weight: 600; color: #007bff;margin:12px 0;">
          ➡️TG交流群：<a href="https://t.me/NAILAOVPN" target="_blank">https://t.me/NAILAOVPN</a>
      </div>
      <hr>
      <h2>邀请好友享首次付费<span style="color: #e74c3c;">25%</span>返佣</h2>
      <p>创建自身邀请码，邀请好友注册时填写您的邀请码<br>
          好友首次付费时，即可享有该笔订单金额<span style="color: #e74c3c;">10%</span>佣金<br>
          赶紧邀请好友一同使用奶酪加速上网吧！</p>
      <button
          style="color:#007bff; background-color:#fff; border:1px solid #007bff; padding:8px 22px; border-radius:8px; cursor:pointer;"
          onclick="window.location.href=\'/#/user/invite\'">
          立即邀请
      </button>
  </div>`,
  currency: 'CNY', //货币符号
  currency_symbol: '￥', //货币单位
  telegram_discuss_link: 'https://t.me/NAILAOVPN', //TG频道
  is_telegram: 1, //1-开启TG绑定，0-关闭
  commission_withdraw_method: [''], //提现方式
  cloudflare: {
    siteKey:"0x4AAAAAAAwzLrOJ1PAfzXNL",  //这个非空值,发送注册邮件会弹出Cloudflare Turnstile验证
    token:"0x4AAAAAAAwzLh4bED3jH09KiY52HcgTtSo",
  },
  // 客户端列表
  clients: {
    windows: {
      download_url: '/articles/read?id=6', // 下载地址
      version: '1.0.01', // 教程地址
    },
    android: {
      download_url: '/articles/read?id=6',
      version: '1.0.01',
    },
  },

  show_reg_tos: 0,//0不显示注册页面的服务条款，1显示
  //购买页面
  coupon_open: 0, //0不显示输入优惠劵输入框，1显示
  discount: '',  //这个非空值则会弹窗 discount_img
  discount_img: '', //这个非空值购买页面则会弹窗 discount_img
  // v2b的后端支持礼品卡功能
  giftCard: {
    open: 0, //0-关闭兑换码功能，1-开启
    title: '没有兑换码？ 点我购买',
    url: 'http://www.baidu.com',
  },
  // 知识库需要展示视频的知识库ID，和视频URL
  videoList: [
    {
      id: 1, url: '/download/video/ios.mp4'
    },
    {
      id: 6, url: '/download/video/ios.mp4'
    },
  ],
}
