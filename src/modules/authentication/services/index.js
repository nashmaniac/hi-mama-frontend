import api from "../../utils/network";

const authenticationService = {
		login : function(data)  {
			return api.post('/v1/login', data);
		},
		signup : function(data)  {
			return api.post('/v1/signup', data);
		},
    getUserDetail : function(data)  {
        return api.get('/v1/me');
    }
}

export default authenticationService;