/**
 * Created by caner on 15.02.2016.
 */
/**
 * Created by caner on 15.02.2016.
 */
App ={};

App.welcomePage={
    openLogin:function(){

    },
    openRegister:function(){

    }
};
App.route={
    parse:function(button){
        that =  $(button);

        var url = that.attr("url");
        var method = that.attr("method");
        if(that.attr("is_modal")!=undefined)
            var is_modal = that.attr("is_modal");
        else
            var is_modal = "get";
        var data = that.attr("data");
        var header = that.attr("header");
        App.route.init(url,method,is_modal,data,header);
    },
    init:function(url,method,is_modal,data,header){
        var error=function(){
            console.log("error in ajax");
        };
        var success=function(data){
            if(is_modal)
                App.openModal.init(header,data);
        };
        App.ajax.init(url,method,data,success,error);

    }
};
App.openModal = {
    modal: $(".modal"),
    modal_head: $(".modal-title"),
    modal_content: $(".modal-body"),
    init: function (header, content) {
        this.modal_head.html(header);
        this.modal_content.html(content);
        this.modal.modal("show");

    }
};
App.ajax = {
    init: function (url, type, data, success_function, error_function) {
        $.ajax({
            url: url,
            type: type,
            data: data,
            success: success_function,
            error: error_function

        });
    }
};