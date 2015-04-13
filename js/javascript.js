function validate()
{
	if(window.document.myform.name.value=="")
	{
		alert("Name field is Mandatory");
		window.document.myform.name.focus();
		return false;		
	}

	if(window.document.myform.comments.value=="")
	{
		alert("Message field is Mandatory");
		window.document.myform.comments.focus();
		return false;		
	}

	if(window.document.myform.email.value=="")
	{
		alert("E-mail field is Mandatory");
		window.document.myform.email.focus();
		return(false);
	}
	if(window.document.myform.phone.value=="")
	{
		alert("Contact number is Mandatory");
		window.document.myform.phone.focus();
		return(false);
	}

	str=window.document.myform.email.value;
	if(str.indexOf("@")==-1 ||str.indexOf(".")==-1 ||str.indexOf(",")!=-1||str.indexOf("?")!=-1||str.indexOf("%")!=-1||str.indexOf("<")!=-1||str.indexOf(">")!=-1||str.indexOf("&")!=-1||str.indexOf("+")!=-1||str.indexOf("=")!=-1||str.indexOf(" ")!=-1)
	{
		alert("Enter A Valid E-mail Id");
		window.document.myform.email.focus();
		return(false);
	}
	var str1=window.document.myform.phone.value;
	var l=str1.length;
	for(i=0;i<l;i++)
	{
	     var c=str1.charAt(i);
		 if(!(c>='0'&&c<='9'))
		 {
		     alert("Please enter a valid phone number. Avoid space if using");
			 window.document.myform.phone.focus();
			 return (false);
		}
	}
	
		return true;
}

   $("#p1").click(function(){
      $("#p11").hide();
	  });
	  
  function showHide(elementid){
if (document.getElementById(elementid).style.display == 'none'){
document.getElementById(elementid).style.display = '';
} else {
document.getElementById(elementid).style.display = 'none';
}
}



