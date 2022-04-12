import api from "../../utils/network";

const authenticationService = {
		login : function(data)  {
			return api.post('/auth/api/v1/login', data);
		},
		signup : function(data)  {
			return api.post('/auth/api/v1/signup', data);
		},
    verifyToken : function(data)  {
        return api.post('/auth/api/v1/verify', data);
    },
    getUserDetail : function(data)  {
        return api.get('/auth/api/v1/me');
    }
}

export default authenticationService;