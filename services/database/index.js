class DatabaseService {

  constructor(service) {
    this.service = service;
  }

  async findIDs(items) {
    const subskills = {ids: [], searchTags: []}
    for (const item of items) {
      const subskill = await this.service.findOne({returned_fields: {_id: 1, searchTags: 1}, query: {filter: {title: item}}});
      subskills.ids.push(subskill._id);
      subskills.searchTags.push(subskill.searchTags);
    }
    return subskills;
  }

  async findID(item) {
    const id = await this.service.find({returned_fields: {_id: 1}, query: {filter: {title: item}}});
    return id;
  }
}

module.exports = DatabaseService;
