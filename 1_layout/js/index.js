window.onload = function () {
  //获取底部所有a
  let tabItems = document.querySelectorAll('footer .tabItem')
  //获取所有section
  let sections = document.querySelectorAll('#content section')
  //上一个被选中的下标
    let preIndex = 0
    for (let i = 0; i < tabItems.length; i++) {
      tabItems[i].onclick = function () {
        tabItems[preIndex].className = 'tabItem'
        sections[preIndex].className = ''
        this.className = 'tabItem active'
        sections[i].className = 'on'
        preIndex = i
        console.log(preIndex);
      }


    }

  //轮播图
  const mySwiper = new Swiper('.swiper-container', {
    autoplay: false,//可选选项，自动滑动
    loop : true,
    pagination: {
      el: '.swiper-pagination',
    }
  })

  //评分
  const starItems = document.querySelectorAll('.shop_rating_order_left .stars01 .star-item')
  const ratingTexts = document.querySelectorAll('.shop_rating_order_left .rating_section span')
  //模拟后台得到的数据
  const rating = '4.5'
  //设置评分
  ratingTexts.forEach(item => {
    item.innerText = rating
  })
  const onNum = Math.floor(rating*1)
  const halfNum = Math.random(rating*1-onNum)
  const offNum = starItems.length-onNum-halfNum
  for (let i = 0; i < starItems.length; i++) {
    if (i < onNum) {
      starItems[i].className = 'star-item on'
    }else if (i < onNum + halfNum) {
      starItems[i].className = 'star-item half'
    }else{
      starItems[i].className = 'star-item off'
    }
  }


  //登陆
  const headerLogin = document.querySelector('.msite_header .header_login')
  const loginContainer = document.querySelector('#content .loginContainer')
  headerLogin.onclick = function () {
    document.getElementById('content').className = 'off'
    document.getElementsByTagName('footer')[0].className = 'off'
    document.getElementById('loginContainer').className =''
  }

  //密码登陆与短信登陆切换
  const aLogins = document.querySelectorAll('.loginInner .login_header_title a')
  const loginStyles = document.querySelectorAll('.login_content>div')
  //上一次选中的下标
  let pre_index = 0
  for (let i = 0; i < aLogins.length; i++) {
    aLogins[i].onclick = function () {
      aLogins[pre_index].className = ''
      loginStyles[pre_index].className = ''
      this.className = 'on'
      loginStyles[i].className = 'on'
      pre_index = i
    }
  }
  //密码登陆中切换字母
  const switchButton = document.querySelector('.login_verification .switch_button')
  //定义一个状态,表示当前不是字母状态
  let abcFlag = false
  switchButton.onclick = function () {
    if (!abcFlag) {
      switchButton.className = 'switch_button'
    }else{
      switchButton.className = 'switch_button on_button'
    }
    abcFlag = !abcFlag
  }


  //从登陆退回
  const jiantou = document.querySelector('.go_back .icon-jiantou2')
  jiantou.onclick = function () {
    document.getElementById('content').className = ''
    document.getElementsByTagName('footer')[0].className = ''
    document.getElementById('loginContainer').className ='off'
  }
}
