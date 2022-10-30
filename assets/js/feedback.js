function passContact(e) {
	let name = document.getElementById("contact_name").value.replace(/ /g, "%20");
	let phone = document.getElementById("contact_phone").value.replace(/ /g, "%20");
	let text = document.getElementById("contact_message").value.replace(/ /g, "%20");

	var TOKEN = "5766249030:AAHXicdKFj9I0O5Cfrn2HO3LESos0aSRc0Q";
	var chatID = "-890044742";
	var api = "https://api.telegram.org/bot" + TOKEN + "/sendMessage?chat_id=" + chatID + "&parse_mode=html&text=";

	var message2 = `Bog'lanish formasidan yangi xabar: %0A%0A<b>Xabar jo'natuvchi ismi: </b> ${name} %0A<b>Xabar jo'natuvchi telefon raqami: </b> ${phone} %0A<b>Xabarning mazmuni: </b> ${text} %0A`;

	fetch(api + message2).then((result) => {
		document.getElementById("contact_name").value = null;
		document.getElementById("contact_phone").value = null;
		document.getElementById("contact_message").value = null;

		if (result.ok) {
			document.getElementById("custommodal__success").classList.add("show");
			setTimeout(() => {
				document.getElementById("custommodal__success").classList.remove("show");
			}, 5000);
		} else {
			document.getElementById("custommodal__error").classList.add("show");
			setTimeout(() => {
				document.getElementById("custommodal__error").classList.remove("show");
			}, 5000);
		}
	});
}
