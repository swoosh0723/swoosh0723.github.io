$(function(){

        var map=null;
        var lat=40.4531233;
        var lng=-3.686941499999989;
        
        map = new GMaps({"el":".map","lat":lat,"lng":lng});
        
        map123.addMarker({
          lat: 40.4531233,
          lng: -3.686941499999989,
          title: 'Lima',
        });
	});	