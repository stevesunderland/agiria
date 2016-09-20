var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Contact = new keystone.List('Contact', {
    autokey: { path: 'slug', from: 'name', unique: true },
    map: { name: 'name' },
    defaultSort: '-createdAt'
});

Contact.add({
    name: { type: String, required: true },
    title: { type: String },
    company: { type: Types.Relationship, ref: 'Company' },
    department: { type: Types.Relationship, ref: 'Department' },
    photo: { type: Types.CloudinaryImage },
});

Contact.defaultColumns = 'name, company, department, photo'
Contact.register();