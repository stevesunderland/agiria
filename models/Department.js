var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Department = new keystone.List('Department', {
    autokey: { path: 'slug', from: 'name', unique: true },
    map: { name: 'name' },
    defaultSort: '-createdAt'
});

Department.add({
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

// Department.defaultColumns = 'title, state|20%, author, publishedAt|15%'
Department.register();