const DatabaseAdd = require('../../services/person/add')
const DatabaseAddEdit = require('../../services/person/add-edit')
const DatabaseEdit = require('../../services/person/edit')

class AddEdit {
  static async personExists (data, edit = false) {
    const result = edit ? await DatabaseEdit.getPeople(data) : await DatabaseAdd.getPeople(data)
    return { status: !!result.rowCount }
  }

  static async skills (data, personId) {
    if (data.skills) {
      const skillIds = (!Array.isArray(data.skills)) ? [data.skills] : data.skills
      const joiner = `, ${personId}`
      const string = `${skillIds.join(`${joiner}), (`) + joiner}`
      await DatabaseAddEdit.addSkills(string)
    }
  }
}

module.exports = AddEdit
