
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `http://new.xianbao.fun/zb_users/plugin/mochu_us/cmd.php?act=qiandao`;
const method = `POST`;
const headers = {
'Accept' : `application/json, text/javascript, */*; q=0.01`,
'Accept-Encoding' : `gzip, deflate`,
'Origin' : `http://new.xianbao.fun`,
'Cookie' : `PHPSESSID=cper6nnkm2qq8aivpolv5t2eqd; __51cke__=; __51laig__=1; __tins__21467067=%7B%22sid%22%3A%201693409867208%2C%20%22vd%22%3A%201%2C%20%22expires%22%3A%201693411667208%7D; is_mochu_us_load=mochu_us; timezone=8; addinfo=%7B%22chkadmin%22%3A1%2C%22chkarticle%22%3A0%2C%22levelname%22%3A%22%5Cu8bc4%5Cu8bba%5Cu8005%22%2C%22userid%22%3A%2222501%22%2C%22useralias%22%3A%22chenyixun%22%7D; cookie_islog=1; token_0ab40984=9fef7be8761b58c862ef45ac98e0bb6ec53b7582f995ee3e58bd18f6688713111695999509; username_0ab40984=chenyixun`,
'Connection' : `keep-alive`,
'Host' : `new.xianbao.fun`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Mobile/15E148 Safari/604.1`,
'Referer' : `http://new.xianbao.fun/Ucenter`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'X-Requested-With' : `XMLHttpRequest`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
