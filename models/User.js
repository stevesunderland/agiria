var keystone = require('keystone'),
    Types = keystone.Field.Types;

var User = new keystone.List('User');

User.add({
    name: { type: Types.Name, required: true, index: true },
    email: { type: Types.Email, initial: true, required: true, index: true },
    password: { type: Types.Password, initial: true },
    canAccessKeystone: { type: Boolean, initial: true }
});

// Provide access to Keystone
// User.schema.virtual('canAccessKeystone').get(function () {
// 	return this.isAdmin;
// });

User.register();