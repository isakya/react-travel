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
  switch(action.type) {
    case 'change_language':
      // 不能直接修改state，只能利用它创建新的数据
      return {...state, language: action.payload}
    case 'add_language':
      return {...state, languageList: [...state.languageList, action.payload]}
    default: 
      return state
  }
}