//o método up é responsável pela criação da tabela

exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) {
// o método down é, se der alguma problema, precisa desfazer o que fiz
    return knex.schema.dropTable('ongs');
};
