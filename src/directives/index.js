import Vue from 'vue';

Vue.directive('frontEndVerify', {
    bind(el, bingding, vnode) {
        // console.log();
        /*生成4位随机数*/
        function rand() {
            var str = "abcdefghijklmnopqrstuvwxyz0123456789";
            var arr = str.split("");
            var validate = "";
            var ranNum;
            for (var i = 0; i < 4; i++) {
                ranNum = Math.floor(Math.random() * 36);   //随机数在[0,35]之间
                validate += arr[ranNum];
            }
            return validate;
        }

        /*干扰线的随机x坐标值*/
        function lineX() {
            var ranLineX = Math.floor(Math.random() * 90);
            return ranLineX;
        }

        /*干扰线的随机y坐标值*/
        function lineY() {
            var ranLineY = Math.floor(Math.random() * 40);
            return ranLineY;
        }

        function getRandomColor() {
            return "rgb(" + Math.round(Math.random() * 180) + "," + Math.round(Math.random() * 180) + ',' + Math.round(Math.random() * 10) + ')';
        }

        function clickChange() {
            var cxt = el.getContext('2d');
            cxt.fillStyle = '#fff';
            cxt.fillRect(0, 0, 90, 40);

            /*生成干扰线5条*/
            for (var j = 0; j < 5; j++) {
                cxt.strokeStyle = getRandomColor();
                cxt.beginPath();    //若省略beginPath，则每点击一次验证码会累积干扰线的条数
                cxt.moveTo(lineX(), lineY());
                cxt.lineTo(lineX(), lineY());
                cxt.lineWidth = 0.5;
                cxt.closePath();
                cxt.stroke();
            }

            let string = rand();
            vnode.context[bingding.expression] = string
            cxt.font = 'bold 20px Arial';
            for (let i = 0; i < string.length; i++) {
                cxt.fillStyle = getRandomColor();
                cxt.fillText(string[i], 10 + 16 * i, 25);   //把rand()生成的随机数文本填充到canvas中   
            }
            // cxt.fillText('knkn', 25, 25);   //把rand()生成的随机数文本填充到canvas中      
        }

        clickChange();

        /*点击验证码更换*/
        el.onclick = function (e) {
            e.preventDefault();   //阻止鼠标点击发生默认的行为
            clickChange();
        };
    }
})