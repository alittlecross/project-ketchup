const dbc = require('./database-connection')
const fs = require('fs')

class Run {
  static async updateTable (table, script) {
    await dbc.query(`
      INSERT INTO ${table} (script)
      VALUES ('${script}');
    `)
  }

  static async scriptAlreadyRan (table, script) {
    let result = await dbc.query(`
      SELECT *
      FROM ${table}
      WHERE script = '${script}';
    `)
    return result.rowCount === 0
  }

  static async tableExists (table) {
    let result = await dbc.query(`
      SELECT EXISTS (
        SELECT 1
        FROM   information_schema.tables 
        WHERE  table_schema = 'public'
        AND    table_name = '${table}'
      );
    `)
    return result.rows[0].exists
  }

  static async createTable (table) {
    if (!await this.tableExists(table)) {
      await dbc.query(`
        CREATE TABLE ${table} (
          id SERIAL PRIMARY KEY,
          script varchar(50),
          createdat timestamptz NOT NULL DEFAULT NOW()
        );
      `)
      console.log(`${table} 00_${table}.sql`)
    }
  }

  static async scripts (type, database) {
    process.env.PKDATABASE = database
    await this.createTable(type)
    const directory = `./db/${type}/`
    let scripts = []
    fs.readdirSync(directory).forEach(file => {
      scripts.push(file)
    })
    for (let script of scripts) {
      if (await this.scriptAlreadyRan(type, script)) {
        let sql = fs.readFileSync(directory + script).toString()
        await dbc.query(sql)
        await this.updateTable(type, script)
        console.log(`${type} ${script}`)
      }
    }
  }
}

module.exports = Run
