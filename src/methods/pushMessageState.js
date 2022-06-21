import eventBus from '@/methods/eventBus.js'

export default function (res, title = '更新', content='預設內容') {
  if (res) {
    console.log('成功至pushMessageState.js', title)
    eventBus.emit('push-message', {
      title: `${title}成功!`,
      titleStyle: 'green',
      content: `${content}成功!`,
      contentStyle: '#aaa'
    })
  } else {
    // 有些失敗訊息是字串，有些則是陣列，因此在此統一格式
    // const message = typeof response.data.message === 'string' ? [response.data.message] : response.data.message
    eventBus.emit('push-message', {
      title: `${title}失敗!`,
      titleStyle: 'red',
      content: `${content}失敗!`,
      contentStyle: '#aaa'
    //   content: message.join('、')
    })
  }
}