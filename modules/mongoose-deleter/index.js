class MongooseDeleterModule {

  async setDelete(schema) {
    schema.pre(["deleteOne","deleteMany"], async function(doc) {
      console.log(doc);
    })
  }
  defaultPlugin = (schema, options) => {
    this.setDelete(schema);
  }
}

module.exports = MongooseDeleterModule;
