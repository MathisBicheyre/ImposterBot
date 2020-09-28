// NeDB driver
var Datastore = require('nedb');

const logInsert = (doc) => {
  console.log('Inserted', doc.name, 'with ID', doc._id);
}

const logUpdate = (numReplaced) => {
  console.log('Updated', numReplaced, 'object(s)');
}

const logRemove = (numDeleted) => {
  console.log('Deleted', numDeleted, 'object(s)');
}

function findAll(col) {
  let db = new Datastore({ filename: `../data/${col}.db` });

  return users.find({}, function(err, docs) {
    return docs;
  });
}

function storeOne(col, doc){
  let db = new Datastore({ filename: `../data/${col}.db` });

  db.insert(doc, function(err, doc) {
    logInsert(doc);
  });
}

function storeMultiple(col, docs) {
  let db = new Datastore({ filename: `../data/${col}.db` });

  db.insert(docs, function(err, docs) {
    docs.forEach(function(doc) {
        logInsert(doc);
    });
  });
}

function updateOneField(col, id, field, value) {
  let db = new Datastore({ filename: `../data/${col}.db` });

  db.update({ _id: id }, { $set: { $field: value } }, {}, function (err, numReplaced) {
    logUpdate(numReplaced);
  });
}

function removeOne(col, id) {
  users.remove({ _id: id }, {}, function(err, numDeleted) {
    logRemove('Deleted', numDeleted, 'object(s)');
  });
}

// Exports
module.exports = {
  findAll,
  storeOne,
  storeMultiple,
  updateOneField,
  removeOne,
};
