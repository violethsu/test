import { isString } from "util";
const util = require('util');
const _ = require('lodash');

function validMember (value) {
    if (!util.isArray(value)) {
        console.log(value +' is not a array');
        return false;
    } else {
        let name = value[0];
        let birth = value[1];
        let sex = value[2];
        let phoneNumber = value[3];
        if (!util.isString(name) || _.isEmpty(name)) {
            return false;
        }
        if (!util.isString(birth) || _.isEmpty(birth)) {
            return false;
        }
        if (!util.isNumber(sex) || _.isEmpty(phoneNumber)) {
            return false;
        }
        if (!util.isNumber(phoneNumber) || _.isEmpty(phoneNumber)) {
            return false;
        }
    };
    
}

function validString(value, name) {
	if ((_.isNumber(value) || _.isArray(value) || _.isObject(value)) && !_.isString(value)) {
		throw {
			code: 'invalid type',
			data: {
				field: name
			}
		};
	}
	return value;
}
// opts.agentId = util.validNumber(req.body.agentId, 'agentId');
function validRequireNumber(value, name) {
	if (!_.isNumber(value)) {
		if (_.isArray(value) || _.isString(value) || _.isObject(value)) {
			throw {
				code: responseCode.common.PARAMETER_ILLEGAL,
				data: {
					field: name
				}
			};
		} else {
			throw {
				code: responseCode.common.PARAMETER_REQUIRED,
				data: {
					field: name
				}
			};
		}
	}
	return value;
}