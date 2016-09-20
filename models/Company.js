var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Company = new keystone.List('Company', {
    autokey: { path: 'slug', from: 'name', unique: true },
    map: { name: 'name' },
    defaultSort: '-createdAt'
});

Company.add({
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    logo: { type: Types.CloudinaryImage },
    location: { type: Types.Location },
    contacts: { type: Types.Relationship, ref: 'Contact', many: true }
});

Company.relationship({ path: 'contacts', ref: 'Contact', refPath: 'contacts' });
Company.relationship({ path: 'departments', ref: 'Department', refPath: 'name' });

// Company.defaultColumns = 'title, state|20%, author, publishedAt|15%'
Company.register();