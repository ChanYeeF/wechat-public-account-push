/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  
  USE_PASSAGE: 'wechat-test',

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxed108a218f08e0d6',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'a3a0e857da6279e60d557522312513d5',

  PROVINCE: '河南',
  CITY: '平顶山',

  USERS: [
    {
      // 想要发送的人的名字
      name: '凡凡小朋友',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o-mR75kCNuQBVAE8-Vmd_UoGGquQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Y4yoKGwJ5JbZ2JMsaYzj7xfD1CBCh1q2f_cEbHobHbM',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-20',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '凡凡小朋友', year: '1998', date: '05-26',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-01-01' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'vvlNKF2jlCS3msfX3ySosy4jeiUMmWHEJgYj1lCvMi0',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o-mR75kCNuQBVAE8-Vmd_UoGGquQ',
    }
  ],

}

module.exports = USER_CONFIG

