const DatabaseLeave = require('../server/services/leave')
const Leave = require('../server/lib/leave')
const Support = require('../test/support')

const expect = require('chai').expect

describe('class Leave', () => {
  let sandbox

  beforeEach(() => {
    sandbox = require('sinon').createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('constructor', () => {
    it('should return a leave object', () => {
      const result = new Leave(Support.getLeaveRequestDouble().rows[0])

      expect(result.date).equal('04/04/19')
    })
  })

  describe('formatDate', () => {
    it('should return a date string in shortdate format', () => {
      const leave = new Leave([])

      const datelow = leave.formatDate('2019-04-03T23:00:00.000Z')
      const datehigh = leave.formatDate('2019-12-12T00:00:00.000Z')

      expect(datelow).equal('04/04/19')
      expect(datehigh).equal('12/12/19')
    })
  })

  describe('.getBalance', () => {
    it('should return a balance object', () => {
      const result = Leave.getBalance(Support.leaveObjectArrayDouble())

      expect(result.takenSoFar).equal(1)
      expect(result.planned).equal(1)
      expect(result.requested).equal(1)
    })
  })

  describe('.getLeave', () => {
    it('should return and array of leave objects', async () => {
      sandbox.stub(DatabaseLeave, 'getLeave').returns(Support.getLeaveRequestDouble())

      const result = await Leave.getLeave()

      expect(result.length).equal(3)
      expect(result[0].status).equal('pending')
    })
  })

  describe('.submitRange', () => {
    it('should construct a leave request string', async () => {
      const leave = sandbox.stub(DatabaseLeave, 'submitRequest')

      await Leave.submitRequest(Support.submitRequestDouble())

      expect(leave.callCount).equal(1)
    })

    it('should construct a leave request string (no JS)', async () => {
      const leave = sandbox.stub(DatabaseLeave, 'submitRequest')

      await Leave.submitRequest(Support.submitRequestNoJsDouble())

      expect(leave.callCount).equal(1)
    })
  })
})
