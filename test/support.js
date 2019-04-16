class Support {
  static getPersonDouble () {
    return {
      rowCount: 2,
      rows:
      [ { kind: 'details',
        personid: 1,
        staffid: 'MS1234',
        firstname: 'Michael',
        surname: 'Scott',
        email: 'michael.scott@scranton.com',
        gradeid: 1,
        locationid: 1,
        managerid: 1,
        role: 'Regional Manager',
        statusid: 1,
        archived: false,
        skillid: 0 },
      { kind: 'skill',
        personid: 0,
        staffid: '',
        firstname: '',
        surname: '',
        email: '',
        gradeid: 0,
        locationid: 0,
        managerid: 0,
        role: '',
        statusid: 0,
        archived: false,
        skillid: 1 } ]
    }
  }

  static getPeopleDouble () {
    return {
      rowCount: 2,
      rows:
      [ { personid: 2,
        staffid: 'DS1234',
        firstname: 'Dwight',
        surname: 'Schrute',
        email: 'dwight.schrute@scranton.com',
        password: '$2b$10$Jdm/.lzRgG9IiINFufv/keVED2khArCaBDDT532jccHHlg6dxnlzW',
        gradeid: 2,
        locationid: 1,
        managerid: 1,
        roleid: 2,
        statusid: 1,
        createdat: '2019-03-31T07:57:43.487Z',
        archived: false,
        role: 'Assistant to the Regional Manager' },
      { personid: 1,
        staffid: 'MS1234',
        firstname: 'Michael',
        surname: 'Scott',
        email: 'michael.scott@scranton.com',
        password: 'password',
        gradeid: 1,
        locationid: 1,
        managerid: 1,
        roleid: 1,
        statusid: 1,
        createdat: '2019-03-31T07:57:43.487Z',
        archived: false,
        role: 'Resource Manager' } ]
    }
  }

  static getPeopleDoubleZero () {
    return {
      rowCount: 0,
      rows:
      [ ]
    }
  }

  static peopleObjectDouble () {
    return {
      personId: 2,
      firstName: 'Twight',
      surname: 'Schrute',
      role: 'Assistant to the Regional Manager'
    }
  }

  static getOptionsDouble () {
    return {
      rowCount: 11,
      rows:
      [ { kind: 'grade', optionid: 1, option: 'HEO' },
        { kind: 'grade', optionid: 2, option: 'EO' },
        { kind: 'location', optionid: 1, option: 'Scranton' },
        { kind: 'manager', optionid: 1, option: 'Michael Scott' },
        { kind: 'role', optionid: 1, option: 'Resource Manager' },
        { kind: 'role', optionid: 2, option: 'Assistant to the Regional Manager' },
        { kind: 'role', optionid: 3, option: 'Sales Representative' },
        { kind: 'skill', optionid: 1, option: 'People' },
        { kind: 'skill', optionid: 2, option: 'Farming' },
        { kind: 'skill', optionid: 3, option: 'Selling' },
        { kind: 'status', optionid: 1, option: 'Permanent' } ]
    }
  }

  static optionObjectDouble () {
    return {
      optionId: 42,
      option: `Don't Panic`
    }
  }

  static submitRequestDouble () {
    return {
      personId: '1',
      start: '24/03/2005',
      end: '',
      dates: '2005-3-24',
      typeId: '1',
      durationId: '3'
    }
  }

  static submitRequestNoJsDouble () {
    return {
      personId: '1',
      start: '24/03/2005',
      end: '',
      dates: '',
      typeId: '1',
      durationId: '3'
    }
  }

  static addPersonDouble () {
    return {
      rowCount: 1,
      rows:
      [ { personid: 3 } ]
    }
  }

  static personFormData () {
    return {
      staffId: 'JH1234',
      firstName: 'Jim',
      surname: 'Halpert',
      email: 'jim.halpert@scranton.com',
      gradeId: '2',
      locationId: '1',
      managerId: '1',
      roleid: '1',
      statusId: '1'
    }
  }

  static getRequestDouble () {
    return {
      rowCount: 3,
      rows:
      [ { leavedate: '2019-04-03T23:00:00.000Z',
        duration: 'range',
        leavetype: 'annual',
        approved: false },
      { leavedate: '2019-04-02T23:00:00.000Z',
        duration: 'range',
        leavetype: 'annual',
        approved: false },
      { leavedate: '2019-04-01T23:00:00.000Z',
        duration: 'range',
        leavetype: 'annual',
        approved: false } ]
    }
  }
}

module.exports = Support
