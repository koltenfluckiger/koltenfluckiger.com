class DatabaseService {

    constructor(service) {
        this.service = service;
    }

    async findIDs(items) {
        const subskills = [];
        for (const item of items) {
            const subskill = await this.service.findOne({
                returned_fields: {
                    _id: 1,
                },
                query: {
                    filter: {
                        title: item
                    }
                }
            });
            subskills.push(subskill._id);
        }
        return subskills;
    }

    async findID(item) {
        const id = await this.service.find({
            returned_fields: {
                _id: 1
            },
            query: {
                filter: {
                    title: item
                }
            }
        });
        return id;
    }
}

module.exports = DatabaseService;
