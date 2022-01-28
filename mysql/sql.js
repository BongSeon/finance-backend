module.exports = {
  consultList: `select * from consults order by datetime desc`,
  consultInsert: `insert into consults set ?`,
  consultUpdate: `update consults set ? where id=?`,
  consultDelete: `delete from consults where id=?`,
};
