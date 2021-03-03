const defHeader= {
  res: [
    {field:'Content-Type' ,  val: 'application/json;charset=utf-8' }
  ],
}
// 去URL参数
function toUrlQuestion(data) {
  if(! data.indexOf('?')+ 1) return  ''
  try {
    return data.substring(data.indexOf('?') + 1)
  } catch (e) {
    return  ''
  }

}

const data = {
  data: '',
  all: function(str = '', c = (req, res, next) =>{}) {
    try {
      this.data.all(str, function(req, res, next) {
        defHeader.res.forEach(item => {
          res.header(item.field, item.val);
        })
        req.urlQurey = toUrlQuestion(req.url)
        c(req, res, next)
      })
    }catch (e) {
      console.log('载体为空')
    }
  }
}

export default data
