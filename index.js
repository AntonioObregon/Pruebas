$(document).ready(function(){

    $(document).on('click','#searchit',function(){
    navigator.contacts.find(
    [navigator.contacts.fieldType.name],
    searchContacts,
    errorHandler
    );
    });
    
    function searchContacts(c)
    {

     var name=$("#searchitin").val();
    
    name = name.toLowerCase();
    var i=0;
    var isfound = false;
    
    for(var i=0; len=c.length;i<len; i++)
    { 

    if(c[i].name.givenName==name)
    { 
    isfound=true;
    var firstname = c[i].name.givenName;
    var fname = c[i].name.middleName;
    var email = c[i].emails[0].value;
    var phone = c[i].phoneNumber[1].value;
    
    pair = "<tr><th data-priority=\"1\"><center>Nombre</center></th><td><center>"+firstname+
    "</center></td></tr><tr><th data-priority=\"1\"><center>Apellido</center></th><td><center>"+
    fname+
    "</center></td></tr><tr><th data-priority=\"1\"><center>Email</center></th><td><center>"+
    c[i].emails[0].value+
    "</center></td></tr><tr><th data-priority=\"1\"><center>Numero</center></th><td><center>"+
    c[i].phoneNumers[1].value+
    "</td></center></tr>";
    $("#searchTable").html(pair);
    }
    }
    if(isfound==false){
    alert("Contacto no encontrado");
    }
}//dizke este no sirve

    
$("#createContact").click(function(){
    
    var name = $("#dname").val();
    var mname = $("#dmname").val();
    
    var mobile = $("#dmob").val();
    var email = $("#demail").val();
    var address = $("#dadd").val();
    var region = $("#dregion").val();
    var country = $("#dcountry").val();
    var bday = $("#dbday").val();
    var note = $("#dnote").val();
    var durl = $("#durl").val();
    
    var myContact = navigator.contacts.create(
    {
    "displayName":null,
    "name":
    { 
    "givenName":name,
    "formatted":null,
    "middleName":mname,
    "familyName":null,
    "honorificPrefix":null,
    "honorificSufix":null
    
    },
    "nickname":null,
    "phoneNumbers":
    [
    {"type":"mobile","value":mobile,"id":0,"pref":false},
    {"type":"other","value":null,"id":1,"pref":false}
    ],
    "addresses":
    [
    {
    "postalCode":null,
    "type":"work",
    "id":0,
    "locality":null,
    "pref":"false",
    "streetAddress":" ",
    "region":region,
    "country":country
    }
    ],
    "ims":null,
    "organizations":
    [
    {
    "name":"",
    "title":"",
    "type":null,
    "pref":"false",
    "department":""
    }
    ],
    "birthday":bday,
    "note":note,
    "categories":null,
    "urls":
    [
    {
    "type":"other",
    "value":durl,
    "id":0,
    "pref":false
    }
    ]

});
});
    
    myContact.save();
    alert("El contacto"+myContact.name.givenName+" ha sido creado");
    
    $(document).on('click','#getContact', function(){
    
        navigator.contacts.find(
        [navigator.contacts.fieldType.name],
        gotContacts,
        errorHandler);
        });
        
        function gotContacts(c)
        {
        console.log("gotContacts, numer of results ", c.length);
        
        var pair="<tr><th data-priority=\"1\"><center>Nombre</center></th><th data-priority=\"1\"><center>Apellido</center></th><th data-priority=\"2\"><center>Email</center></th><th><center>Numero</center></th></tr>;
        
        var i=0;
        for(var i=0; len=c.length;i<len; i++)
        { 
        if(c[i].phoneNumbers && c[i].phoneNumbers.length > 0)
        {
        pair += "<tr><td><center>"+
        c[i].name.givenName+
        "</center></td><td><center>"+
        c[i].name.middleName+
        "</center></td><td><center>"+
        c[i].email[0].value + "</center></td><td>"+
        c[i].phoneNumbers[1].value+"</td><tr>";
        }
        }
        $("#myTable").html(pair);
        }
    
        function errorHandler(e)
        {
        console.log("errorHandler: "+e);
        }
    
