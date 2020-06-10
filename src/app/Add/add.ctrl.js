export default class AddController {


  constructor() {
    this.widgets = JSON.parse(sessionStorage.getItem('widget'))
    this.wdid = this.widgets.length + 1;
    this.wdname = '',
      this.wdnumber = '',
      this.wdkey1 = '',
      this.wdvalue1 = '',
      this.wdkey2 = '',
      this.wdvalue2 = '',
      this.wdkey3 = '',
      this.wdvalue3 = '',
      this.wdkey4 = '',
      this.wdvalue4 = '',
      this.wdkey5 = '',
      this.wdvalue5 = '',


   
    this.Add = function () {

      var newwidget = {
        id: this.wdid,
        name: this.wdname,
        number: this.wdnumber,
        key1: this.wdkey1,
        value1: this.wdvalue1,
        key2: this.wdkey2,
        value2: this.wdvalue2,
        key3: this.wdkey3,
        value3: this.wdvalue3,
        key4: this.wdkey4,
        value4: this.wdvalue4,
        key5: this.wdkey5,
        value5: this.wdvalue5
      }
   
      this.widgets.push(newwidget);
 
      sessionStorage.setItem('widget', JSON.stringify(this.widgets))
      location.href = '/';
    };

  }
}
