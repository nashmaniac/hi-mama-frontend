import api from "../../utils/network";

const trackerService = {
		clockIn : function()  {
			return api.post('/v1/clock-in');
		},
		clockOut : function()  {
			return api.post('/v1/clock-out');
		},
		ongoing : function()  {
			return api.get('/v1/ongoing');
		},
		getEntries: function() {
			return api.get("/v1/entries");
		},
		editEntry: function(id, data) {
			return api.put("/v1/entries/"+id, data)
		}
}

export default trackerService;