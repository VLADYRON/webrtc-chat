(function(){var a,b,c,d;c=null,d=null,b=null,document.querySelector("#connect").addEventListener("click",function(){return d=document.querySelector("#userid").value,c=PUBNUB.init({publish_key:"pub-c-7070d569-77ab-48d3-97ca-c0c3f7ab6403",subscribe_key:"sub-c-49a2a468-ced1-11e2-a5be-02ee2ddab7fe",uuid:d}),c.onNewConnection(function(a){return b?(c.publish({user:a,stream:b}),c.subscribe({user:a,stream:function(a,b){return console.log("Got stream:",b),document.querySelector("#call-video").src=URL.createObjectURL(b.stream)}})):void 0})}),document.querySelector("#call").addEventListener("click",function(){var a;return a=document.querySelector("#other-userid").value,c.publish({user:a,stream:b}),c.subscribe({user:a,stream:function(a,b){return console.log("Got stream:",b),document.querySelector("#call-video").src=URL.createObjectURL(b.stream)}})}),a=function(a){return document.querySelector("#self-call-video").src=URL.createObjectURL(a),b=a},navigator.webkitGetUserMedia({audio:!1,video:!0},a)}).call(this);