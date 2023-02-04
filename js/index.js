var input = document.querySelector("#phone");

window.intlTelInput(input, {

	
	separateDialCode: true,

	customPlaceholder: function (
		 selectedCountryPlaceholder,
		 selectedCountryData,
	) {
		 return selectedCountryPlaceholder;
	},

	
		initialCountry: "auto",
		geoIpLookup: function(success, failure) {
		  $.get("https://ipinfo.io/json?token=29817eec4d2a4c", function() {}, "json").always(function(resp) {
			 var countryCode = (resp && resp.country) ? resp.country : "us";
			 success(countryCode);
			 console.log(resp);
		  });
		},
	

});



