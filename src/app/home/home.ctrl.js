export default class HomeController {
  constructor() {

    this.widgets = JSON.parse(sessionStorage.getItem('widget'))

    if (this.widgets == null) {
      this.widgets = [{
        id: '1',
        name: 'Widget-1',
        number: '1245',
        key1: 'key1 default',
        value1: 'value1 default',
        key2: 'key2 default',
        value2: 'value2 default',
        key3: 'key3 default',
        value3: 'value3 default',
        key4: 'key4 default',
        value4: 'value4 default',
        key5: 'key5 default',
        value5: 'value5 default',
      }];
      sessionStorage.setItem('widget', JSON.stringify(this.widgets))
    }


    this.confirmDelete = function (wid) {
      this.selectedId = wid.id;
      $('#myModal').modal('show');

    }

    this.delete = function () {
      var index = this.widgets.findIndex(x => x.id == this.selectedId);
      this.widgets.splice(index, 1);
      sessionStorage.setItem('widget', JSON.stringify(this.widgets))
    };

    this.detail = function (x) {
      sessionStorage.setItem('selectedwid', JSON.stringify(x))
    };

  }
}
