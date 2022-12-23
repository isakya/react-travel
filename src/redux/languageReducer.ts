export interface LanguageState {
  language: 'en' | 'zh'
  languageList: {name: string, code: string}[]
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    {name: '中文', code: 'zh'},
    {name: 'English', code: 'en'},
  ]
}

export default (state = defaultState, action) => {
  if(action.type === 'change_language') {
    // 不能直接修改state，只能利用它创建新的数据
    const newState = {...state, language: action.payload}
    return newState
  }
  return state
}