export default class DetailController {

    constructor() {

        this.digittoword = function(num) {

            var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
            var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


            if ((num = num.toString()).length > 9) return 'overflow';
            var n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
            if (!n) return; var str = '';
            str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
            str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
            str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
            str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
            str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
            return str;
        }

        this.widgets = JSON.parse(sessionStorage.getItem('widget'))

        this.seletedwidget = JSON.parse(sessionStorage.getItem('selectedwid'))

        if (this.seletedwidget != null) {
            this.seletedwidget.number = this.digittoword(this.seletedwidget.number);
        }
        this.detail = function (x) {
            sessionStorage.setItem('selectedwid', JSON.stringify(x))
            this.seletedwidget = x;
        };


        this.confirmDelete = function (wid) {
          
            this.selectedId = wid.id;
            $('#myModal').modal('show');

        }
        this.delete = function () {
            var index = this.widgets.findIndex(x => x.id == this.selectedId);
            this.widgets.splice(index, 1);
            sessionStorage.setItem('widget', JSON.stringify(this.widgets))
        }

      


    }
}
