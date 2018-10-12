window.sendEmail = (obj) => {
	$.ajax({
			type: "POST",
			url: "https://mandrillapp.com/api/1.0/messages/send.json",
			data: {
					'key': 'ZGiSDAUGJIgaCMIqm9ysPA',
					'message': {
							"html": `<p>${obj.name} acaba de llegar. Por favor dirígase a la sala de recepción de Comunal Coworking para su encuentro</p>`,
							"text": "Notificación",
							"subject": `Tiene una visita`,
							"from_email": "alejandra.amezaga@laboratoria.la",
							"from_name": "Comunal Coworking",
							"to": [{
									"email": `${obj.host}`,
									"name": `${obj.host}`,
									"type": 'to'
							}],
							"headers": {
									"Reply-To": "marimel.casas@gmail.com"
							}

					},
					"async": false,
					"ip_pool": "Main Pool",
					"send_at": "2018-08-06 10:00:00"
			}
	}).then(res => {
			console.log(res);
	}).catch(err => {
			console.log(err);
			/* reject_reason: */
	});
};