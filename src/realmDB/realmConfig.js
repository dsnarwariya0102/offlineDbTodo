import Realm from 'realm';

// ✅ Define Todo Schema
export class Todo extends Realm.Object {
  static schema = {
    name: 'Todo',
    primaryKey: 'id',
    properties: {
      id: 'int',
      title: 'string',
      description: 'string',
    },
  };
}

// ✅ Initialize Realm with schema
const realm = new Realm({
  schema: [Todo],
  schemaVersion: 1,
});

export default realm;
