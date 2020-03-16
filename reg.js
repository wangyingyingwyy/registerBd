$(function () {  
    var $name=$('#name'),
        $nameMsg=$('#name-msg'),
        $phone=$('#phone'),
        $phoneMsg=$('#phone-msg'),
        $pwd=$('#pwd'),
        $pwdMsg=$('#pwd-msg'),
        $code=$('#code'),
        $codeMsg=$('#code-msg'),
        $codetx=$('#codetx'),
        $register=$('#register');
        var isCode=false;
        var i=60;
        var time;
    $name.focus();
    // 表单校验
    $register.click(function () {  
        if(!checkName($name) || !checkPhone($phone) || !checkPwd($pwd) || !checkCode($code)){
            return;
        }
        alert("注册成功");
        $codetx.val('获取验证码')
        clearInterval(time);
    })
    // 字段校验
    $name.focusout(function () {  
        if(!checkName($name)){
            $name.select();
        }
    })
    $phone.focusout(function () {  
        if(!checkPhone($phone)){
            $phone.select();
        }
    })
    $pwd.focusout(function () {  
        if(!checkPwd($pwd)){
            $pwd.select();
        }
    })
    // 获取验证码的js效果
    $codetx.click(function () { 
        if(checkPhone($phone)){
            time=setInterval(function () {  
                i--;
                if(i==0){
                    clearInterval(time);
                    $codeMsg.html('请求超时，请稍后再试');
                    $codetx.val('获取验证码');
                    $codetx.removeAttr('disabled');
                    i=5;
                }else{
                    $codetx.attr('disabled','true');
                    $codeMsg.html('');
                    $codetx.val('重发验证('+i+'s)');
                }
            },1000)
        } 
    })
    // 用户名
    function checkName(data) {  
        if(data.val()===''){
            $nameMsg.html('用户名不能为空');
            return false;
        }
        if(!(/^(?![0-9]+$)[0-9a-zA-Z_\u4e00-\u9fa5]+$/.test(data.val()))){
            $nameMsg.html("用户名仅支持中英文、数字和下划线,且不能为纯数字");
            return false;
        }
        $nameMsg.html('')
        return true;
    }
    // 手机号
    function checkPhone(data) { 
        if(data.val()===''){
            $phoneMsg.html("手机号不能为空");
            return false;
        }
        if(!(/^1[3|4|5|7|8|9][0-9]{9}$/.test(data.val()))){
            $phoneMsg.html("手机号格式不正确");
            return false;
        }
        $phoneMsg.html('')
        return true;
    }
    // 密码
    function checkPwd(data) { 
        if(data.val()===''){
            $pwdMsg.html("密码不能为空");
            return false;
        }
        if(!(/(?!^[0-9]+$)(?!^[a-zA-Z]+$)(?!^[^a-zA-Z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test(data.val()))){
            $pwdMsg.html("密码设置不符合要求");
            return false;
        }
        $pwdMsg.html('')
        return true;
    }
    // 验证码
    function checkCode(data) {  
        if(data.val()===''){
            $codeMsg.html('请求超时，请稍后再试')
            return false;
        }
        $codetx.html('')
        return true;
    }
})