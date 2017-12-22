import $ from 'jquery';

class Interface{
  /**获取彩票期号*/
  getOmit (issue) {
    return new Promise((resolve,reject) => {
      $.ajax({
        url: '/get/omit',
        data: {
          issue
        },
        dataType: 'json',
        succsee (res) {
          this.setOmit(res.data);
          resolve(self,res)
        },
        error (err) {
          reject(err);
        }
      })
    });
  }

  /**获取开奖号码*/
  getOpenCode(issue) {
    let self = this;
    return new Promise((resolve,reject) => {
      $.ajax({
        url: '/get/opencode',
        data: {
          issue
        },
        dataType: 'json',
        success (res) {
          self.setOpenCode(res.data)
          resolve(res);
        },
        error (err) {
          reject(err);
        }
      })
    });
  }

  getState(issue) {
    return new Promise((resolve,reject) => {
      $.ajax({
        url: '/get/state',
        data: {
          issue
        },
        dataType: 'json',
        success (res) {
          resolve(res);
        },
        error (err) {
          reject(err);
        }
      })
    });
  }
}
export default Interface