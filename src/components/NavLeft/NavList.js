const navList = [{
    title:'首页',
    path:'/admin/home'
  },
  {
    title:'数据统计',
    path:'/admin/data'
  },
  {
    title:'商品管理',
    path:'/admin/goods',
    children:[
      {
        title:'商品列表',
        path:'/admin/goods/list'
      }, 
      {
        title:'不知道填什么',
        path:'/admin/goods/dontKnow'
      }
    ]
  },
  {
    title:'用户管理',
    path:'/admin/user'
  }
  ]
export default navList;