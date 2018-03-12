import {getters} from './getters'
import { actions } from './actions'
import {mutaions} from './mutation'

const state={
  title:'doubanMovie',//App标题
  movingList:{
    subject:[]//正在上映列表
  },
  searchList:{ //搜索列表
    subject:[]
  },
  searchText:''//搜索内容
}

export default{
  state,
  getters,
  actions,
  mutations
}
