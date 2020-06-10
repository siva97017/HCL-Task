export default class EditController {


  constructor() {
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

      this.seletedwidget = JSON.parse(sessionStorage.getItem('selectedwid'))
    if (this.seletedwidget != null) {

      this.wdid = this.seletedwidget.id;
      this.wdname = this.seletedwidget.name;
      this.wdnumber = this.seletedwidget.number;
      this.wdkey1 = this.seletedwidget.key1;
      this.wdvalue1 = this.seletedwidget.value1;
      this.wdkey2 = this.seletedwidget.key2;
      this.wdvalue2 = this.seletedwidget.value2;
      this.wdkey3 = this.seletedwidget.key3;
      this.wdvalue3 = this.seletedwidget.value3;
      this.wdkey4 = this.seletedwidget.key4;
      this.wdvalue4 = this.seletedwidget.value4;
      this.wdkey5 = this.seletedwidget.key5;
      this.wdvalue5 = this.seletedwidget.value5;
    }

    this.update = function () {
      this.widgets = JSON.parse(sessionStorage.getItem('widget'))

      var index = this.widgets.findIndex(x => x.id == this.wdid);

      this.widgets[index].id = this.wdid;
      this.widgets[index].name = this.wdname;
      this.widgets[index].number = this.wdnumber;
      this.widgets[index].key1 = this.wdkey1;
      this.widgets[index].value1 = this.wdvalue1;
      this.widgets[index].key2 = this.wdkey2;
      this.widgets[index].value2 = this.wdvalue2;
      this.widgets[index].key3 = this.wdkey3;
      this.widgets[index].value3 = this.wdvalue3;
      this.widgets[index].key4 = this.wdkey4;
      this.widgets[index].value4 = this.wdvalue4;
      this.widgets[index].key5 = this.wdkey5;
      this.widgets[index].value5 = this.wdvalue5;
      sessionStorage.setItem('widget', JSON.stringify(this.widgets))
     
      location.href = '/';
    };
  }
}
