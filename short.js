<script language='javascript'>
var key = window.location.href.split("go/")[1].replace("/","")
var urls={
    'test':'http://google.com.br/',
}
if(key){
    if(urls[key]){
        window.location.href=urls[key]
    }else{
        document.write("'"+key+"' not found :(");
    }
}
</script>
