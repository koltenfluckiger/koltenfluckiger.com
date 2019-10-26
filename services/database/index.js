class DatabaseService {

  constructor(service) {
    this.service = service;
  }

  async findIDs(items, options) {
    const ids = [];
    const filter = options.filter;

    for (const item of items) {
      const id = await this.service.find({filter: {[filter]: item}});
      ids.push(id);
    }
    return ids;
  }

  async findID(item, options) {
    const filter = options.filter;
    const id = await this.service.find({[filter]: item});
    return id;
  }
}

module.exports = DatabaseService;
